import type {AppProps} from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";
import React from "react";
import { ProvideCart } from "../utils/Cart";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta
          content="Coding challenge for basement.studio."
          name="description"
        />
      </Head>
      <ProvideCart>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ProvideCart>
    </>
  );
}

export default App;