import { ArrowUpRight } from "lucide-react";

const AllBlogPosts = () => {
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
    {
      id: 4,
      title: "Kopi dan Budaya Lokal",
      author: "Siti Aisyah",
      date: "18 Oktober 2024",
      excerpt: "Bagaimana kopi menjadi bagian dari budaya lokal...",
      image: "/images/Galeri/galeri4.jpeg",
    },
    {
      id: 5,
      title: "Perjalanan Kopi ke Dunia",
      author: "Andi Wijaya",
      date: "20 Oktober 2024",
      excerpt: "Dari Indonesia ke dunia, inilah perjalanan kopi...",
      image: "/images/Galeri/galeri4.jpeg",
    },
  ];

  return (
    <div className="container my-24">
      <h1 className="pl-8 font-bright text-primary text-3xl">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[2px] md:p-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded-lg shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                {blog.author} - {blog.date}
              </p>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <a href={`/blog/${blog.id}`} className="text-red-500">
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <p className="mt-2 text-gray-700">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogPosts;
