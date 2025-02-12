import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar";

const BASE_URL = "http://localhost:8000/api/v1"; // Ganti dengan URL API Laravel

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${BASE_URL}/blogs`);
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data blog:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">
          Blog Warung Kopi Mbah Redjo
        </h1>
        <p className="mt-4 text-center">
          Cerita dan informasi menarik tentang kopi dan budaya kami.
        </p>

        {loading ? (
          <p className="text-center mt-8">Memuat blog...</p>
        ) : (
          <div className="mt-8 grid gap-4">
            {blogs.map((blog) => (
              <article key={blog.id} className="p-4 border rounded-lg">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="mt-2">
                  {blog.content.length > 100
                    ? blog.content.substring(0, 100) + "..."
                    : blog.content}
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Lihat Selengkapnya
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
