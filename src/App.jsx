import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import Menu from "./pages/client/Menu";
import Blog from "./pages/client/Blog";
import AboutUs from "./pages/client/About-us";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Blogs from "./pages/admin/Blogs";
import Orders from "./pages/admin/Orders";
import Users from "./pages/admin/Users";
import DetailOrder from "./pages/admin/DetailOrder";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import AddBlog from "./pages/admin/AddBlog";
import EditBlog from "./pages/admin/EditBlog";
import Layout from "./component/layout/layout";
import PilihanMakanan from "./pages/PilihanMakanan";
import PilihanMinuman from "./pages/PilihanMinuman";
import Checkout from "./pages/Checkout";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { CartProvider } from "./contexts/CartContext";
import BlogDetail from "./pages/client/detailBlog";

function App() {
  return (
    <Router>
      <Layout>
        <FavoritesProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/makanan" element={<PilihanMakanan />} />
              <Route path="/minuman" element={<PilihanMinuman />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/editproduct" element={<EditProduct />} />
              <Route path="/addblog" element={<AddBlog />} />
              <Route path="/editblog" element={<EditBlog />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:kodeOrder" element={<DetailOrder />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </CartProvider>
        </FavoritesProvider>
      </Layout>
    </Router>
  );
}

export default App;
