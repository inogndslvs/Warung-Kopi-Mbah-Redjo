"use client";

import React, { useState } from "react";

const Payment = () => {
  const [name, setName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  // Add state to track expanded descriptions
  const [expandedItems, setExpandedItems] = useState({});
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Kopi Klotok",
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      price: 9000,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8RS7J63mQZGhEBTK4hMiVcj10BtQ3.png",
    },
    {
      id: 2,
      name: "Kopi Klotok",
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      price: 9000,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8RS7J63mQZGhEBTK4hMiVcj10BtQ3.png",
    },
    {
      id: 3,
      name: "Kopi Klotok",
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      price: 9000,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8RS7J63mQZGhEBTK4hMiVcj10BtQ3.png",
    },
    {
      id: 4,
      name: "Kopi Klotok",
      description:
        "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      price: 9000,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8RS7J63mQZGhEBTK4hMiVcj10BtQ3.png",
    },
  ]);

  const toggleDescription = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const updateQuantity = (id, increment) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + increment;
          return {
            ...item,
            quantity: newQuantity > 0 ? newQuantity : 1,
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    // Clean up expanded state when removing item
    const newExpandedItems = { ...expandedItems };
    delete newExpandedItems[id];
    setExpandedItems(newExpandedItems);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price) => {
    return `Rp.${price.toLocaleString("id-ID")}`;
  };

  return (
    <div className="bg-[#FDF6F0] pt-20">
      <div className="min-h-screen  p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-3 sm:p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-red-600 font-semibold mb-2">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-red-600 font-semibold mb-2">
                No Meja
              </label>
              <input
                type="text"
                placeholder="Masukkan nomor meja"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center border border-gray-200 rounded-xl p-4"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                />
                <div className="flex-1 mt-2 sm:mt-0 sm:ml-4 w-full">
                  <h3 className="text-red-600 font-bold text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <div className="relative">
                    <p
                      className={`text-gray-500 text-xs sm:text-sm mt-1 ${
                        !expandedItems[item.id] ? "line-clamp-2" : ""
                      } transition-all duration-300`}
                    >
                      {item.description}
                    </p>
                    <button
                      onClick={() => toggleDescription(item.id)}
                      className="text-blue-500 text-xs sm:text-sm hover:text-blue-700 mt-1 focus:outline-none"
                    >
                      {expandedItems[item.id]
                        ? "Lihat lebih sedikit"
                        : "Selengkapnya"}
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                    <span className="text-blue-600 font-semibold text-sm">
                      {formatPrice(item.price)}
                    </span>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-300 rounded-lg text-sm"
                      >
                        -
                      </button>
                      <span className="w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-300 rounded-lg text-sm"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 border-t pt-3 sm:pt-4">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <span className="text-lg sm:text-xl font-bold">Total :</span>
              <span className="text-lg sm:text-xl font-bold">
                {formatPrice(total)}
              </span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors">
              Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
