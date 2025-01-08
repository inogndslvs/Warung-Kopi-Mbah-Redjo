import Navbar from "../../component/navbar";
import bghero from "../../assets/logo/bg-hero.jpg";
import ButtonLocationHero from "../../component/atoms/buttonHome";
import bgLogo from "../../assets/bgLogo.svg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="h-screen md:h-[150vh] bg-cover flex items-start justify-center text-center text-white relative " style={{ backgroundImage: `url(${bghero})` }}>
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay gelap */}
        <div className="relative top-40 z-10 max-w-6xl text-center md:top-36">
          <h1 className="text-4xl font-bright text-primary text-center sm:mt-10 sm:pt-10 sm:text-8xl">Warung Kopi Mbah Redjo: Sederhana yang Menyatukan</h1>
          <p className="font-bright text-hitam text-sm m-9 sm:text-lg sm:mt-9">Menghidupkan kembali kenangan lama melalui rasa dan suasana yang hangat. Rasakan tradisi kopi nusantara di Warung Kopi Mbah Redjo</p>
          <div className="p-3 mt-7">
            <p className="font-bright text-lg text-primary">Datang dan nikmati</p>
            <ButtonLocationHero />
          </div>
        </div>
      </header>

      <div
        className={`h-auto p-5 bg-secondary md:rounded-t-[120px] rounded-t-[40px] relative bg-no-repeat overflow-hidden -mt-28 z-20`}
        style={{
          backgroundImage: `url(${bgLogo})`,
          backgroundSize: "200px", // Membuat background terlihat pada mobile
          backgroundPosition: "center right", // Posisi background untuk mobile
        }}
      >
        {/* Logo sebagai Background */}
        <div className="p-6 md:p-10 text-center md:text-left md:flex md:items-center md:justify-between md:max-w-2xl">
          {/* Konten Teks */}
          <div>
            <h1 className="text-2xl  font-bright text-primary p-6 md:text-5xl">Tentang Kami</h1>
            <div>
              <h2 className="text-xl font-bright text-primary md:text-3xl md:p-5 ">Warung Kopi Mbah Redjo</h2>
              <p className="font-display font-thin leading-loose text-sm  md:text-base text-third mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>

          {/* Background di sebelah kanan untuk desktop */}
          <div className="hidden md:block md:w-1/2 h-full">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${bgLogo})`,
                backgroundSize: "500px", // Untuk desktop, sesuaikan ukuran
                backgroundPosition: "center right", // Tempatkan di kanan
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
