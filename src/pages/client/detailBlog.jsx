import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();

  // Contoh data (nanti bisa diganti dengan API atau state management)
  const blogs = [
    {
      id: "1",
      title: "Sejarah Kopi Nusantara",
      author: "Mbah Redjo",
      date: "10 Oktober 2024",
      content: "Menelusuri jejak kopi dari Sabang sampai Merauke...",
      image: "/images/Galeri/galeri4.jpeg",
    },
    {
      id: "2",
      title: "Resep Kopi Tubruk Asli",
      author: "Dewi Sari",
      date: "12 Oktober 2024",
      content: "Pelajari cara membuat kopi tubruk khas Indonesia...",
      image: "/images/Galeri/galeri4.jpeg",
    },
  ];

  // Cari blog berdasarkan ID
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p className="text-center text-red-500">Blog tidak ditemukan.</p>;
  }

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
      {/* Tombol Kembali */}
      <a
        href="/blog"
        className="flex items-center font-bright text-2xl text-primary hover:underline mb-4"
      >
        <ArrowLeft size={20} className="mr-2" /> Kembali ke Blog
      </a>

      {/* Judul & Gambar */}
      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      <p className="text-gray-500 mt-2">
        {blog.author} - {blog.date}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover mt-4 rounded-lg"
      />

      {/* Konten */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>{blog.content}</p>
      </div>

      {/* Bagikan */}
      <div className="mt-8">
        <p className="text-lg font-semibold">Bagikan Artikel:</p>
        <div className="flex gap-4 mt-2">
          <a href="#" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <a href="#" className="text-sky-500 hover:underline">
            Twitter
          </a>
          <a href="#" className="text-green-600 hover:underline">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Navigasi Blog */}
      <div className="flex justify-between mt-10 border-t pt-6">
        <a
          href="/blog/1"
          className="flex items-center text-gray-600 hover:underline"
        >
          <ArrowLeft size={20} className="mr-2" /> Previous Post
        </a>
        <a
          href="/blog/2"
          className="flex items-center text-gray-600 hover:underline"
        >
          Next Post <ArrowRight size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default BlogDetail;
