import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { formatRupiah } from "../../utils/currency";

const CheckoutButton = () => {
  const navigate = useNavigate();
  const { cartItems, getTotal } = useCart();

  if (cartItems.length === 0) return null;

  return (
    <div className=" flex fixed bottom-0 left-0 right-0  shadow-lg p-4 z-50">
      <div className="p-5 rounded-s-xl px-[54px]  drop-shadow-2xl bg-secondary">
        <ShoppingCart className="w-8 h-8" />
      </div>
      <div className="bg-primary text-profile rounded-e-xl container drop-shadow-2xl mr-auto flex justify-between items-center">
        <div className="font-semibold px-5">
          Total: {formatRupiah(getTotal())}
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="font-extrabold text-white px-6 py-2 rounded-md mr-4 hover:bg-secondary hover:text-textnav transition"
        >
          CHECK OUT ({cartItems.length})
        </button>
      </div>
    </div>
  );
};

export default CheckoutButton;
