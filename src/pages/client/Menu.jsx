import PilihanMenu from "../../component/moleculs/pilihPesan";
import Bgmenu from "../../assets/bgMenuImg.svg";
const Menu = () => {
  return (
    <div className="bg-secondary">
      <div
        className="md:p-8 "
        style={{
          backgroundImage: `url(${Bgmenu})`,
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center">
          <PilihanMenu />
        </div>
      </div>
    </div>
  );
};

export default Menu;
