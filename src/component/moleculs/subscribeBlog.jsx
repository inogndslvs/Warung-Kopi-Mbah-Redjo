import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Terima kasih telah berlangganan dengan email: ${email}`);
    setEmail(""); // Reset input setelah submit
  };

  return (
    <div className="p-6  rounded-lg text-center mt-8">
      <p className="text-lg font-bright text-gray-500">
        Subscribe untuk mendapatkan informasi terbaru.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="mt-4 flex justify-center gap-3 "
      >
        <input
          type="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-72 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Subscribe
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-3">
        We care about your data in our{" "}
        <a href="/privacy-policy" className="text-blue-600 hover:underline">
          privacy policy
        </a>
        .
      </p>
    </div>
  );
};

export default Subscribe;
