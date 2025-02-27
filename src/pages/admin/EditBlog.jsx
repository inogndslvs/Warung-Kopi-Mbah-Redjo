import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Upload, X, Save, Image as ImageIcon } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "../../component/atoms/AlertDialog";
import apiService from "../../service/config";

const EditBlog = () => {
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    // excerpt: "",
    // category: "",
    // tags: "",
    // status: "",
    image: null,
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await apiService.blogs.getBySlug(slug);
      const blog = response.data.data;
      setId(blog.id);
      setFormData({
        title: blog.title,
        text: blog.text,
        // excerpt: blog.excerpt,
        // category: blog.category,
        // tags: blog.tags,
        // status: blog.status,
      });
      setImagePreview(blog.image);
    } catch (error) {
      
      console.error("Error fetching blog");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
      console.log("logg file", file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmModal(true);
  };

  const handleConfirmUpdate = async () => {
    setLoading(true);
    try {
      console.log("Form Data to be sent:", formData);
      console.log("FormData object contents:");
      const formDataToSend = new FormData();
      formDataToSend.append("_method", "PUT");

      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
          console.log(`${key}:`, formData[key]);
        }
      });

      await apiService.blogs.update(id, formDataToSend);
      navigate("/admin/blogs");
    } catch (error) {

      console.error("Error updating blog:", error);
    } finally {
      setLoading(false);
      setConfirmModal(false);
    }
  };

  return (
    <div>
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bright text-primary">
              Edit Blog Post
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Featured Image Upload */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-center">
                <div className="w-full h-64 relative">
                  {imagePreview ? (
                    <>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData((prev) => ({ ...prev, image: null }));
                        }}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <label className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <ImageIcon size={48} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">
                        Upload Featured Image
                      </span>
                      <span className="text-xs text-gray-400 mt-1">
                        Recommended size: 1200x630px
                      </span>
                      <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="hidden"
                        accept="image/png, image/jpeg, image/jpg"
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* Title & Meta */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <label className="block text-4xl font-bright text-red-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter blog title..."
                value={formData.title}
                onChange={handleChange}
                className="w-full text-2xl font-bright border-0 focus:ring-0 focus:outline-none mb-4 placeholder-gray-400"
              />

              <div className="grid grid-cols-2 gap-4">
                {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select Category</option>
                      <option value="coffee">Coffee</option>
                      <option value="food">Food</option>
                      <option value="lifestyle">Lifestyle</option>
                    </select>
                  </div> */}

                {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div> */}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
              {/* <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Brief description of your post..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 mb-4"
                /> */}

              <label className="block text-4xl font-bright text-red-700 mb-1">
                Content
              </label>
              <ReactQuill
                value={formData.text}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, text: value }))
                }
                modules={modules}
                className="h-50"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 ">
              <button
                type="button"
                onClick={() => navigate("/admin/blogs")}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Save size={20} />
                )}
                Update Post
              </button>
            </div>
          </form>
        </div>
      </div>

      <AlertDialog open={confirmModal} onClose={() => setConfirmModal(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <h3 className="text-lg font-medium text-gray-900">
              Update Blog Post
            </h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to update this blog post?
            </p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button
              onClick={() => setConfirmModal(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmUpdate}
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors ml-3"
            >
              Update
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EditBlog;
