"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, isInCart, cartItems } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(item.id);
  const [inCart, setInCart] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Pastikan tombol batal berfungsi dengan baik
  useEffect(() => {
    setInCart(isInCart(item.id, item.category));
  }, [cartItems, isInCart, item.id, item.category]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite(item);
  };

  const handleCartAction = () => {
    if (inCart) {
      // Cari cartId dari item yang sesuai sebelum menghapusnya
      const cartItem = cartItems.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.category === item.category
      );
      if (cartItem) {
        removeFromCart(cartItem.cartId);
      }
    } else {
      addToCart(item);
    }
  };

  const handleBuyNow = () => {
    if (!inCart) {
      addToCart(item);
      navigate("/checkout");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[300px]">
      <div className="relative p-3">
        <img
          src={
            item.image ||
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kdU97g70tZp79vvi0niSP5nn3D2IVp.png"
          }
          alt={item.name}
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-6 left-6 p-2 bg-secondary rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart
            className={`w-5 h-5 ${favorite ? "text-red-500" : "text-gray-600"}`}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-4 space-y-2">
        <div className="text-sm font-medium text-textnav uppercase tracking-wide">
          {item.category}
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
          <div className="text-primary font-bold">
            Rp {item.price.toLocaleString()}
          </div>
        </div>
        <div className="text-sm text-gray-700">
          Stok: <span className="font-semibold">{item.stock}</span>
        </div>
        <div>
          <p
            className={`text-sm text-textnav  ${
              !showFullDescription && "line-clamp-1"
            }`}
          >
            {item.description}
          </p>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-sm text-third hover:underline"
          >
            {showFullDescription ? "Lebih sedikit" : "Baca Selengkapnya"}
          </button>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={handleCartAction}
            className={`flex py-2 items-center justify-center gap-2 rounded-lg transition flex-1
    ${
      inCart
        ? "bg-red-500 text-white hover:bg-red-700"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
          >
            {inCart ? (
              "Batal"
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Keranjang
              </>
            )}
          </button>

          <button
            onClick={handleBuyNow}
            disabled={inCart}
            className={`rounded-lg transition text-center flex-1
              ${
                inCart
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#D4E265] hover:bg-[#bcc75b] text-primary"
              }`}
          >
            Beli Langsung
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
