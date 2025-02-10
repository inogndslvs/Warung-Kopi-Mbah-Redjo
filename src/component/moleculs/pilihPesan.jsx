import React from "react";
import { useNavigate } from "react-router-dom";
import ImgCardMinuman from "../../../public/images/menu/kopi-klotok 2.png";
import ImgCardMakanan from "../../../public/images/menu/pisang bakar 1.png";

const PilihanMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-start w-full max-w-full md:w-[85%] md:h-[450px] mt-20 mb-10 bg-gradient-to-bl from-primary to-hitam md:px-6 rounded-[50px] overflow-hidden shadow-xl shadow-hitam">
      {/* Judul dan Deskripsi */}
      <div className="w-full flex flex-col items-start pl-8">
        <h2 className="text-4xl font-bright text-kuning mt-8 self-start">
          Mau pesan apa?
        </h2>
        <h4 className="text-xl font-bright text-secondary mb-6 self-start">
          Kami menyediakan makanan juga minuman
        </h4>
      </div>

      {/* Pilihan Menu */}
      <div className=" md:absolute bottom-0 right-0 flex flex-row md:flex-col items-center w-full max-w-full h-[90%] md:w-[95%] md:h-[77%] gap-6 bg-primary py-[100px] md:p-10 rounded-br-2xl rounded-tl-[200px] place-content-center">
        <div className="blok md:flex justify-center items-end gap-8  ">
          <div className="flex flex-col items-center mb-4 md:mb-0 bg-white p-2 rounded-lg shadow-lg ">
            <img
              src={ImgCardMinuman}
              alt="Minuman"
              className=" w-[315px] h-[154px] object-cover rounded-md mb-2"
            />
            <button
              onClick={() => navigate("/menu/minuman")}
              className="bg-primary w-[99%] hover:bg-yellow-600 text-kuning text-lg font-bright py-2 px-4 rounded-md shadow-md transition"
            >
              Minuman
            </button>
          </div>

          {/* Card Minuman */}
          <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-lg ">
            <img
              src={ImgCardMakanan}
              alt="Makanan"
              className=" w-[315px] h-[154px] object-cover rounded-md mb-2"
            />
            <button
              onClick={() => navigate("/menu/makanan")}
              className="bg-primary w-[99%] hover:bg-blue-600 text-kuning text-lg font-bright  py-2 px-4 rounded-md shadow-md transition"
            >
              Makanan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilihanMenu;
