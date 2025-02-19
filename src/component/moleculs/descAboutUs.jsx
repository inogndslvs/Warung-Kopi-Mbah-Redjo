import FotoOwner from "../../../public/images/Galeri/FotoOwner.png";

const WarungKopiDescription = () => {
  return (
    <div className="relative flex flex-col-reverse mt-[200px] md:mt-[150px]  md:flex-row items-center justify-between rounded-[50px] w-full  shadow-lg border-[2px] border-primary overflow-hidden">
      <div className="md:w-1/2 w-full p-8 md:py-[145px] md:px-14 bg-primary text-secondary text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bright text-secondary">
          Warung Kopi Mbah Redjo
        </h2>
        <p className="mt-6 font-bright text-secondary text-justify leading-6 text-xl">
          Warkop Mbah Redjo adalah Coffeeshop yang bertemakan suasana nostalgia.
          Dengan dekorasi dan ornamen barang-barang lawas dan klasik, semakin
          menambah aura vintage di Warkop Mbah Redjo. Dari segi menu, Warkop
          Mbah Redjo mengangkat menu kopi tradisional Indonesia, seperti kopi
          klotok dan kopi tubruk dengan biji kopi terbaik dari seluruh daerah di
          Indonesia.
        </p>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <div className="w-[617px] h-[347px] md:h-[477px]">
          <img src={FotoOwner} alt="Pemilik Warung Kopi" />
        </div>
      </div>
    </div>
  );
};

export default WarungKopiDescription;
