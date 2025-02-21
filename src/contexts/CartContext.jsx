"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // 🔹 Mengambil data dari local storage saat pertama kali aplikasi dimuat
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // 🔹 Menyimpan data ke local storage setiap kali keranjang berubah
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // ✅ Menambah item ke dalam cart
  const addToCart = (item) => {
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
  };

  // ✅ Menghapus item berdasarkan cartId
  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  // ✅ Mengupdate jumlah item di dalam cart
  const updateQuantity = (cartId, change) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) =>
            item.cartId === cartId
              ? { ...item, quantity: Math.max(item.quantity + change, 0) }
              : item
          )
          .filter((item) => item.quantity > 0) // Jika 0, item dihapus
    );
  };

  // ✅ Mengecek apakah item ada di dalam cart
  const isInCart = (itemId, category) => {
    return cartItems.some(
      (item) => item.id === itemId && item.category === category
    );
  };

  // ✅ Menghapus semua item di dalam cart
  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Menghitung total harga
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
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

// Hook untuk menggunakan CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
