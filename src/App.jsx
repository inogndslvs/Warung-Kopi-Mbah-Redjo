import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import Menu from "./pages/client/Menu";
import Blog from "./pages/client/Blog";
import AboutUs from "./pages/client/About-us";
import Layout from "./component/layout/layout";
import BlogDetail from "./pages/client/detailBlog";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
