import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, X, Save, Image as ImageIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "../../component/atoms/AlertDialog";
import apiService from "../../service/config";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import imageCompression from "browser-image-compression";

const AddBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    image: null,
  });
  const [imageLoading, setImageLoading] = useState(false);

    const handleChange = async (e) => {
       const { name, value, type, files } = e.target;
   
       if (type === "file") {
         const file = files[0];
         setImageLoading(true);
   
         try {
           const options = {
             maxSizeMB: 0.5,
             maxWidthOrHeight: 1024,
             useWebWorker: true,
           };
   
           const compressedFile = await imageCompression(file, options);
           setFormData((prev) => ({ ...prev, image: compressedFile }));
           setImagePreview(URL.createObjectURL(compressedFile));
         } catch (error) {
           console.error("Error compressing image:", error);
         } finally {
           setImageLoading(false);
         }
       } else {
         setFormData((prev) => ({ ...prev, [name]: value }));
       }
     };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload a featured image");
      return;
    }
    setConfirmModal(true);
  };

  const handleConfirmCreate = async () => {
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      await apiService.blogs.create(formDataToSend);
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
      setConfirmModal(false);
    }
  };

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

  return (
    <div>
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bright text-primary">
              Create New Blog
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Featured Image Upload */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-center">
                <div className="w-full h-64 relative">
                {imageLoading ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      </div>
                    ) : imagePreview ? (
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
                          className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"
                        >
                          <X size={16} />
                        </button>
                      </>
                    ) : (
                      <label className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                        <Upload size={24} className="text-gray-400" />
                        <span className="mt-2 text-sm text-gray-500">
                          Upload Image
                        </span>
                        <input
                          type="file"
                          name="image"
                          onChange={handleChange}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    )}
                </div>
              </div>
            </div>

            {/* Title & Meta */}
            <div className="bg-white rounded-xl shadow-sm p-6">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
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
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* <label className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Brief description of your post..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 mb-4"
                /> */}
              <div className="pb-10">
                <label className="block text-2xl font-bright text-primary mb-1">
                  Content
                </label>
                <ReactQuill
                  value={formData.text}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, text: value }))
                  }
                  modules={modules}
                  className="h-96"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4">
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
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>

      <AlertDialog open={confirmModal} onClose={() => setConfirmModal(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <h3 className="text-lg font-medium text-gray-900">
              Publish Blog Post
            </h3>
            <p className="text-sm text-gray-500">
              Are you ready to publish this blog post?
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
              onClick={handleConfirmCreate}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors ml-3"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <Save size={20} />
              )}
              Publish
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AddBlog;
