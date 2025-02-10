"use client";

import { useState } from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import Navbar from "../../component/navbar";

const dummyProducts = [
  {
    id: 1,
    category: "Makanan Utama",
    name: "Nasi Goreng Spesial",
    price: "25000",
    description:
      "Nasi goreng spesial yang dimasak dengan bumbu rahasia khas Indonesia, dilengkapi dengan potongan ayam suwir, telur mata sapi, kerupuk renyah, dan acar segar yang memberikan cita rasa gurih, pedas, dan sedikit manis dalam satu suapan.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 2,
    category: "Makanan Utama",
    name: "Ayam Bakar Madu",
    price: "30000",
    description:
      "Ayam bakar empuk dengan bumbu marinasi khas yang dipadukan dengan madu murni, menghasilkan rasa manis, gurih, dan sedikit smoky. Dihidangkan dengan nasi hangat, lalapan segar, serta sambal terasi yang pedas menggugah selera.",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
  {
    id: 3,
    category: "Makanan Utama",
    name: "Mie Ayam Jamur",
    price: "20000",
    description:
      "Semangkuk mie ayam kenyal dengan topping ayam suwir berbumbu gurih dan jamur yang dimasak dengan saus spesial. Dilengkapi dengan pangsit goreng renyah dan kuah kaldu ayam yang kaya rasa, menjadikannya pilihan tepat untuk hidangan lezat.",
    image: "https://images.pexels.com/photos/2092890/pexels-photo-2092890.jpeg",
  },
  {
    id: 4,
    category: "Makanan Utama",
    name: "Soto Ayam",
    price: "18000",
    description:
      "Soto ayam khas Indonesia dengan kuah kuning yang kaya rempah, diisi dengan potongan ayam, tauge, irisan tomat, serta taburan bawang goreng dan seledri. Disajikan dengan nasi putih, sambal, dan perasan jeruk nipis untuk cita rasa segar dan lezat.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 5,
    category: "Makanan Utama",
    name: "Gado-Gado",
    price: "22000",
    description:
      "Hidangan khas Indonesia yang terdiri dari aneka sayuran segar seperti kacang panjang, tauge, kentang, dan tahu, disiram dengan saus kacang yang gurih dan sedikit pedas. Dilengkapi dengan telur rebus, kerupuk udang, serta taburan bawang goreng.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 6,
    category: "Makanan Ringan",
    name: "Martabak Manis",
    price: "25000",
    description:
      "Martabak manis tebal dengan tekstur lembut dan legit, diisi dengan campuran keju parut, coklat meses, serta susu kental manis. Bagian luarnya renyah dengan aroma mentega yang menggugah selera, cocok untuk dinikmati bersama keluarga.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 7,
    category: "Makanan Ringan",
    name: "Pisang Goreng Keju",
    price: "15000",
    description:
      "Pisang goreng crispy dengan lapisan tepung yang renyah dan garing. Disajikan dengan taburan keju parut, susu kental manis, serta coklat bubuk yang membuat rasanya semakin nikmat sebagai camilan sore hari.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 8,
    category: "Makanan Ringan",
    name: "Tahu Crispy",
    price: "12000",
    description:
      "Tahu goreng dengan lapisan tepung yang renyah dan bumbu rempah pilihan, memberikan sensasi gurih dan tekstur crispy di luar namun lembut di dalam. Cocok sebagai camilan atau pendamping hidangan utama.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 9,
    category: "Makanan Ringan",
    name: "Siomay Bandung",
    price: "20000",
    description:
      "Siomay ikan dengan tekstur kenyal dan rasa gurih khas Bandung. Disajikan dengan saus kacang kental, kecap manis, serta sambal yang memberikan cita rasa pedas dan lezat.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    id: 10,
    category: "Makanan Ringan",
    name: "Batagor",
    price: "22000",
    description:
      "Batagor goreng yang renyah di luar dan lembut di dalam, disajikan dengan bumbu kacang yang gurih serta tambahan kecap manis dan jeruk nipis untuk rasa yang lebih nikmat.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
];
export default function MenuMakanan() {
  const [items, setItems] = useState(
    dummyProducts.map((product) => ({
      ...product,
      isFavorite: false,
      isExpanded: false,
    }))
  );

  const toggleFavorite = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const toggleDescription = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
      )
    );
  };

  const [likes, setLikes] = useState(0);

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-20 bg-secondary">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bright text-red-700 mb-8">
            Menu Makanan
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="bg-profile rounded-xl overflow-hidden"
              >
                <div className="relative p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-secondary shadow-md hover:bg-gray-100"
                  >
                    {product.isFavorite ? (
                      <HeartSolidIcon className="w-5 h-5 text-red-500" />
                    ) : (
                      <HeartIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>

                <div className="pb-4 px-4 space-y-2">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-md">{product.name}</h3>
                      <span className="text-primary font-bold">
                        Rp {product.price}
                      </span>
                    </div>
                  </div>

                  <p
                    className={`text-sm text-gray-600 mt-2 ${
                      product.isExpanded ? "" : "line-clamp-2"
                    }`}
                  >
                    {product.description}
                  </p>

                  <button
                    onClick={() => toggleDescription(product.id)}
                    className="font-semibold flex items-center text-sm "
                  >
                    {product.isExpanded ? (
                      <>
                        Lebih Sedikit{" "}
                        <ChevronUpIcon className="w-4 h-4 ml-1 font-semibold" />
                      </>
                    ) : (
                      <>
                        Baca Selengkapnya{" "}
                        <ChevronDownIcon className="w-4 h-4 ml-1 font-semibold" />
                      </>
                    )}
                  </button>

                  <div className="flex gap-2 pt-2">
                    <button className="py-2 px-2 bg-gray-200 rounded-lg border border-gray-200">
                      <ShoppingCartIcon className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="flex-1 text-red-700 flex items-center justify-center gap-2 bg-[#C8D94C] py-0 px-4 rounded-lg font-medium hover:bg-[#b5c544] transition-colors">
                      Beli Sekarang
                      {/* <ChevronRightIcon className="w-5 h-5" /> */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
