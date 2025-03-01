"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";

const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = useCallback((item) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === item.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== item.id);
      }
      return [...prev, item];
    });
  }, []);

  const isFavorite = useCallback((itemId) => {
    return favorites.some((fav) => fav.id === itemId);
  }, [favorites]);

  const value = useMemo(() => ({
    favorites,
    toggleFavorite,
    isFavorite,
  }), [favorites, toggleFavorite, isFavorite]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
