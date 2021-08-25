import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../assets/logo.svg";
import logoSmall from "../assets/logo-small.svg";
import yourCart from "../assets/your-cart.svg";
import checkout from "../assets/checkout.svg";

const Header = () => {
  return (
    <header className="flex flex-row items-center p-7 mx-auto justify-between">
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
      <Dialog.Root>
        <Dialog.Trigger className="border px-7 py-1 rounded-3xl ml-auto text-md md:text-lg md:ml-0 outline-none cursor-pointer">
          CART (0)
        </Dialog.Trigger>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-60" />
        <Dialog.Content className="bg-black flex flex-col ml-auto w-screen md:w-auto fixed right-0 ">
          <div className="px-7 flex flex-col md:border-l">
            <Dialog.Close className="py-3 ml-auto border-none outline-none text-2xl">
              <div>CLOSE</div>
            </Dialog.Close>
            <Image src={yourCart} />
            <div className="border p-4 my-7 ">EMPTY</div>
          </div>
          <div className="flex flex-col items-center justify-center divide-y px-7 md:border md:flex-row md:divide-x md:divide-y-0 md:px-0">
            <div className="p-7 w-full text-2xl">TOTAL:</div>
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
