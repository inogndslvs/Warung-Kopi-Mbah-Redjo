function Orders() {
    const ordersData = [ 
        {
            id: 1,
            kodeOrder: "11234",
            pelanggan: "Anto",
            meja: "07",
            totalHarga: "Rp. 30.000",
            status: "Proses",
            waktuOrder: "2024-11-20 10:00",
        },
        {
            id: 2,
            kodeOrder: "11235",
            pelanggan: "Budi",
            meja: "12",
            totalHarga: "Rp. 60.000",
            status: "Selesai",
            waktuOrder: "2024-11-20 12:30",
        },
        {
            id: 3,
            kodeOrder: "11236",
            pelanggan: "Yadi",
            meja: "01",
            totalHarga: "Rp. 30.000",
            status: "Proses",
            waktuOrder: "2024-11-20 10:00",
        },
        {
            id: 4,
            kodeOrder: "11237",
            pelanggan: "Dimas",
            meja: "03",
            totalHarga: "Rp. 60.000",
            status: "Selesai",
            waktuOrder: "2024-11-20 12:30",
        },
    ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FFFBF5]">
      {/* Header/Navbar */}
      <div className="w-full bg-[#F7EFE5] border-b px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="src\assets\logo\logofill.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex-1 mx-4 max-w-2xl">
          <div className="relative">
            <input
              type="search"
              placeholder="Type to search"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-[#C38154] bg-[#FFFBF5] shadow-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute -top-1 -right-1 bg-[#C38154] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            <svg className="w-6 h-6 text-[#7D6E83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="relative">
            <span className="absolute -top-1 -right-1 bg-[#C38154] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            <svg className="w-6 h-6 text-[#7D6E83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <img src="src\assets\avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-[#F7EFE5] border-r flex flex-col h-full">
          <div className="p-4 flex-1">
            <nav className="space-y-4">
              <a href="/dashboard" className="flex items-center gap-3 p-2 text-[#7D6E83] rounded hover:bg-[#FFFBF5]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Dashboard</span>
              </a>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-3 p-2 text-[#7D6E83] rounded hover:bg-[#FFFBF5] cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span>Settings</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="pl-10 space-y-1">
                  <a href="#" className="block text-[#7D6E83] hover:bg-[#FFFBF5] rounded p-2">Produk</a>
                  <a href="#" className="block text-[#7D6E83] hover:bg-[#FFFBF5] rounded p-2">User</a>
                  <a href="/products" className="block text-[#7D6E83] hover:bg-[#FFFBF5] rounded p-2">Kelola Produk</a>
                  <a href="#" className="block text-[#7D6E83] hover:bg-[#FFFBF5] rounded p-2">Kelola Diskon</a>
                  <a href="#" className="block text-[#7D6E83] hover:bg-[#FFFBF5] rounded p-2">order</a>
                </div>
              </div>

              <a href="#" className="flex items-center gap-3 p-2 text-[#7D6E83] rounded hover:bg-[#FFFBF5]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span>Orders</span>
              </a>
            </nav>
          </div>
          
          {/* Logout button at bottom */}
          <div className="p-4 border-t">
            <a href="/" className="flex items-center gap-3 p-2 text-[#7D6E83] rounded hover:bg-[#FFFBF5]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              <span>Logout</span>
            </a>
          </div>
        </div>

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
                    <button className="bg-[#CFD43E] text-white px-3 py-1 rounded-full flex items-center gap-1">
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
