import Navbar from "../../component/navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">Tentang Warung Kopi Mbah Redjo</h1>
        <p className="mt-4 text-center">Warung Kopi Mbah Redjo didirikan untuk membawa kehangatan kopi klasik ke generasi masa kini. Kami percaya setiap cangkir memiliki cerita.</p>
        <div className="mt-8 text-center">
          <p>Alamat: Jalan Kopi No. 123, Kota Kopi</p>
          <p>Telepon: +62 812-3456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
