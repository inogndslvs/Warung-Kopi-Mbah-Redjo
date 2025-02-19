import LogoWebsite from "../../../src/assets/logo/LogoFooter.svg";

const VisiMisi = () => {
  return (
    <div className="md:relative w-[100%] md:w-[80%] mx-auto bg-primary my-20 p-10 md:rounded-tl-[50px] rounded-tr-[200px] md:rounded-tr-[300px] shadow-lg">
      {/* Bagian Kiri: Tulisan Visi & Misi */}
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bright text-secondary">Visi dan Misi</h1>
        <p className="mt-4  font-bright text-2xl text-secondary">
          Warkop Mbah Redjo mempunyai visi dan misi mengangkat potensi produk
          lokal yakni kopi Indonesia. Warkop Mbah Redjo sendiri memiliki segmen
          “Indonesia Dalam Genggaman”, yakni menjelajah negeri dimulai dari
          secangkir kopi. “Indonesia Dalam Genggaman” adalah Warkop Mbah Redjo
          menyediakan dan merotasi biji kopi yang disediakan untuk diseduh
          dengan biji kopi dari roastery dan daerah terbaik penghasil kopi di
          Indonesia. Selain itu, Warkop Mbah Redjo sering berkolaborasi dengan
          UMKM dengan semangat kolaktif diluar bidang kopi, seperti studio seni,
          vendor konveksi, garment dan laundry.
        </p>
      </div>

      {/* Bagian Logo: Diletakkan di kanan bawah */}
      <img
        src={LogoWebsite}
        alt="Logo Warung Kopi"
        className="hidden md:block absolute bottom-8 right-8 w-[192px] h-[290px]"
      />

      {/* Garis panjang dengan anak panah */}
      <div className="mt-6 border-t-2 border-secondary w-full relative">
        <div className="absolute right-0 -top-2 w-6 h-6 "></div>
      </div>
    </div>
  );
};

export default VisiMisi;
