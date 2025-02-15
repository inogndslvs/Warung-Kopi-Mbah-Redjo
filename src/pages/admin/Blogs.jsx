import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationDeleteBlogModal from "../../component/admin/ConfirmationDeleteBlogModal";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";

const Blogs = () => {
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const addBlog = () => {
      navigate("/addblog");
    };

    const handleEditClick = () => {
      navigate(`/editblog`);
    };

    const handleDeleteClick = () => {
      setShowDeleteModal(true);
    };

    const handleCloseModal = () => {
      setShowDeleteModal(false); 
    };

    const handleConfirmDelete = () => {
      // Tambahkan logika penghapusan di sini
      alert("Blog dihapus");
      setShowDeleteModal(false);
    };

    const blogData = [ 
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "Menjelajah Rasa Kopi Nusantara: Dari Gayo yang Harum hingga Flores yang Eksotis",
            date: "November 12, 2024",
        },
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "Kopi, Bukan Sekadar Minuman: Ritual dan Tradisi Ngopi di Indonesia",
            date: "November 13, 2024",
        },
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "Rahasia Kopi Enak di Rumah: Tips dan Trik Menyeduh Kopi Ala Barista",
            date: "November 14, 2024",
        },
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "Kopi dan Produktivitas: Cara Kopi Meningkatkan Fokus dan Energi Anda",
            date: "November 15, 2024",
        },
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "Bisnis Kopi Kekinian: Peluang dan Tantangan di Era Digital",
            date: "November 16, 2024",
        },
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "Menikmati Kopi Tanpa Rasa Bersalah: Manfaat Kopi untuk Kesehatan",
            date: "November 17, 2024",
        },
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "Kopi vs Teh: Mana Pilihan Terbaik untuk Anda?",
            date: "November 18, 2024",
        },
        {
            thumbnail: "src/assets/thumbnail.png",
            title: "5 Kedai Kopi Unik yang Wajib Dikunjungi di Jakarta",
            date: "November 19, 2024",
        },
    ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FFFBF5]">
      <HeaderAdmin />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
        
            {/* Add Button and Search */}
            <div className="flex justify-between items-center mb-4">
              <button className="flex items-center gap-2 bg-kuning text-primary px-4 py-2 rounded" onClick={addBlog}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Tambah
              </button>
            </div>
            <h1 className='font-semibold text-2xl pb-8'>Daftar Artikel</h1>

            <div className="grid grid-cols-2 gap-4"> 
            {blogData.map((blog, index) => (
              <div key={index} className="bg-white rounded-3xl p-4 flex shadow-lg"> 
                <img className="rounded-3xl h-24 w-24 object-cover mr-4" src={blog.thumbnail} alt="thumbnail" />
                <div className="flex-1 flex flex-col justify-center"> 
                  <h2 className="font-semibold text-sm">{blog.title}</h2>
                  <p className="text-xs text-gray-500 mt-2">{blog.date}</p>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <button className="bg-[#2536EB] text-white px-3 py-1 rounded-full flex items-center gap-1" onClick={handleEditClick}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                    </button>
                    <button className="bg-[#DC2626] text-white px-3 py-1 rounded-full flex items-center gap-1" onClick={handleDeleteClick}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Hapus
                    </button>
                    <ConfirmationDeleteBlogModal
                      show={showDeleteModal}
                      onClose={handleCloseModal}
                      onConfirm={handleConfirmDelete}
                    />
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
