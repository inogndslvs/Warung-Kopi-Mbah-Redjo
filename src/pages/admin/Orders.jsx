import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";

const Orders = () => {
    const navigate = useNavigate();

    const ordersData = [ 
        {
            id: 1,
            kodeOrder: "11234",
            pelanggan: "Anto",
            meja: "07",
            totalHarga: "Rp. 30.000",
            status: "Proses",
            waktuOrder: "2024-11-20 10:00",
            items: [
              { menu: "Nasi Goreng", harga: 15000, jumlah: 1, total: 15000 },
              { menu: "Teh Manis", harga: 5000, jumlah: 3, total: 15000 },
            ],
        },
        {
            id: 2,
            kodeOrder: "11235",
            pelanggan: "Budi",
            meja: "12",
            totalHarga: "Rp. 60.000",
            status: "Selesai",
            waktuOrder: "2024-11-20 12:30",
            items: [
              { menu: "Nasi Goreng", harga: 15000, jumlah: 1, total: 15000 },
              { menu: "Teh Manis", harga: 5000, jumlah: 3, total: 15000 },
            ],
        },
        {
            id: 3,
            kodeOrder: "11236",
            pelanggan: "Yadi",
            meja: "01",
            totalHarga: "Rp. 30.000",
            status: "Proses",
            waktuOrder: "2024-11-20 10:00",
            items: [
              { menu: "Nasi Goreng", harga: 15000, jumlah: 1, total: 15000 },
              { menu: "Teh Manis", harga: 5000, jumlah: 3, total: 15000 },
            ],
        },
        {
            id: 4,
            kodeOrder: "11237",
            pelanggan: "Dimas",
            meja: "03",
            totalHarga: "Rp. 60.000",
            status: "Selesai",
            waktuOrder: "2024-11-20 12:30",
            items: [
              { menu: "Nasi Goreng", harga: 15000, jumlah: 1, total: 15000 },
              { menu: "Teh Manis", harga: 5000, jumlah: 3, total: 15000 },
            ],
        },
    ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FFFBF5]">
      <HeaderAdmin />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
            <table className="min-w-full table-auto mt-16"> {/* Table */}
            <thead>
              <tr className="bg-gray"> {/* Header row */}
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Kode Order</th>
                <th className="px-4 py-2">Pelanggan</th>
                <th className="px-4 py-2">Meja</th>
                <th className="px-4 py-2">Total Harga</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Waktu Order</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray'}> {/* Alternating row colors */}
                  <td className="px-4 py-2 text-center">{order.id}</td>
                  <td className="px-4 py-2">{order.kodeOrder}</td>
                  <td className="px-4 py-2">{order.pelanggan}</td>
                  <td className="px-4 py-2 text-center">{order.meja}</td>
                  <td className="px-4 py-2">{order.totalHarga}</td>
                  <td className="px-4 py-2">{order.status}</td>
                  <td className="px-4 py-2">{order.waktuOrder}</td>
                  <td className="px-4 py-2 flex gap-2 justify-center">
                    <button className="bg-[#CFD43E] text-white px-3 py-1 rounded-full flex items-center gap-1" onClick={() => navigate(`/orders/${order.kodeOrder}`)}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M22 11C22 11 17.875 3.4375 11 3.4375C4.125 3.4375 0 11 0 11C0 11 4.125 18.5625 11 18.5625C17.875 18.5625 22 11 22 11ZM1.61287 11C2.2767 9.98881 3.04145 9.04761 3.89538 8.19088C5.665 6.4185 8.085 4.8125 11 4.8125C13.915 4.8125 16.3336 6.4185 18.106 8.19088C18.9599 9.04761 19.7247 9.98881 20.3885 11C20.3097 11.1192 20.2203 11.2512 20.1204 11.396C19.6597 12.056 18.9791 12.936 18.106 13.8091C16.3336 15.5815 13.9136 17.1875 11 17.1875C8.08638 17.1875 5.66638 15.5815 3.894 13.8091C3.04008 12.9524 2.2767 12.0112 1.61287 11Z" fill="black"/>
                        <path d="M11 7.5625C10.0883 7.5625 9.21398 7.92466 8.56932 8.56932C7.92466 9.21398 7.5625 10.0883 7.5625 11C7.5625 11.9117 7.92466 12.786 8.56932 13.4307C9.21398 14.0753 10.0883 14.4375 11 14.4375C11.9117 14.4375 12.786 14.0753 13.4307 13.4307C14.0753 12.786 14.4375 11.9117 14.4375 11C14.4375 10.0883 14.0753 9.21398 13.4307 8.56932C12.786 7.92466 11.9117 7.5625 11 7.5625ZM6.1875 11C6.1875 9.72365 6.69453 8.49957 7.59705 7.59705C8.49957 6.69453 9.72365 6.1875 11 6.1875C12.2764 6.1875 13.5004 6.69453 14.403 7.59705C15.3055 8.49957 15.8125 9.72365 15.8125 11C15.8125 12.2764 15.3055 13.5004 14.403 14.403C13.5004 15.3055 12.2764 15.8125 11 15.8125C9.72365 15.8125 8.49957 15.3055 7.59705 14.403C6.69453 13.5004 6.1875 12.2764 6.1875 11Z" fill="black"/>
                     </svg>
                    </button>
                    <button className="bg-[#2536EB] text-white px-3 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="bg-[#DC2626] text-white px-3 py-1 rounded-full flex items-center gap-1"> 
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
