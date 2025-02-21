import { useNavigate } from "react-router-dom";

const ConfirmationDeleteBlogModal = ({ show, onClose, onConfirm }) => {
    const navigate = useNavigate();

    const onConfirmButton = () => {
      onConfirm(); 
      navigate("/blogs");
    };

    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-xl w-[400px]">
          <img className="mb-4" src="src/assets/confirm-warn.png" alt="confirm" />
          <h3 className="text-xl font-bold mb-4">
            Yakin Hapus Blog Ini  ?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Are you sure you want to delete this post? This action cannot be undone.
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
              className="w-1/2 px-4 py-2 rounded bg-primary text-white"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationDeleteBlogModal;
  