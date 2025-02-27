import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import ClientLayout from "./component/layout/layout";
import AdminLayout from "./component/layout/adminLayout";

// Client Pages
import Home from "./pages/client/Home";
import Menu from "./pages/client/Menu";
import Blog from "./pages/client/Blog";
import AboutUs from "./pages/client/About-us";
import BlogDetail from "./pages/client/detailBlog";
import PilihanMakanan from "./pages/PilihanMakanan";
import PilihanMinuman from "./pages/PilihanMinuman";
import Checkout from "./pages/Checkout";

// Admin Pages
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

// Context Providers
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { CartProvider } from "./contexts/CartContext";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>
          <Routes>
            {/* Login Route */}
            <Route
              path="/admin/login"
              element={
                !isAuthenticated ? (
                  <Login />
                ) : (
                  <Navigate to="/admin/dashboard" replace />
                )
              }
            />

            {/* Client Routes */}
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="menu/foods" element={<PilihanMakanan />} />
              <Route path="menu/drinks" element={<PilihanMinuman />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogDetail />} />
              <Route path="about" element={<AboutUs />} />
            </Route>

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="products/edit/:id" element={<EditProduct />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/add" element={<AddBlog />} />
              <Route path="blogs/edit/:slug" element={<EditBlog />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders/:orderId" element={<DetailOrder />} />
              <Route path="users" element={<Users />} />
            </Route>

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
