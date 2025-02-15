import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../component/admin/HeaderAdmin';
import Sidebar from '../../component/admin/Sidebar';

const Products = () => {
  const navigate = useNavigate();

  const addProduct = () => {
    navigate("/addproduct");
  };

  const handleEditClick = () => {
    navigate(`/editproduct`);
  };
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Produk 1', price: 100000, stock: 10 },
    { id: 2, name: 'Produk 2', price: 200000, stock: 15 },
    { id: 3, name: 'Produk 3', price: 300000, stock: 20 },
  ]);

  // Add category state
  const [activeCategory, setActiveCategory] = useState('Makanan');

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FFFBF5]">
      <HeaderAdmin />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
            {/* Category Tabs */}
            <div className="flex gap-2 mb-4">
              <button 
                className={`px-4 py-2 rounded ${
                  activeCategory === 'Makanan' 
                    ? 'bg-kuning' 
                    : 'bg-gray text-gray-600'
                }`}
                onClick={() => setActiveCategory('Makanan')}
              >
                Makanan
              </button>
              <button 
                className={`px-4 py-2 rounded ${
                  activeCategory === 'Minuman' 
                    ? 'bg-kuning' 
                    : 'bg-gray text-gray-600'
                }`}
                onClick={() => setActiveCategory('Minuman')}
              >
                Minuman
              </button>
            </div>

            {/* Add Button and Search */}
            <div className="flex justify-between items-center mb-4">
              <button className="flex items-center gap-2 bg-kuning text-primary px-4 py-2 rounded" onClick={addProduct}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Tambah
              </button>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="search"
                  placeholder="Type to search"
                  className="px-4 py-2 pl-10 rounded border focus:outline-none border-secondary bg-white"
                />
              </div>
            </div>

            {/* Updated Table */}
            <div className="bg-white shadow overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Nama</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Kategori</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Harga</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray">
                  {products.map((product, index) => (
                    <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray'}>
                      <td className="px-6 py-2 text-gray-900">{product.name}</td>
                      <td className="px-6 py-2 text-gray-900">{activeCategory}</td>
                      <td className="px-6 py-2 text-gray-900">Rp. {product.price.toLocaleString()}</td>
                      <td className="px-6 py-2">
                        <div className="flex gap-2">
                          <button className="bg-[#2536EB] text-white px-3 py-1 rounded flex items-center gap-1" onClick={handleEditClick}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                          </button>
                          <button className="bg-[#DC2626] text-white px-3 py-1 rounded flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
