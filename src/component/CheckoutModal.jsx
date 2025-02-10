import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";

export function CheckoutModal({ isOpen, onClose, totalItems, totalPrice }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onClose();

    navigate("/payment");
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className=" relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-profile p-6">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
            Konfirmasi Checkout
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            Anda akan melakukan checkout untuk {totalItems} item dengan total
            pembayaran:
          </Dialog.Description>

          <div className="mt-4">
            <p className="text-2xl font-bold text-center">
              Rp{totalPrice.toLocaleString()}
            </p>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              onClick={onClose}
            >
              Kembali
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-[#083613] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={handleConfirm}
            >
              Lanjutkan ke Pembayaran
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
