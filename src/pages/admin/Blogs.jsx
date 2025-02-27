import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";
import apiService from "../../service/config";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "../../component/atoms/AlertDialog";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    blogId: null,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await apiService.blogs.getAll();
      console.log(response.data);
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const stripHtml = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };

  const handleDeleteClick = (id) => {
    setDeleteModal({ isOpen: true, blogId: id });
  };

  const handleConfirmDelete = async () => {
    try {
      await apiService.blogs.delete(deleteModal.blogId);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setDeleteModal({ isOpen: false, blogId: null });
    }
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bright text-primary">Blog Posts</h1>
          <button
            onClick={() => navigate("/admin/blogs/add")}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus size={20} />
            New Post
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm">
            {blogs.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 p-8">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Blog Posts Yet
                </h3>
                <p className="text-gray-500 text-center mb-4">
                  Get started by creating your first blog post
                </p>
                <button
                  onClick={() => navigate("/admin/blogs/add")}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Plus size={20} />
                  Create New Post
                </button>
              </div>
            ) : (
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        No
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th> */}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogs.map((blog, index) => (
                      <tr key={blog.id} className="hover:bg-gray-50">
                        <td className="py-4 px-4">{index + 1}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img
                              src={blog.image || "default-thumbnail.jpg"}
                              alt=""
                              className="h-10 w-10 rounded-lg object-cover mr-3"
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {blog.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {stripHtml(blog.text).length > 100
                                  ? `${stripHtml(blog.text).substring(
                                      0,
                                      100
                                    )}...`
                                  : stripHtml(blog.text)}
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* <td className="px-6 py-4">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  blog.status === "published"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {blog.status}
                              </span>
                            </td> */}
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(blog.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => navigate(`/blog/${blog.slug}`)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Eye size={18} />
                            </button>
                            <button
                              onClick={() =>
                                navigate(`/admin/blogs/edit/${blog.slug}`)
                              }
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleDeleteClick(blog.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      <AlertDialog
        open={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, blogId: null })}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <h3 className="text-lg font-medium text-gray-900">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this blog post? This action cannot
              be undone.
            </p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button
              onClick={() => setDeleteModal({ isOpen: false, blogId: null })}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors ml-3"
            >
              Delete
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Blogs;
