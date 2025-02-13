import Navbar from "../../component/navbar";
import Subscribe from "../../component/moleculs/subscribeBlog";
import RecentBlog from "../../component/moleculs/recentBlog";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="@container p-2 md:p-8 pt-48">
        <h4 className="font-bright text-third text-center">Our Blog</h4>
        <h1 className="text-5xl font-bright text-primary text-center">
          Berita dan Cerita Warung Kami
        </h1>
        <Subscribe />
        <RecentBlog />
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
