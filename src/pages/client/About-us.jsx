import LogoAboutUs from "../../assets/logo/LogoAboutUs.svg";
import FontBorder from "../../assets/logo/FontBorder.svg";
import WarungKopiDescription from "../../component/moleculs/descAboutUs";
import VisiMisi from "../../component/moleculs/visiMisi";
import TimKami from "../../component/moleculs/timKami";
import BanerAboutUs from "../../component/moleculs/banerAboutUs";

const AboutUs = () => {
  return (
    <div className="">
      <div className="pt-[170px] py-28">
        <div className="flex justify-center items-center">
          <img src={LogoAboutUs} alt="logo Warung Kopi Mbah Redjo" />
        </div>
        <h1 className="text-5xl font-bright text-center text-primary ">
          Warung Kopi Mbah Redjo
        </h1>
        <div className="flex justify-center items-center">
          <img
            src={FontBorder}
            alt="Text Sederhana yang menyatukan"
            className="h-auto w-[350px]"
          />
        </div>
        <WarungKopiDescription />
        <VisiMisi />
        <TimKami />
        <BanerAboutUs />
      </div>
    </div>
  );
};

export default AboutUs;
