import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationEditBlogModal from "../../component/admin/ConfirmationEditBlogModal";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";

const EditBlog = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false); 
    // Logika simpan data
    alert("Blog berhasil ditambahkan!");
  };

  const handleCancel = () => {
    if (nama || harga || deskripsi || kategori) {
      const confirmLeave = window.confirm("Ada perubahan yang belum disimpan. Apakah Anda yakin ingin meninggalkan halaman?");
      if (confirmLeave) {
        navigate("/blogs");
      }
    } else {
      navigate("/blogs");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-secondary">
      <HeaderAdmin />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center m-10">
          <form onSubmit={handleSubmit} className="w-full space-y-4 mt-5 border border-blue rounded-2xl p-10 bg-white">
            <div>
              <label htmlFor="nama" className="block font-medium text-2xl font-bright pb-2 mt-8">
                Nama Produk
              </label>
              <input
                type="text"
                id="nama"
                className="w-full px-4 py-2 border border-blue rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama produk"
              />
            </div>

            <div>
              <label htmlFor="isi" className="block font-medium text-2xl font-bright pb-2 mt-8">
                Isi Artikel
              </label>
              <textarea
                id="isi"
                rows="4"
                className="w-full h-52 px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tulis isi artikel disini"
              />
            </div>

            <div>
              <label htmlFor="gambar" className="block font-medium text-2xl font-bright pb-2 mt-8">
                Gambar Produk
              </label>
              <input
                type="file"
                id="gambar"
                className="px-4 py-2 border border-dashed border-blue rounded-lg h-32 text-center"
              />
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
      <ConfirmationEditBlogModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmSubmit}
      />
    </div>
  );
}

export default EditBlog;
