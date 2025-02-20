import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar";

const BASE_URL = "http://localhost:8000/api/v1"; // Ganti dengan URL API Laravel
import Subscribe from "../../component/moleculs/subscribeBlog";
import RecentBlog from "../../component/moleculs/recentBlog";
import AllBlogPosts from "../../component/moleculs/allBlogPost";

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
        <div className="mt-8 grid gap-4">
          <article className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">Sejarah Kopi Nusantara</h2>
            <p className="mt-2">
              Menelusuri jejak kopi dari Sabang sampai Merauke...
            </p>
          </article>
          <article className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">Resep Kopi Tubruk Asli</h2>
            <p className="mt-2">
              Pelajari cara membuat kopi tubruk khas Indonesia...
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
