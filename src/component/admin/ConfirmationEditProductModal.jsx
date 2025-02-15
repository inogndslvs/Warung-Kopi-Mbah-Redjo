import { useNavigate } from "react-router-dom";

const ConfirmationEditProductModal = ({ show, onClose, onConfirm }) => {
    const navigate = useNavigate();

    const onConfirmButton = () => {
      onConfirm(); // Panggil fungsi onConfirm yang diterima dari props
      navigate("/products"); // Navigasi ke halaman /products
    };

    if (!show) return null; // Modal hanya ditampilkan jika 'show' true
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-2xl w-[400px]">
          <img className="mb-4" src="src/assets/confirm.png" alt="confirm" />
          <h3 className="text-xl font-bold mb-4">
            Apakah anda yakin untuk simpan perubahan ?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            This blog post has been published. Team members will be able to edit this post and republish changes.
          </p>
          <div className="flex gap-1">
            <button
              onClick={onClose}
              className="w-1/2 px-4 py-2 rounded bg-gray-300 border border-gray text-gray-900"
            >
              Batal
            </button>
            <button
              onClick={onConfirmButton}
              className="w-1/2 px-4 py-2 rounded bg-blue text-white"
            >
              Iya
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationEditProductModal;
  