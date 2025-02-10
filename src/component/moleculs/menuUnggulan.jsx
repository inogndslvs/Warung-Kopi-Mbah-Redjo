import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HeartIcon from "../../assets/logo/heart.svg"; // Ganti dengan path icon jantung Anda
import CartIcon from "../../assets/logo/iconKeranjang.svg"; // Ganti dengan path icon keranjang Anda

const FeaturedMenu = () => {
  const [likes, setLikes] = useState(0); // Total likes untuk navigasi

  // Data menu
  const menus = [
    {
      id: 1,
      name: "Es Kopi Susu",
      type: "Minuman",
      price: "Rp 25.000",
      description: "Kopi susu dengan gula aren khas nusantara.",
      image: "/images/menu/kopi-klotok.png", // Ganti dengan URL gambar Anda
    },
    {
      id: 2,
      name: "Nasi Goreng Spesial",
      type: "Makanan",
      price: "Rp 35.000",
      description: "Nasi goreng dengan bumbu khas Warung Kopi Mbah Redjo.",
      image: "/images/menu/kopi-klotok.png",
    },
    {
      id: 3,
      name: "Mie Jawa",
      type: "Makanan",
      price: "Rp 30.000",
      description: "Mie jawa dengan cita rasa khas rempah tradisional.",
      image: "/images/menu/kopi-klotok.png",
    },
    {
      id: 4,
      name: "Teh Poci",
      type: "Minuman",
      price: "Rp 15.000",
      description: "Teh hangat disajikan dengan gula batu khas desa.",
      image: "/images/menu/kopi-klotok.png",
    },
  ];

  // Fungsi untuk menambah likes
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Elemen carousel
  const items = menus.map((menu) => (
    <div
      key={menu.id}
      className="bg-secondary shadow-md rounded-lg p-4 min-w-[250px] md:w-auto relative mx-2 "
    >
      {/* Gambar Menu */}
      <div className="relative">
        <img
          src={menu.image}
          alt={menu.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {/* Tombol Like */}
        <button
          onClick={handleLike}
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md"
        >
          <img src={HeartIcon} alt="Like" className="w-6 h-6 text-red-500" />
        </button>
      </div>
      {/* Tipe Menu */}
      <p className="mt-2 text-xs text-gray-500 uppercase">{menu.type}</p>
      {/* Nama dan Harga */}
      <div className="flex justify-between items-center mt-1">
        <h3 className="font-semibold text-md">{menu.name}</h3>
        <span className="text-primary font-bold">{menu.price}</span>
      </div>
      {/* Deskripsi Singkat */}
      <p className="text-sm text-gray-600 mt-2">
        {menu.description.length > 35
          ? `${menu.description.substring(0, 35)}...`
          : menu.description}
      </p>
      {/* Baca Selengkapnya */}
      <a href={`/menu/${menu.id}`} className="text-blue-500 text-xs mt-1">
        Baca Selengkapnya
      </a>
      {/* Tombol Aksi */}
      <div className="flex justify-between items-center mt-4">
        <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
          <img src={CartIcon} alt="Cart" className="w-5 h-5 mr-2" />
          Keranjang
        </button>
        <button className="px-4 py-2 bg-kuning text-primary rounded-lg hover:bg-primary-dark transition">
          Beli Langsung
        </button>
      </div>
    </div>
  ));

  return (
    <div className="bg-primary p-6">
      <h2 className="text-5xl font-bright text-center text-kuning my-6">
        Menu Unggulan
      </h2>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 1 }, // Untuk layar kecil
          768: { items: 2 }, // Untuk tablet
          1024: { items: 4 }, // Untuk desktop
        }}
        controlsStrategy="responsive"
        autoPlay
        autoPlayInterval={3000}
        infinite
      />
    </div>
  );
};

export default FeaturedMenu;
