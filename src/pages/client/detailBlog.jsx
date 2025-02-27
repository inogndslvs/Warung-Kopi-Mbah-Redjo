import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import apiService from "../../service/config";
import { formatDate } from "../../utils/dateFormater";
import "quill/dist/quill.snow.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetail();
  }, [slug]);

  const fetchBlogDetail = async () => {
    try {
      const response = await apiService.blogs.getBySlug(slug);
      setBlog(response.data.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20 text-center">
        <p className="text-red-500">Blog post not found.</p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 text-primary hover:underline"
        >
          Return to Blog List
        </button>
      </div>
    );
  }
  const handleShare = (platform) => {
    const currentUrl = window.location.href;
    const text = "Check out this interesting blog post!";

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        text + " " + currentUrl
      )}`,
    };

    window.open(shareUrls[platform], "_blank");
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
      <a
        href="/blog"
        className="flex items-center font-bright text-2xl text-primary hover:underline mb-4"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to Blog
      </a>

      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      <p className="text-gray-500 mt-2">
        {"admin"} - {formatDate(blog.created_at)}
      </p>
      <img
        src={blog.image || blog.thumbnail}
        alt={blog.title}
        className="w-full h-96 object-cover mt-4 rounded-lg"
      />

      <div
        className="mt-6 text-gray-700 leading-relaxed ql-editor"
        dangerouslySetInnerHTML={{ __html: blog.text }}
      />

      <div className="mt-8">
        <p className="text-lg font-semibold">Share Article:</p>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => handleShare("facebook")}
            className="text-blue-600 hover:underline"
          >
            Facebook
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="text-sky-500 hover:underline"
          >
            Twitter
          </button>
          <button
            onClick={() => handleShare("whatsapp")}
            className="text-green-600 hover:underline"
          >
            WhatsApp
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-10 border-t pt-6">
        {blog.prev_post && (
          <a
            href={`/blog/${blog.prev_post.id}`}
            className="flex items-center text-gray-600 hover:underline"
          >
            <ArrowLeft size={20} className="mr-2" /> Previous Post
          </a>
        )}
        {blog.next_post && (
          <a
            href={`/blog/${blog.next_post.id}`}
            className="flex items-center text-gray-600 hover:underline"
          >
            Next Post <ArrowRight size={20} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
