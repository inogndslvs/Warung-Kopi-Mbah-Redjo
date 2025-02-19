import React from "react";
import FotoBaner from "../../../public/images/Galeri/galeri7.jpeg";
import ButtonBaner from "../atoms/buttonBaner";

const BanerAboutUs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-around py-8 md:py-4 px-[20px] bg-kuning mt-[100px] rounded-[50px] md:rounded-[100px] shadow-md md:w-[90%] mx-[10px] md:mx-auto">
      {/* Konten sebelah kiri */}
      <div className="flex flex-col justify-center py-4 md:w-[80%] text-center mb-4 md:mb-0">
        <h2 className="font-bright text-primary text-2xl md:text-4xl">
          Warung Kopi Mbah Redjo
        </h2>
        <h1 className="font-bright text-3xl md:text-5xl text-hitam mb-2">
          Tempat ternyaman <br /> untuk membagi kasih
        </h1>

        <ButtonBaner />
      </div>

      {/* Konten sebelah kanan - Gambar */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={FotoBaner}
          alt="Lokasi Warung Kopi"
          className="rounded-[50px] md:rounded-[100px] m-4 w-full h-[270px] md:h-[320px] w-[350px] md:w-[399px]  object-cover"
        />
      </div>
    </div>
  );
};

export default BanerAboutUs;
