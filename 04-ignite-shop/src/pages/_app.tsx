import type { AppProps } from "next/app";
import logoImg from "../assets/logo.svg";
import { globalStyles } from "../styles/globals";
import { Container, Header } from "../styles/pages/app";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt=""></img>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
