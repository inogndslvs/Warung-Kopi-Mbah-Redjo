import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useNavigate } from "react-router-dom";
import defaultFoodImage from "../../assets/thumbnail.png";
import apiService from "../../service/config";
import { formatRupiah } from "../../utils/currency";

const FeaturedMenu = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart, removeFromCart, isInCart, cartItems } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const params = new URLSearchParams();
        params.append("featured", "true");
        const response = await apiService.products.getAll(params.toString());
        setFeaturedItems(response.data.data);
      } catch (error) {
        console.error("Error fetching featured items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedItems();
  }, []);

  const calculateRemainingStock = (menu) => {
    const cartItem = cartItems.find(
      (cartItem) =>
        cartItem.id === menu.id && cartItem.category === menu.category
    );
    const stockInCart = cartItem ? cartItem.quantity : 0;
    return menu.stock - stockInCart;
  };

  const items = featuredItems.map((menu) => {
    const inCart = isInCart(menu.id, menu.category);
    const favorite = isFavorite(menu.id);
    const stock = calculateRemainingStock(menu);
    const isOutOfStock = stock <= 0;

    const handleCartAction = () => {
      if (inCart) {
        const cartItem = cartItems.find(
          (cartItem) =>
            cartItem.id === menu.id && cartItem.category === menu.category
        );
        if (cartItem) {
          removeFromCart(cartItem.cartId);
        }
      } else {
        if (stock > 0) {
          addToCart(menu);
        }
      }
    };

    const handleBuyNow = () => {
      if (!inCart && stock > 0) {
        addToCart(menu);
        navigate("/checkout");
      }
    };

    return (
      <div
        key={menu.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden 
            mx-7 h-full" 
      >
        <div className="relative group">
          <img
            src={menu.image || defaultFoodImage}
            alt={menu.name}
            className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => (e.target.src = defaultFoodImage)}
          />
          <button
            onClick={() => toggleFavorite(menu)}
            className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300"
          >
            <Heart
              className={`w-5 h-5 ${
                favorite ? "text-red-500" : "text-gray-600"
              }`}
              fill={favorite ? "currentColor" : "none"}
            />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">
              {menu.category}
            </span>
            <span
              className={`text-xs font-medium ${
                isOutOfStock ? "text-red-500" : "text-green-500"
              }`}
            >
              Stok: {stock}
            </span>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
              {menu.name}
            </h3>
            <span className="text-md font-bold text-primary">
              {formatRupiah(menu.price)}
            </span>
          </div>

          <p className="text-xs text-gray-600 line-clamp-2">
            {menu.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <button
              onClick={handleCartAction}
              disabled={isOutOfStock && !inCart}
              className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                isOutOfStock && !inCart
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {inCart ? "Dalam Keranjang" : "Keranjang"}
            </button>
            <button
              onClick={handleBuyNow}
              disabled={isOutOfStock || inCart}
              className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all duration-300 ${
                isOutOfStock || inCart
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-kuning hover:bg-kuning/80 text-primary"
              }`}
            >
              Beli Langsung
            </button>
          </div>
        </div>
      </div>
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-primary p-4 sm:p-6 md:p-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bright text-center text-kuning my-4 sm:my-6">
        Menu Unggulan
      </h2>
      <div className="px-2 sm:px-4 md:px-6">
        <AliceCarousel
          items={items}
          responsive={{
            0: { items: 1 },
            640: { items: Math.min(2, items.length) },
            1024: { items: Math.min(3, items.length) }
          }}
          autoPlayInterval={3000}
          infinite
          animationDuration={500}
          disableDotsControls={true}
          disableButtonsControls={true}
          paddingLeft={10}
          mouseTracking
          paddingRight={10}
        />
      </div>
    </div>
  );
};

export default FeaturedMenu;