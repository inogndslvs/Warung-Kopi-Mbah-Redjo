import { useNavigate } from "react-router-dom";

const ConfirmationModal = ({ 
  show, 
  onClose, 
  onConfirm,
  title,
  message,
  confirmText = "Iya",
  cancelText = "Batal",
  confirmButtonClass = "bg-blue",
  icon = "confirm",
  redirectTo
}) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onConfirm();
    if (redirectTo) {
      navigate(redirectTo);
    }
  };
  console.log("ConfirmationModal rendered");

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-[400px]">
        <img 
          className="mb-4" 
          src={`../../src/assets/${icon === "warning" ? "confirm-warn.png" : "confirm.png"}`} 
          alt="confirm" 
        />
        <h3 className="text-xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          {message}
        </p>
        <div className="flex gap-1">
          <button
            onClick={onClose}
            className="w-1/2 px-4 py-2 rounded bg-gray-300 border border-gray text-gray-900"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className={`w-1/2 px-4 py-2 rounded text-white ${confirmButtonClass}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
