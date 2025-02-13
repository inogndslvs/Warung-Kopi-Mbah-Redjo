import { ArrowUpRight } from "lucide-react";

const RecentBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "Sejarah Kopi Nusantara",
      author: "Mbah Redjo",
      date: "10 Oktober 2024",
      excerpt: "Menelusuri jejak kopi dari Sabang sampai Merauke...",
      image: "/images/Galeri/galeri4.jpeg",
    },
    {
      id: 2,
      title: "Resep Kopi Tubruk Asli",
      author: "Dewi Sari",
      date: "12 Oktober 2024",
      excerpt: "Pelajari cara membuat kopi tubruk khas Indonesia...",
      image: "/images/Galeri/galeri4.jpeg",
    },
    {
      id: 3,
      title: "Mengenal Kopi Liberika",
      author: "Rizal Fahmi",
      date: "15 Oktober 2024",
      excerpt: "Salah satu jenis kopi unik dengan cita rasa khas...",
      image: "/images/Galeri/galeri4.jpeg",
    },
  ];

  return (
    <div className="container mt-24 ">
      <h1 className="pl-4 md:pl-8 font-bright text-primary text-3xl">
        Recent blog posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-[2px] md:p-8">
        {/* Blog utama */}
        <div className="p-4 border rounded-lg shadow-lg h-full">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="w-full md:w-[592px] h-[240px] object-cover rounded-md"
          />
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              {blogs[0].author} - {blogs[0].date}
            </p>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{blogs[0].title}</h2>
              <a href={`/blog/${blogs[0].id}`} className="text-red-500">
                <ArrowUpRight size={20} />
              </a>
            </div>
            <p className="mt-2 text-gray-700">{blogs[0].excerpt}</p>
          </div>
        </div>

        {/* Dua blog lainnya dalam satu kolom dengan tinggi seimbang */}
        <div className="flex flex-col gap-6 h-full">
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="p-4 border rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              {/* Gambar di sebelah kiri */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-[320px] h-[200px] object-cover rounded-md"
              />

              {/* Konten di sebelah kanan */}
              <div className="flex-1 text-start md:text-left">
                <p className="text-sm text-gray-500">
                  {blog.author} - {blog.date}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{blog.title}</h3>
                  <a href={`/blog/${blog.id}`} className="text-red-500">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <p className="text-gray-700 mt-2">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
