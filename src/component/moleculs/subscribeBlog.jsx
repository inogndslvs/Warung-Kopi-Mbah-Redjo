import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Terima kasih telah berlangganan dengan email: ${email}`);
    setEmail(""); // Reset input setelah submit
  };

  return (
    <div className="p-6 rounded-lg text-center mt-2">
      <p className="text-lg font-bright text-gray-600">
        Subscribe untuk mendapatkan informasi terbaru.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="mt-4 flex flex-col sm:flex-row justify-center gap-3 w-full max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-hitam rounded-lg w-full text-base focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-primary text-kuning px-5 py-3 rounded-lg hover:bg-red-700 w-full sm:w-auto text-lg font-bright"
        >
          Subscribe
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-3">
        We care about your data in our{" "}
        <a href="/privacy-policy" className="text-blue-400 hover:underline">
          privacy policy
        </a>
        .
      </p>
    </div>
  );
};

export default Subscribe;
