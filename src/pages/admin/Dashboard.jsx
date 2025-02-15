import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../../component/admin/Sidebar';
import HeaderAdmin from '../../component/admin/HeaderAdmin';

const Dashboard = () => {
  // Add this data array for top products
  const topProducts = [
    { name: 'Kopi Klotok', value: 143382 },
    { name: 'Pisang Bakar', value: 87974 },
    { name: 'Kopi Klotok Susu', value: 45211 },
    { name: 'Kopi Aren', value: 21893 },
  ];

  // Add this data array inside the Dashboard component
  const salesData = [
    { month: 'Feb', value: 35000 },
    { month: 'Mar', value: 38000 },
    { month: 'Apr', value: 37000 },
    { month: 'May', value: 42000 },
    { month: 'Jun', value: 45591 },
    { month: 'Jul', value: 44000 },
    { month: 'Aug', value: 46000 },
    { month: 'Sep', value: 48000 },
    { month: 'Oct', value: 47000 },
    { month: 'Nov', value: 49000 },
    { month: 'Dec', value: 51000 },
    { month: 'Jan', value: 52000 },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FFFBF5]">
      <HeaderAdmin />
      <div className="flex flex-1">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-6 text-[#7D6E83]">Dashboard Overview</h1>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">TODAY SALES</p>
                    <span className="text-xs text-green-500 bg-green-100 px-2 py-0.5 rounded-full">+6%</span>
                  </div>
                  <div className="flex items-baseline mt-2">
                    <span className="text-lg font-medium text-gray-500">$</span>
                    <h3 className="text-2xl font-bold ml-0.5 text-gray-500">12,426</h3>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">TOTAL SALES</p>
                    <span className="text-xs text-green-500 bg-green-100 px-2 py-0.5 rounded-full">+6%</span>
                  </div>
                  <div className="flex items-baseline mt-2">
                    <span className="text-lg font-medium text-gray-500">$</span>
                    <h3 className="text-2xl font-bold ml-0.5 text-gray-500">112,426</h3>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">TOTAL ORDERS</p>
                    <span className="text-xs text-green-500 bg-green-100 px-2 py-0.5 rounded-full">+16%</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-2 text-gray-500">84,382</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">TOTAL CUSTOMERS</p>
                    <span className="text-xs text-red-500 bg-red-100 px-2 py-0.5 rounded-full">-4%</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-2 text-gray-500">33,493</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="text-xs text-gray-500">vs last month</span>
                  </div>
                </div>
              </div>

             

              <div className="grid grid-cols-3 gap-6 mb-6">
                {/* Sales Analytics Chart - Takes up 2 columns */}
                <div className="col-span-2 bg-white rounded-lg p-6 shadow">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-lg font-semibold text-[#7D6E83]">Sales Analytics</h2>
                      <p className="text-sm text-[#7D6E83]">Monthly revenue overview</p>
                    </div>
                    <select className="border rounded-lg px-3 py-1 text-sm bg-[#FFFBF5] text-[#7D6E83]">
                      <option>12 Months</option>
                      <option>6 Months</option>
                      <option>30 Days</option>
                      <option>7 Days</option>
                    </select>
                  </div>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                        <XAxis 
                          dataKey="month" 
                          stroke="#7D6E83"
                          fontSize={12}
                        />
                        <YAxis 
                          stroke="#7D6E83"
                          fontSize={12}
                          tickFormatter={(value) => `$${value.toLocaleString()}`}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#FFFBF5',
                            border: '1px solid #E0E0E0',
                            borderRadius: '8px'
                          }}
                          formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#6366F1" 
                          strokeWidth={2}
                          dot={{ fill: '#6366F1', strokeWidth: 2 }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Top Products - Takes up 1 column */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-[#7D6E83]">Produk Terlaris</h2>
                    <select className="border rounded-lg px-3 py-1 text-sm bg-[#FFFBF5] text-[#7D6E83]">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-[#7D6E83]">{product.name}</span>
                          <span className="text-sm text-[#7D6E83]">{product.value.toLocaleString()}</span>
                        </div>
                        <div className="h-2 bg-[#FFFBF5] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#6366F1] rounded-full"
                            style={{ 
                              width: `${(product.value / topProducts[0].value) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                {/* First row */}
                <div className="flex bg-white rounded-lg overflow-hidden shadow">
                  <div className="w-20 bg-[#0D47A1] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="text-3xl font-bold text-gray-500">38</div>
                    <div className="text-gray-600">Bahan Baku</div>
                  </div>
                </div>

                <div className="flex bg-white rounded-lg overflow-hidden shadow">
                  <div className="w-20 bg-[#C0CA33] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="text-3xl font-bold text-gray-500">15</div>
                    <div className="text-gray-600">Bahan Baku</div>
                  </div>
                </div>

                <div className="flex bg-white rounded-lg overflow-hidden shadow">
                  <div className="w-20 bg-[#D32F2F] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="text-3xl font-bold text-gray-500">38</div>
                    <div className="text-gray-600">Bahan Baku</div>
                  </div>
                </div>

                {/* Second row */}
                <div className="flex bg-white rounded-lg overflow-hidden shadow">
                  <div className="w-20 bg-[#00C853] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="text-3xl font-bold text-gray-500">20</div>
                    <div className="text-gray-600">Peralatan Dapur</div>
                  </div>
                </div>

                <div className="flex bg-white rounded-lg overflow-hidden shadow">
                  <div className="w-20 bg-[#9E9E9E] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="text-3xl font-bold text-gray-500">25</div>
                    <div className="text-gray-600">Barang Penunjang</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;