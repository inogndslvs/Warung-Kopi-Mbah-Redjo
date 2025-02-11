import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import Menu from "./pages/client/Menu";
import Blog from "./pages/client/Blog";
import AboutUs from "./pages/client/About-us";
import Layout from "./component/layout/layout";
import PilihanMakanan from "./pages/PilihanMakanan";
import PilihanMinuman from "./pages/PilihanMinuman";
import Checkout from "./pages/Checkout";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/makanan" element={<PilihanMakanan />} />
              <Route path="/minuman" element={<PilihanMinuman />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
