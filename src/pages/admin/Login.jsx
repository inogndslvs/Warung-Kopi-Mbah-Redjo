import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../service/config";
import petani from "../../assets/petani.png";
import logo from "../../assets/logo/logofill.png";
import ConfirmationModal from "../../component/admin/ConfirmationModal";
import { handleApiError } from "../../utils/errorHandler";

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("admin"); // 'consumer' or 'admin'
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiService.auth.login({
        email: formData.email,
        password: formData.password,
      });

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("userType", loginType);

        // Redirect to dashboard
        navigate("/admin/dashboard", { replace: true });
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      setErrorMessage(
        errorMessage || "An error occurred. Please try again later."
      );
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <img
        src={petani}
        alt="Petani"
        className="absolute left-0 bottom-0 h-[300px] w-auto"
      />
      <div className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-[540px] mx-2 relative z-10">
        <div className="flex items-center mb-4">
          <img src={logo} alt="logo" className="h-12 w-auto" />
          <h1 className="text-primary ml-1 leading-none font-bright">
            Warung Kopi
            <br />
            Mbah Rejo
          </h1>
        </div>

        {/* Login Type Selector */}
        {/* <div className="flex gap-4 mb-6">
          <button
            onClick={() => setLoginType('consumer')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              loginType === 'consumer' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Consumer
          </button>
          <button
            onClick={() => setLoginType('admin')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              loginType === 'admin' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Admin
          </button>
        </div> */}

        <h1 className="font-bright text-2xl text-primary">
          {loginType === "consumer" ? "Consumer Login" : "Admin Login"}
        </h1>
        <p className="text-[#64748B] mb-4">
          Welcome back. Enter your credentials to access your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-[#FFFBF5] text-black focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
              placeholder="hello@example.com"
              required
            />
          </div>

          <div className="mb-2">
            <div className="flex justify-between">
              <label className="block font-bold text-gray-700">Password</label>
              <a href="#" className="text-red-600 text-sm">
                Forgot Password
              </a>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-[#FFFBF5] text-black focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
              placeholder="password"
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="keepSignedIn"
                checked={formData.keepSignedIn}
                onChange={handleChange}
                className="mr-2 accent-red-600"
              />
              <span className="text-gray-700">Keep me signed in</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition-all duration-300 
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary text-white hover:bg-red-700"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              "Continue"
            )}
          </button>

          {loginType === "consumer" && (
            <>
              <div className="mt-4 text-center relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-[#64748B]">
                    or sign up with
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                {/* Social login buttons */}
              </div>

              <p className="mt-6 text-center text-gray-600">
                Don't have an Account?
                <a href="#" className="text-red-600 ml-1">
                  Sign up here
                </a>
              </p>
            </>
          )}
        </form>
      </div>

      <ConfirmationModal
        show={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        onConfirm={() => setShowErrorModal(false)}
        title="Login Failed"
        message={errorMessage}
        confirmText="Try Again"
        cancelText="Close"
        confirmButtonClass="bg-primary"
        icon="warning"
      />
    </div>
  );
};

export default Login;
