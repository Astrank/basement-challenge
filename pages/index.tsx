import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import type { Product } from "../product/types";
import { useCart } from "../utils/Cart";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import Footer from "../components/Footer";

import globe from "../assets/globe.svg";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-black text-white">
      <Head>
        <title>Basement Supply</title>
        <meta content="Coding challenge for basement.studio." name="description" />
      </Head>

      <Header />

      <Marquee text="A man can’t have enough base­ment. swag   —   " />

      <section className="p-4 md:p-7 mx-auto max-w-8xl">
        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3">
          {products &&
            products.map((product) => (
              <article key={product.id}>
                <div className="relative bg-gradient-to-t from-custom-grey to-black">
                  <Image
                    alt={product.name}
                    objectFit="contain"
                    height={512}
                    layout="responsive"
                    src={product.image}
                    width={512}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100"
                    onClick={() => addToCart(product)}
                  >
                    <Image src={globe} alt="Glove" />
                  </div>
                </div>
                <div className="flex flex-row border-t-2 py-3 text-xl">
                  <h1>{product.name}</h1>
                  <h1 className="ml-auto">{`$${product.price}`}</h1>
                </div>
              </article>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../product/mock.json").then((res) => res.default);

  return {
    props: {
      products,
    },
  };
};

export default Home;
