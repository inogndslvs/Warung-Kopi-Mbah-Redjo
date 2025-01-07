import Navbar from "../../component/navbar";
import bghero from "../../assets/logo/bg-hero.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="h-screen bg-cover flex items-center justify-center text-center text-white relative" style={{ backgroundImage: `url(${bghero})` }}>
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay gelap untuk meningkatkan kontras */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bright font-bold">Selamat Datang di Warung Kopi Mbah Redjo</h1>
          <p className="mt-4 text-xl">Tempat terbaik untuk menikmati secangkir kopi klasik</p>
        </div>
      </header>
    </div>
  );
};

export default Home;
