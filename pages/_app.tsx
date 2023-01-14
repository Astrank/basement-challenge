import type { AppProps } from "next/app";
import "../styles/global.css";
import { ProvideCart } from "../utils/Cart";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProvideCart>
        <Component {...pageProps} />
      </ProvideCart>
    </>
  );
}

export default App;
