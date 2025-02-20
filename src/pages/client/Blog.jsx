import Navbar from "../../component/navbar";
import Subscribe from "../../component/moleculs/subscribeBlog";
import RecentBlog from "../../component/moleculs/recentBlog";
import AllBlogPosts from "../../component/moleculs/allBlogPost";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="@container p-2 md:p-8 pt-48 md:pt-48">
        <h4 className="font-bright text-third text-center">Our Blog</h4>
        <h1 className="text-5xl font-bright text-primary text-center">
          Berita dan Cerita Warung Kami
        </h1>
        <Subscribe />
        <RecentBlog />
        <AllBlogPosts />
      </div>
    </div>
  );
};

export default Blog;
