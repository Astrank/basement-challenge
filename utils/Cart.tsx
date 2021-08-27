import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../product/types";

interface CartItem {
  quantity: number;
  product: Product;
}

type Cart = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  total: number;
};

const cartContextDefaultValues: Cart = {
  cart: [],
  addToCart: (product: Product) => {},
  removeFromCart: (id: string) => {},
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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let newTotal = 0;
    cart.map((item) => (newTotal += item.product.price * item.quantity));
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product: Product) => {
    if (cart.find((i) => i.product.id == product.id)) {
      cart.map((item) => {
        if (item.product.id == product.id) {
          item.quantity++;
          setCart([...cart]);
          return;
        }
      });
    } else {
      const cartItem: CartItem = {
        quantity: 1,
        product: product,
      };

      setCart([...cart, cartItem]);
    }
  };

  const removeFromCart = (id: string) => {
    cart.map((item, index) => {
      if (item.product.id == id) {
        item.quantity > 1 ? item.quantity-- : cart.splice(index, 1);
      }
    });

    setCart([...cart]);
  };

  return {
    cart,
    total,
    addToCart,
    removeFromCart,
  };
}
