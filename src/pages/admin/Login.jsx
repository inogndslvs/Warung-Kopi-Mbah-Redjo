import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BgPetani from "../../assets/petani.png";
import Api from "../../api/api";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await Api.post("/api/login", { email, password });
      const data = response.data;

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login gagal. Periksa kembali kredensial Anda."
      );
    }
  };

  return (
    <div className="bg-primary h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <img
        src={BgPetani}
        alt="Petani"
        className="absolute left-0 bottom-0 h-[300px] w-auto"
      />
      <div className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-[540px] mx-2 relative z-10">
        <div className="flex items-center mb-4">
          <img
            src="src/assets/logo/logofill.png"
            alt="logo"
            className="h-12 w-auto"
          />
          <h1 className="text-primary ml-1 leading-none font-bright">
            Warung Kopi <br /> Mbah Rejo
          </h1>
        </div>
        <h1 className="font-bright text-2xl text-primary">Admin Login</h1>
        <p className="text-[#64748B] mb-4">
          Welcome back. Enter your credentials to access your account.
        </p>
        {error && <p className="text-red-600">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-bold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-[#FFFBF5] text-black focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
              placeholder="hello@example.com"
              required
            />
          </div>
          <div className="mb-2">
            <div className="flex justify-between">
              <label className="block font-bold text-gray-700">Password</label>
              <a href="/forgotpassword" className="text-red-600 text-sm">
                Forgot Password
              </a>
            </div>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-[#FFFBF5] text-black focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
              placeholder="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-red-700"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
