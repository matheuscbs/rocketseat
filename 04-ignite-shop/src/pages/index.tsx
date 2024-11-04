import axios from "axios";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import sharp from "sharp";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string | null;
    price: number;
    blurDataURL: string | null;
  }[];
}

async function getBlurDataURL(imageUrl: string): Promise<string | null> {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(response.data, "binary");

    const blurredImageBuffer = await sharp(imageBuffer)
      .resize(16, 16)
      .blur()
      .toBuffer();

    return `data:image/jpeg;base64,${blurredImageBuffer.toString("base64")}`;
  } catch (error) {
    console.error(`Erro ao gerar blurDataURL para ${imageUrl}:`, error);
    return null;
  }
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id} legacyBehavior>
          <Product className="keen-slider__slide">
            <Image
              src={product.imageUrl ?? ""}
              alt={product.name}
              width={520}
              height={480}
              placeholder={product.blurDataURL ? "blur" : "empty"}
              blurDataURL={product.blurDataURL || undefined}
            />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = await Promise.all(
    response.data.map(async (product) => {
      const price = product.default_price as Stripe.Price;
      const imageUrl = product.images[0] || null;

      const blurDataURL = imageUrl ? await getBlurDataURL(imageUrl) : null;

      return {
        id: product.id,
        name: product.name,
        imageUrl,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format((price.unit_amount ?? 0) / 100),
        blurDataURL,
      };
    })
  );

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2h
  };
};
