import { createContext, useContext, useState, useEffect } from 'react';

const CART_KEY = 'albarka_cart';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCartState] = useState(() => {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId, quantity = 1) => {
    setCartState((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + Math.max(1, Number(quantity) || 1),
    }));
  };

  const setCartQuantity = (productId, quantity) => {
    const q = Math.max(0, Number(quantity) || 0);
    if (q < 1) {
      removeFromCart(productId);
      return;
    }
    setCartState((prev) => ({ ...prev, [productId]: q }));
  };

  const removeFromCart = (productId) => {
    setCartState((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const clearCart = () => setCartState({});

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, setCartQuantity, removeFromCart, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
