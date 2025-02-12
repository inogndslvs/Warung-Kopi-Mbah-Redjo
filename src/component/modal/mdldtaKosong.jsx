const ModalDataKosong = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-red-600">Perhatian!</h2>
        <p className="mt-2 text-gray-700">
          Anda harus mengisi <strong>Nama</strong> dan <strong>No Meja</strong>{" "}
          sebelum memesan.
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
        >
          Oke, Siap!
        </button>
      </div>
    </div>
  );
};

export default ModalDataKosong;
