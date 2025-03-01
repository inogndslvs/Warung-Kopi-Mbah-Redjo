import { useState, useEffect } from "react";
import MenuItem from "../component/moleculs/MenuItem";
import CheckoutButton from "../component/atoms/CeckoutButton";
import { useCart } from "../contexts/CartContext";
import apiService from "../service/config";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PilihanMakanan = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isInCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await apiService.products.getByCategory("Makanan");
        // Format prices to IDR
        const formattedFoods = response.data.data.map((food) => ({
          ...food,
        }));
        setFoods(formattedFoods);
      } catch (error) {
        console.log("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="container pt-28 mx-auto px-4 py-8 pb-20">
      <button
        onClick={() => navigate("/menu")}
        className="flex items-center font-bright text-2xl text-primary hover:underline mb-4"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to Menu
      </button>
      <h1 className="text-3xl font-bright text-primary mb-8">
        Pilihan Makanan
      </h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {foods.map((food) => (
            <MenuItem key={food.id} item={food} />
          ))}
        </div>
      )}

      <CheckoutButton />
    </div>
  );
};

export default PilihanMakanan;
