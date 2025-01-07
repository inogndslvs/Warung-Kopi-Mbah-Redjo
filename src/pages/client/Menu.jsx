import Navbar from "../../component/navbar";
const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">Menu Kami</h1>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">Makanan</h2>
            <ul className="mt-2">
              <li>- Nasi Goreng</li>
              <li>- Pisang Goreng</li>
              <li>- Roti Bakar</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">Minuman</h2>
            <ul className="mt-2">
              <li>- Kopi Hitam</li>
              <li>- Cappuccino</li>
              <li>- Teh Hangat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
