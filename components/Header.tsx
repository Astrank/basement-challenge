import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useCart } from "../utils/Cart";

import logo from "../assets/logo.svg";
import logoSmall from "../assets/logo-small.svg";
import yourCart from "../assets/your-cart.svg";
import checkout from "../assets/checkout.svg";
import navIcons from "../assets/nav-icons.svg";
import React from "react";

const Header = () => {
  const { cart, total, addToCart, removeFromCart } = useCart();

  return (
    <header className="flex flex-row items-center p-7 mx-auto justify-between">
      <div>
        <Link href="/">
          <a className="hidden md:block">
            <Image alt="Basement" src={logo} />
          </a>
        </Link>
        <Link href="/">
          <a className="block md:hidden">
            <Image alt="Basement" src={logoSmall} />
          </a>
        </Link>
      </div>
      <div className="hidden lg:block">
        <Image src={navIcons} />
      </div>
      <Dialog.Root>
        <Dialog.Trigger className="border px-7 py-1 rounded-full ml-auto text-md md:text-lg md:ml-0 outline-none cursor-pointer">
          CART ({cart.length})
        </Dialog.Trigger>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-60" />
        <Dialog.Content className="bg-black flex flex-col ml-auto w-screen md:w-auto fixed right-0">
          <div className="px-7 flex flex-col md:border-l">
            <Dialog.Close
              className="py-3 ml-auto border-none outline-none text-2xl"
              aria-label="Close"
            >
              <div>→ CLOSE</div>
            </Dialog.Close>
            <Image src={yourCart} />
            <div className="my-7 flex flex-col gap-4">
              {cart.map((item) => (
                <div className="relative border p-4 flex flex-row gap-4" key={item.product.id}>
                  <div className="relative bg-gradient-to-t from-custom-grey to-black flex items-center">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      objectFit="contain"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div>
                      <h1 className="uppercase text-xl">{item.product.name}</h1>
                      <h2 className="text-lg text-gray-500">{item.product.description}</h2>
                    </div>
                    <div className="mt-auto">
                      {item.product.options.map((option) => (
                        <div className="flex items-center" key={option.label}>
                          <p className="text-lg uppercase">{`${option.label}: `}</p>
                          <RadioGroup.Root className="flex gap-2 ml-2">
                            {option.values.map((value) => (
                              <div key={value}>
                                <RadioGroup.Item value={value} id={value}>
                                  <RadioGroup.Indicator />
                                </RadioGroup.Item>
                                <label className="cursor-pointer" htmlFor={value}>{value}</label>
                              </div>
                            ))}
                          </RadioGroup.Root>
                        </div>
                      ))}
                      <p className="text-lg">
                        QUANTITY:
                        <div className="ml-2 flex gap-2 inline-flex">
                          <button onClick={() => removeFromCart(item.product.id)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => addToCart(item.product)}>+</button>
                        </div>
                      </p>
                      <p className="text-xl">{`PRICE: $${item.product.price}`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center divide-y px-7 md:border md:flex-row md:divide-x md:divide-y-0 md:px-0">
            <div className="p-7 w-full text-3xl">{`TOTAL: $${total}`}</div>
            <Link href="/">
              <a className="p-7 w-full flex justify-center">
                <Image src={checkout} />
              </a>
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </header>
  );
};

export default Header;
