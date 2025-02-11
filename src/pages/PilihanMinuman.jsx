"use client";
import MenuItem from "../component/moleculs/MenuItem";
import CheckoutButton from "../component/atoms/CeckoutButton";
import { useCart } from "../contexts/CartContext";

const drinks = [
  {
    id: 1,
    name: "Teh Poci",
    category: "Minuman",
    price: 15000,
    image: "../../public/images/menu/kopi-klotok 2.png",
    description: "Teh hangat disajikan dengan gula batu...",
  },
  {
    id: 2,
    name: "Es Kopi Susu",
    category: "Minuman",
    price: 25000,
    image: "../../public/images/menu/kopi-klotok 2.png",
    description: "Kopi susu dengan gula aren khas nusantara...",
  },
  {
    id: 3,
    name: "Espresso Shot",
    category: "Minuman",
    price: 18000,
    image: "../../public/images/menu/kopi-klotok 2.png",
    description:
      "Shot espresso murni dari biji kopi arabika premium, dengan cita rasa kuat dan aroma yang menggoda. Cocok untuk penggemar kopi sejati.",
  },
  {
    id: 4,
    name: "Cappuccino",
    category: "Minuman",
    price: 28000,
    image: "../../public/images/menu/kopi-klotok 2.png",
    description:
      "Perpaduan sempurna antara espresso, susu steam, dan foam susu yang lembut. Ditaburi bubuk cokelat untuk sentuhan akhir yang sempurna.",
  },
  {
    id: 5,
    name: "Cafe Latte",
    category: "Minuman",
    price: 26000,
    image: "../../public/images/menu/kopi-klotok 2.png",
    description:
      "Kombinasi harmonis dari espresso dan susu steam dengan rasio yang sempurna. Lembut dan creamy, cocok untuk awal hari Anda.",
  },
  {
    id: 6,
    name: "Matcha Latte",
    category: "Minuman",
    price: 30000,
    image: "../../public/images/menu/kopi-klotok 2.png",
    description:
      "Teh hijau matcha premium dari Jepang dipadukan dengan susu segar steam. Kaya akan antioksidan dengan rasa yang autentik.",
  },
];

const PilihanMinuman = () => {
  const { isInCart } = useCart();
  return (
    <div className="container pt-28 mx-auto px-4 py-8 mb-20">
      <h1 className="text-3xl font-bright text-primary mb-8">
        Pilihan Minuman
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {drinks.map((drink) => (
          <MenuItem key={drink.id} item={drink} />
        ))}
      </div>

      <CheckoutButton />
    </div>
  );
};

export default PilihanMinuman;
