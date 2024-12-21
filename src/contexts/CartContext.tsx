import {createContext, useState, ReactNode, useContext} from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity?: number;
  price?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({children}: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const ExistItem = cart.findIndex(cartItem => cartItem.id === item.id);
    if (ExistItem === -1) {
      setCart([...cart, item]);
    }
  };

  const values: CartContextType = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
