import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import apiService from "../../service/config";
import { useNavigate } from "react-router-dom";

const AllBlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await apiService.blogs.getAll();
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container my-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container my-24">
      <h1 className="pl-8 font-bright text-primary text-3xl">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[2px] md:p-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 rounded-lg shadow-lg">
            <img
              src={blog.image || blog.thumbnail}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                {'Admin'} - {new Date(blog.created_at).toLocaleDateString()}
              </p>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <ArrowUpRight size={20} onClick={() => navigate(`/blog/${blog.slug}`)} color="red"/>
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
