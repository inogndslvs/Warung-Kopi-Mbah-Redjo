import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationEditProductModal from "../../component/admin/ConfirmationEditProductModal";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";

const EditProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);
    alert("Produk berhasil diperbarui!");
    navigate("/products"); // Navigasi setelah konfirmasi
  };

  const handleCancel = () => {
    if (nama || harga || deskripsi || kategori) {
      const confirmLeave = window.confirm("Ada perubahan yang belum disimpan. Apakah Anda yakin ingin meninggalkan halaman?");
      if (confirmLeave) {
        navigate("/products");
      }
    } else {
      navigate("/products");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FFFBF5]">
      <HeaderAdmin />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="min-w-[800px] space-y-4 mt-5">
            <h1 className="text-5xl font-bright text-primary mb-4">Form Edit Produk</h1>
            <div>
              <label htmlFor="nama" className="block text-blue font-medium pb-2 mt-8">
                Nama Produk
              </label>
              <input
                type="text"
                id="nama"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama produk"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
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
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
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
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="kategori" className="block text-blue font-medium pb-2 mt-8">
                Kategori
              </label>
              <select
                id="kategori"
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
              >
                <option value="">Pilih Kategori</option>
                <option value="minuman">Minuman</option>
                <option value="makanan">Makanan</option>
              </select>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button" 
                onClick={handleCancel} 
                className="bg-primary px-16 py-2 text-kuning rounded-lg hover:bg-blue-700"
              >
                Batal
              </button>
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
      <ConfirmationEditProductModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmSubmit}
      />
    </div>
  );
};

export default EditProduct;