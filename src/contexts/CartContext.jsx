"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  isInCart: () => false,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      // Check if item already exists in cart
      const existingItem = prev.find(
        (i) => i.id === item.id && i.category === item.category
      );
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.category === item.category
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i
        );
      }
      // Add new item with category
      return [...prev, { ...item, quantity: 1, cartId: Date.now() }];
    });
  };

  const removeFromCart = (itemId, category) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === itemId && item.category === category))
    );
  };

  const Hapus = (ItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== ItemId)
    );
  };

  const updateQuantity = (cartId, change) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          const newQuantity = (item.quantity || 1) + change;
          if (newQuantity < 1) return item;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const isInCart = (itemId, category) => {
    return cartItems.some(
      (item) => item.id === itemId && item.category === category
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
