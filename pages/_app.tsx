import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";
import { ProvideCart } from "../utils/Cart";
import { IdProvider } from "@radix-ui/react-id";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <IdProvider>
        <Head>
          <title>Basement Supply</title>
          <meta content="Coding challenge for basement.studio." name="description" />
        </Head>
        <ProvideCart>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ProvideCart>
      </IdProvider>
    </>
  );
}

export default App;
