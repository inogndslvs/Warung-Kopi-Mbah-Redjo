const ModalTerimaKasih = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed modal-overlay inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-green-600">Terima Kasih!</h2>
        <p className="mt-2 text-gray-700">Pesanan Anda sedang dipersiapkan.</p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
        >
          Oke
        </button>
      </div>
    </div>
  );
};

export default ModalTerimaKasih;
