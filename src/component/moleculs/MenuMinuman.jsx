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
    category: "Kopi",
    name: "Kopo Klotok",
    price: "10.000",
    description:
      "Turn down the world's noise with the long-lasting noise cancellation performance of the premium coffee beans. Our signature blend offers a rich, full-bodied taste that transforms your coffee experience into a moment of pure indulgence. Each sip delivers a perfect balance of intensity and smoothness, carefully crafted to awaken your senses and elevate your day.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
  },
  {
    id: 2,
    category: "Kopi",
    name: "Espresso Shot",
    price: "11.000",
    description:
      "A quick energy boost with our signature espresso blend, perfect for busy mornings...",
    image:
      "https://www.ruparupa.com/blog/wp-content/uploads/2022/10/jenis-minuman-kopi.jpg",
  },
  {
    id: 3,
    category: "Kopi",
    name: "Cappuccino",
    price: "8.000",
    description:
      "Smooth espresso layered with steamed milk and a generous cap of foam for a balanced...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 4,
    category: "Kopi",
    name: "Latte",
    price: "7.000",
    description:
      "Our creamy latte combines rich espresso with velvety steamed milk for a comforting...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 5,
    category: "Kopi",
    name: "Americano",
    price: "10.000",
    description:
      "For those who prefer a longer coffee, our Americano dilutes a shot of espresso...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 6,
    category: "Kopi",
    name: "Mocha",
    price: "11.000",
    description:
      "Indulge in the perfect blend of espresso, steamed milk, and rich chocolate syrup...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 7,
    category: "Kopi",
    name: "Cold Brew",
    price: "8.000",
    description:
      "Smooth and refreshing, our cold brew is steeped for 12 hours for a less acidic...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 8,
    category: "Kopi",
    name: "Flat White",
    price: "7.000",
    description:
      "A harmonious blend of espresso and steamed milk, resulting in a smooth and velvety...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 9,
    category: "Kopi",
    name: "Macchiato",
    price: "10.000",
    description:
      'Our macchiato features a shot of espresso "stained" with a dollop of frothy milk...',
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 10,
    category: "Kopi",
    name: "Affogato",
    price: "11.000",
    description:
      'A scoop of vanilla gelato "drowned" in a shot of hot espresso for a delightful...',
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 11,
    category: "Kopi",
    name: "Iced Coffee",
    price: "8.000",
    description:
      "Our signature blend brewed and chilled, served over ice for a refreshing pick-me-up...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 12,
    category: "Teh",
    name: "Chai Latte",
    price: "7.000",
    description:
      "A spiced tea latte with a blend of aromatic spices and herbs, mixed with steamed milk...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 13,
    category: "Teh",
    name: "Green Tea",
    price: "10.000",
    description:
      "Premium Japanese green tea, rich in antioxidants and offering a moment of zen...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 14,
    category: "Coklat",
    name: "Hot Chocolate",
    price: "11.000",
    description:
      "Indulgent and creamy hot chocolate made with real cocoa and topped with whipped cream...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
  {
    id: 15,
    category: "Coklat",
    name: "Caramel Macchiato",
    price: "8.000",
    description:
      "Vanilla-flavored espresso topped with caramel and a dollop of foam for a sweet treat...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGNbO49ms6F9uweSSF5LodF9NXnlnA.png",
  },
];

export default function MenuMinuman() {
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
            Menu Minuman
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
