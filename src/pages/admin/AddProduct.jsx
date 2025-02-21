import { useState } from "react";
import ConfirmationAddProductModal from "../../component/admin/ConfirmationAddProductModal";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false); 
    // Logika simpan data
    alert("Produk berhasil ditambahkan!");
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-secondary">
      <HeaderAdmin />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="min-w-[800px] space-y-4 mt-5">
            <h1 className="text-5xl font-bright text-primary mb-4">Form Input Produk</h1>
            <div>
              <label htmlFor="nama" className="block text-blue font-medium pb-2 mt-8">
                Nama Produk
              </label>
              <input
                type="text"
                id="nama"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama produk"
              />
            </div>

            <div>
              <label htmlFor="harga" className="block text-blue font-medium pb-2 mt-8">
                Harga
              </label>
              <input
                type="number"
                id="harga"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan harga produk"
              />
            </div>

            <div>
              <label htmlFor="deskripsi" className="block text-blue font-medium pb-2 mt-8">
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                rows="4"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan deskripsi produk"
              />
            </div>

            <div>
              <label htmlFor="kategori" className="block text-blue font-medium pb-2 mt-8">
                Kategori
              </label>
              <select
                id="kategori"
                className="w-full px-4 py-2 border border-blue rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih Kategori</option>
                <option value="minuman">Minuman</option>
                <option value="makanan">Makanan</option>
              </select>
            </div>

            <div>
              <label htmlFor="gambar" className="block text-blue font-medium pb-2 mt-8">
                Gambar Produk
              </label>
              <input
                type="file"
                id="gambar"
                className="px-4 py-2 border border-dashed border-blue rounded-lg h-32 text-center"
              />
            </div>

            <div className="flex justify-end">
                <button
                type="submit"
                className="bg-kuning px-16 py-2 text-primary rounded-lg hover:bg-blue-700"
                >
                Submit
                </button>
            </div>
          </form>
        </div>
      </div>
      <ConfirmationAddProductModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmSubmit}
      />
    </div>
  );
}

export default AddProduct;
