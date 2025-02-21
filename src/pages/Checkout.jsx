"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import ModalDataKosong from "../component/modal/mdldtaKosong";
import ModalTerimaKasih from "../component/modal/mdlThanks";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, getTotal, updateQuantity, removeFromCart } =
    useCart();

  const [formData, setFormData] = useState({
    name: "",
    tableNumber: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setThankYouModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.tableNumber.trim()) {
      setIsModalOpen(true);
      return;
    }

    const orderData = {
      customer_name: formData.name, // ✅ Ubah dari "name" ke "customer_name"
      table_number: formData.tableNumber, // ✅ Ubah dari "tableNumber" ke "table_number"
      item: cartItems.map((item) => ({
        product_id: item.id, // ✅ Ubah dari "productId" ke "product_id"
        quantity: item.quantity,
      })),
    };

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.warungkopimbahredjo.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ Pastikan token disertakan jika diperlukan
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengirim pesanan");
      }

      setThankYouModalOpen(true);
      clearCart();

      setTimeout(() => {
        setThankYouModalOpen(false);
        navigate("/menu");
      }, 5000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container pt-28 mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl text-primary text-center font-bright font-bold mb-6">
        Pembayaran
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-6 flex justify-between">
          <div className="mb-4 w-full mr-2">
            <label className="block text-xl text-red-600 mb-2 font-bright">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-xl text-red-600 mb-2 font-bright">
              No Meja
            </label>
            <input
              type="text"
              name="tableNumber"
              value={formData.tableNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="border rounded-md p-4 space-y-4">
          <h2 className="font-semibold">Pesanan Anda</h2>
          {cartItems.map((item) => (
            <div
              key={item.cartId}
              className="flex items-center gap-4 py-4 border-b"
            >
              <img
                src={item.image || "/placeholder.svg"}
                className="w-16 h-16 rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="font-semibold mt-1">
                  Rp {item.price.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.cartId, -1)}
                  className="p-1 border rounded"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity || 1}</span>
                <button
                  onClick={() => updateQuantity(item.cartId, 1)}
                  className="p-1 border rounded"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeFromCart(item.cartId)}
                  className="p-1 text-red-500"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between pt-4 font-bold">
            <span>Total:</span>
            <span>Rp {getTotal().toLocaleString()}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/menu")}
            className="flex-1 bg-gray-500 text-white py-3 rounded-md"
          >
            Tambah Pesanan
          </button>
          <button
            type="submit"
            className="flex-1 bg-primary text-white py-3 rounded-md"
            disabled={loading}
          >
            {loading ? "Memproses..." : "Pesan"}
          </button>
        </div>
      </form>

      <ModalDataKosong
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ModalTerimaKasih
        isOpen={isThankYouModalOpen}
        onClose={() => setThankYouModalOpen(false)}
      />
    </div>
  );
};

export default Checkout;
