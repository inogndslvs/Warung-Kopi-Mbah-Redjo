import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import Menu from "./pages/client/Menu";
import Blog from "./pages/client/Blog";
import AboutUs from "./pages/client/About-us";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
