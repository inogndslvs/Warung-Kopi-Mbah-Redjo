"use client";
import MenuItem from "../component/moleculs/MenuItem";
import CheckoutButton from "../component/atoms/CeckoutButton";
import { useCart } from "../contexts/CartContext";

const foods = [
  {
    id: 1,
    name: "Mie Jawa",
    category: "Makanan",
    price: 30000,
    image: "../../public/images/menu/pisang bakar 1.png",
    description: "Mie jawa dengan cita rasa khas remp...",
  },
  {
    id: 2,
    name: "Nasi Goreng Spesial",
    category: "Makanan",
    price: 35000,
    image: "../../public/images/menu/pisang bakar 1.png",
    description: "Nasi goreng dengan bumbu khas Warun...",
  },
  {
    id: 101,
    name: "Pisang Bakar Coklat",
    category: "Makanan",
    price: 22000,
    image: "../../public/images/menu/pisang bakar 1.png",
    description:
      "Pisang bakar premium dengan topping coklat Belgium dan keju cheddar. Disajikan hangat dengan taburan kacang yang renyah.",
  },
  {
    id: 102,
    name: "Roti Bakar Special",
    category: "Makanan",
    price: 25000,
    image: "../../public/images/menu/pisang bakar 1.png",
    description:
      "Roti bakar dengan pilihan topping premium: coklat, keju, atau selai. Dibuat dengan roti artisan yang dipanggang sempurna.",
  },
  {
    id: 103,
    name: "Kentang Goreng",
    category: "Makanan",
    price: 20000,
    image: "../../public/images/menu/pisang bakar 1.png",
    description:
      "Kentang goreng crispy dengan bumbu rahasia kami. Disajikan dengan saus special dan mayonnaise homemade.",
  },
  {
    id: 104,
    name: "Sandwich Club",
    category: "Makanan",
    price: 35000,
    image: "../../public/images/menu/pisang bakar 1.png",
    description:
      "Triple layer sandwich dengan isi ayam panggang, telur, sayuran segar, dan saus special. Roti dipanggang sempurna hingga crispy.",
  },
  {
    id: 105,
    name: "Nasi Goreng Special",
    category: "Makanan",
    price: 38000,
    image: "../../public/images/menu/pisang bakar 1.png",
    description:
      "Nasi goreng dengan bumbu special, telur mata sapi, ayam suwir, dan sayuran segar. Disajikan dengan kerupuk udang.",
  },
];

const PilihanMakanan = () => {
  const { isInCart } = useCart();
  return (
    <div className="container pt-28 mx-auto px-4 py-8 pb-20">
      <h1 className="text-3xl font-bright text-primary mb-8">
        Pilihan Makanan
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {foods.map((food) => (
          <MenuItem key={food.id} item={food} />
        ))}
      </div>

      <CheckoutButton />
    </div>
  );
};

export default PilihanMakanan;
