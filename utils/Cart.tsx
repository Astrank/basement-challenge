import React, { createContext, ReactNode, useContext } from "react";
import { Product } from "../product/types";

interface CartItem {
  quantity: number;
  optionSelected: string;
  product: Product;
}

type Cart = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeOneFromCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  total: number;
};

const cartContextDefaultValues: Cart = {
  cart: [],
  addToCart: (product: Product) => {},
  removeOneFromCart: (product: Product) => {},
  removeFromCart: (product: Product) => {},
  total: 0,
};

type Props = {
  children: ReactNode;
};

const CartContext = createContext<Cart>(cartContextDefaultValues);

export function ProvideCart({ children }: Props) {
  const cart = useProvideCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  return useContext(CartContext);
};

function useProvideCart() {
  return cartContextDefaultValues;
}