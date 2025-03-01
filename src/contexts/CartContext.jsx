"use client";

import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Memoize functions with useCallback
  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (i) => i.id === item.id && i.category === item.category
      );

      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.category === item.category
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1, cartId: Date.now() }];
    });
  }, []);

  const removeFromCart = useCallback((cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  }, []);

  const updateQuantity = useCallback((cartId, change) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.max(item.quantity + change, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const isInCart = useCallback((itemId, category) => {
    return cartItems.some(
      (item) => item.id === itemId && item.category === category
    );
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotal = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


// Hook untuk menggunakan CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
