import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          similique nam laboriosam adipisci voluptate quas velit omnis, tempore
          id nisi commodi eos repellat tempora atque vitae quo impedit et
          praesentium.
        </p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
