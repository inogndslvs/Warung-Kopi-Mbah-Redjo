import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import Menu from "./pages/client/Menu";
import Blog from "./pages/client/Blog";
import AboutUs from "./pages/client/About-us";
import Layout from "./component/layout/layout";
import MenuMinuman from "./component/moleculs/MenuMinuman";
import MenuMakanan from "./component/moleculs/MenuMakanan";
import MobileCart from "./component/MobileCart";
import Payment from "./pages/payment";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/minuman" element={<MenuMinuman />} />
          <Route path="/makanan" element={<MenuMakanan />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
