const Modal = ({ isOpen, onClose, message, type }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className={`text-xl font-semibold ${
            type === 'error' ? 'text-red-600' : 'text-green-600'
          }`}>
            {type === 'error' ? 'Perhatian!' : 'Berhasil!'}
          </h2>
          <p className="mt-2 text-gray-700">
            {message}
          </p>
          <button
            onClick={onClose}
            className={`mt-4 w-full py-2 rounded-md text-white transition ${
              type === 'error' 
                ? 'bg-red-700 hover:bg-red-800' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {type === 'error' ? 'Oke, Siap!' : 'Tutup'}
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  