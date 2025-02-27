import { useEffect, useState } from "react";
import { ShoppingCart, Heart, Trash2 } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useNavigate } from "react-router-dom";
import defaultFoodImage from "../../assets/thumbnail.png"; // Add your default image

const MenuItem = ({ item }) => {
  console.log("Item:", item);
  const navigate = useNavigate();
  const { addToCart, removeFromCart, isInCart, cartItems } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(item.id);
  const [inCart, setInCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentStock, setCurrentStock] = useState(item.stock || 0);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    setInCart(isInCart(item.id, item.category));
    calculateRemainingStock();
  }, [cartItems, isInCart, item.id, item.category]);

  const formatToIDR = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateRemainingStock = () => {
    const cartItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id && cartItem.category === item.category
    );
    const stockInCart = cartItem ? cartItem.quantity : 0;
    setCurrentStock(item.stock - stockInCart);
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite(item);
  };

  const handleCartAction = () => {
    if (inCart) {
      const cartItem = cartItems.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.category === item.category
      );
      if (cartItem) {
        removeFromCart(cartItem.cartId);
        setInCart(false);
      }
    } else {
      if (currentStock > 0) {
        addToCart(item);
        setInCart(true);
      }
    }
  };

  const handleBuyNow = () => {
    if (!inCart) {
      addToCart(item);
      navigate("/checkout");
    }
  };

  const handleRemoveFromCart = () => {
    const cartItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id && cartItem.category === item.category
    );
    if (cartItem) {
      removeFromCart(cartItem.cartId);
      setInCart(false);
    }
  };

  const isOutOfStock = currentStock <= 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-[320px]">
      <div className="relative group">
        <img
          src={imageError ? defaultFoodImage : item.image}
          onError={handleImageError}
          alt={item.name}
          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300"
        >
          <Heart
            className={`w-5 h-5 ${favorite ? "text-red-500" : "text-gray-600"}`}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent h-20" />
      </div>

      <div className="p-5 space-y-4">
        <div className="">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
              {item.category}
            </span>
            <span
              className={`text-sm font-medium ${
                isOutOfStock ? "text-red-500" : "text-green-500"
              }`}
            >
              Stok: {currentStock}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
              {item.name}
            </h3>
            <span className="text-lg font-bold text-primary">
              {formatToIDR(item.price)}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p
            className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
              showFullDescription
                ? "h-auto"
                : "line-clamp-2 hover:text-gray-800"
            }`}
          >
            {item.description}
          </p>
          {item.description.length > 100 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-sm font-medium text-third hover:text-primary transition-all duration-300 flex items-center gap-1 group"
            >
              {showFullDescription ? "Lebih sedikit" : "Selengkapnya"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  showFullDescription ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="flex gap-3 pt-2">
          {inCart ? (
            <div className="flex gap-3 w-full">
              <button
                onClick={handleRemoveFromCart}
                className="flex-1 py-3 px-4 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Trash2 className="w-4 h-4" />
                Hapus
              </button>
              <button
                onClick={handleCartAction}
                className="flex-1 py-3 px-4 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Batal
              </button>
            </div>
          ) : (
            <div className="flex gap-3 w-full">
              <button
                onClick={handleCartAction}
                className="flex-1 basis-1 py-3 px-4 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <ShoppingCart className="w-4 h-4" />
                Keranjang
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 basis-1/2 py-3 px-4 rounded-lg font-medium bg-kuning hover:bg-kuning/80 text-primary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                Beli Langsung
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
