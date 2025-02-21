"use client";
import { useEffect, useState } from "react";
import api from "../api/api";
import MenuItem from "../component/moleculs/MenuItem";
import CheckoutButton from "../component/atoms/CeckoutButton";
import { useCart } from "../contexts/CartContext";

const PilihanMinuman = () => {
  const { isInCart } = useCart();
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get(
          "https://api.warungkopimbahredjo.com/api/products"
        );
        // Filter hanya kategori minuman
        const filteredDrinks = response.data.data.filter(
          (item) => item.category === "minumana"
        );
        setDrinks(filteredDrinks);
      } catch (error) {
        console.error("Gagal mengambil data minuman:", error);
        setError("Gagal memuat menu minuman, coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="container pt-28 mx-auto px-4 py-8 pb-20">
      <h1 className="text-3xl font-bright text-primary mb-8">
        Pilihan Minuman
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {drinks.map((drink) => (
            <MenuItem key={drink.id} item={drink} />
          ))}
        </div>
      )}

      <CheckoutButton />
    </div>
  );
};

export default PilihanMinuman;
