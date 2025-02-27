"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import ModalDataKosong from "../component/modal/mdldtaKosong";
import ModalTerimaKasih from "../component/modal/mdlThanks";
import Modal from "../component/modal/modal";
import apiService from "../service/config";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, getTotal, updateQuantity, removeFromCart } =
    useCart();

  const [message, setMessage] = useState({
    type: "",
    content: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    tableNumber: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setThankYouModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const prepareOrderData = () => {
    const orderItems = cartItems.map((item) => ({
      product_id: item.id,
      quantity: item.quantity || 1,
    }));

    return {
      customer_name: formData.name,
      table_number: formData.tableNumber,
      item: orderItems, // Changed from 'items' to 'item' to match request format
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.tableNumber.trim()) {
      setMessage({
        type: "error",
        content: "Nama dan nomor meja harus diisi!",
      });
      setIsModalOpen(true);
      return;
    }

    try {
      const orderData = prepareOrderData();
      const response = await apiService.orders.create(orderData);

      if (response.status === 201 || response.status === 200) {
        setMessage({
          type: "success",
          content:
            response.data.message ||
            "Pesanan berhasil dibuat! Terima kasih telah memesan.",
        });
        setThankYouModalOpen(true);

        setTimeout(() => {
          clearCart();
          setThankYouModalOpen(false);
          navigate("/menu");
        }, 5000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Terjadi kesalahan saat membuat pesanan";

      setMessage({
        type: "error",
        content: errorMessage,
      });
      setIsModalOpen(true);

      console.error("Order creation error:", {
        status: error.response?.status,
        message: errorMessage,
        details: error.response?.data,
      });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Keranjang Kosong</h1>
        <button
          onClick={() => navigate("/menu")}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition"
        >
          Kembali ke Menu
        </button>
      </div>
    );
  }
  return (
    <div className="container pt-28 mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl text-primary text-center font-bright font-bold mb-6">
        Pembayaran
      </h1>

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
              placeholder="Masukkan nama"
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
              placeholder="Masukkan nomor meja"
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
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="font-semibold mt-1">
                  Rp {item.price.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.cartId, -1)}
                  className="p-1 border rounded hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity || 1}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.cartId, 1)}
                  className="p-1 border rounded hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.cartId)}
                  aria-label={`Remove ${item.name} from cart`}
                  className="p-1 text-red-500 hover:bg-red-50 rounded"
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
            type="button"
            onClick={() => navigate("/menu")}
            className="flex-1 bg-gray-500 text-white py-3 rounded-md hover:bg-gray-600 transition"
          >
            Tambah Pesanan
          </button>
          <button
            type="submit"
            className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition"
          >
            Pesan
          </button>
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={message.content}
        type={message.type}
      />
      <Modal
        isOpen={isThankYouModalOpen}
        onClose={() => setThankYouModalOpen(false)}
        message={message.content}
        type={message.type}
      />
    </div>
  );
};

export default Checkout;
