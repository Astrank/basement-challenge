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
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const cartLocalStorage = window.localStorage.getItem("cart");

    if (cartLocalStorage) {
      setCart(JSON.parse(cartLocalStorage));
    }

    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart])

  useEffect(() => {
    const newTotal = cart.reduce((t, item) => {
      return t + item.product.price * item.quantity;
    }, 0)
    
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product: Product) => {
    const matchProduct = cart.find((i) => i.product.id == product.id);
    
    if (matchProduct) {
      matchProduct.quantity++;
      setCart([...cart]);
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
