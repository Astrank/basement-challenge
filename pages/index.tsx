import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import type { Product } from "../product/types";
import { useCart } from "../utils/Cart";

import header from "../assets/header.svg";
import globe from "../assets/globe.svg";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-screen">
      <div className="p-7">
        <Image src={header} />
      </div>
      <div className="marquee border-t border-b my-8 py-3 text-xl md:text-4xl whitespace-nowrap">
        <div className="marquee__inner">
          <span>A man can’t have enough base­ment. swag   —  </span>
          <span>A man can’t have enough base­ment. swag   —   </span>
          <span>A man can’t have enough base­ment. swag   —   </span>
          <span>A man can’t have enough base­ment. swag   —   </span>
        </div>
      </div>
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-3 sm:px-7 sm:grid sm:grid-cols-2">
        {products &&
          products.map((product) => (
            <div key={product.id}>
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
                  <Image src={globe} />
                </div>
              </div>
              <div className="flex flex-row border-t-2 py-3 text-xl">
                <h1>{product.name}</h1>
                <h1 className="ml-auto">{`$${product.price}`}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../product/mock.json").then(res => res.default);

  return {
    props: {
      products,
    },
  };
};

export default Home;
