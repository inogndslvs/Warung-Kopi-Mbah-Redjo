import { useEffect, useState, useCallback, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatsCard from "../../component/atoms/StatsCard";
import apiService from "../../service/config";
import { formatRupiah } from "../../utils/currency";

const Dashboard = () => {
  // Update the initial state structure
  const [dashboardData, setDashboardData] = useState({
    revenueToday: {
      today_sales: 0,
      yesterday_sales: 0,
      percent_change: 0,
      is_increase: false,
    },
    countCustomer: {
      cs_thismonth: 0,
      cs_lastmonth: 0,
      percent_change: 0,
      is_increase: false,
    },
    totalRevenue: {
      this_month: 0,
      last_month: 0,
      percent_change: 0,
      is_increase: false,
    },
    totalOrders: {
      this_month: 0,
      last_month: 0,
      percent_change: 0,
      is_increase: false,
    },
  });
  const [topProducts, setTopProducts] = useState([]);
  const [period, setPeriod] = useState(90);
  const [periodChart, setPeriodChart] = useState('12months');
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [ticks, setTiks] = useState([]);

  const fetchDashboardData = useCallback(async () => {
    try {
      const [dashboardStats, salesData] = await Promise.all([
        (await apiService.statistics.getDashboardStats()).data,
        apiService.statistics.getSalesData(periodChart),
      ]);

      // Transform the new API response format to match our state structure
      setDashboardData({
        revenueToday: {
          today_sales: dashboardStats?.revenue?.today,
          yesterday_sales: parseFloat(dashboardStats.revenue?.yesterday),
          percent_change: dashboardStats?.percentage_changes?.daily_revenue,
          is_increase: dashboardStats?.percentage_changes?.daily_revenue > 0,
        },
        countCustomer: {
          cs_thismonth: dashboardStats?.customers?.this_month,
          cs_lastmonth: dashboardStats?.customers?.last_month,
          percent_change: dashboardStats?.percentage_changes?.customers,
          is_increase: dashboardStats?.percentage_changes?.customers > 0,
        },
        totalRevenue: {
          this_month: parseFloat(dashboardStats?.revenue?.this_month),
          last_month: parseFloat(dashboardStats?.revenue?.last_month),
          percent_change: dashboardStats?.percentage_changes?.monthly_revenue,
          is_increase: dashboardStats?.percentage_changes?.monthly_revenue > 0,
        },
        totalOrders: {
          this_month: dashboardStats?.orders?.this_month,
          last_month: dashboardStats?.orders?.last_month,
          percent_change: dashboardStats?.percentage_changes?.orders,
          is_increase: dashboardStats?.percentage_changes?.orders > 0,
        },
      });

      setSalesData(salesData.data.data);
      setMin(salesData.data.min_value);
      setMax(salesData.data.max_value);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  }, [periodChart]);

  const fetchTop = useCallback(async () => {
    try {
      const response = await apiService.statistics.getTopProducts(period);
      setTopProducts(response.data);
    } catch (error) {
      console.error("Error fetching top products:", error);
    }
  }, [period]);



  useEffect(() => {
    setLoading(true);
    fetchDashboardData().finally(() => setLoading(false));
    fetchTop().finally(() => setLoading(false));
  }, [fetchDashboardData, fetchTop, period, periodChart]);

  const calculateYAxisTicks = () => {
    const step = (1000000 - 10000) / 9;
    return Array.from({ length: 10 }, (_, i) => Math.round(10000 + step * i));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const { revenueToday, totalRevenue, countCustomer, totalOrders } =
    dashboardData;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bright text-primary">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="TODAY SALES"
            total={revenueToday.today_sales}
            percent={revenueToday.percent_change}
            trend={revenueToday.is_increase ? "up" : "down"}
          />

          <StatsCard
            title="TOTAL SALES"
            total={totalRevenue.this_month}
            percent={totalRevenue.percent_change}
            trend={totalRevenue.is_increase ? "up" : "down"}
            comparison="vs last month"
          />

          <StatsCard
            title="TOTAL CUSTOMERS"
            total={countCustomer.cs_thismonth}
            percent={countCustomer.percent_change}
            trend={countCustomer.is_increase ? "up" : "down"}
            comparison="vs last month"
            currency={false}
          />

          <StatsCard
            title="TOTAL ORDERS"
            total={totalOrders.this_month}
            percent={totalOrders.percent_change}
            trend={totalOrders.is_increase ? "up" : "down"}
            comparison="vs last month"
            currency={false}
          />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Sales Analytics Chart - Takes up 2 columns */}
          <div className="col-span-2 bg-white rounded-lg p-6 shadow">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold text-[#7D6E83]">
                  Sales Analytics
                </h2>
                <p className="text-sm text-[#7D6E83]">
                  Monthly revenue overview
                </p>
              </div>
              <select
                className="border rounded-lg px-3 py-1 text-sm bg-[#FFFBF5] text-[#7D6E83]"
                value={periodChart}
                onChange={(e) => setPeriodChart(e.target.value)}
              >
                <option value={'12months'}>12 Months</option>
                <option value={'6months'}>6 Months</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={salesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="month" stroke="#7D6E83" fontSize={12} />
                  <YAxis
                    stroke="#7D6E83"
                    fontSize={12}
                    tickFormatter={(total_sales) => formatRupiah(total_sales)}
                    ticks={calculateYAxisTicks()}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFBF5",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                    }}
                    formatter={(total_sales) => [
                      formatRupiah(total_sales),
                      "Revenue",
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366F1"
                    strokeWidth={2}
                    dot={{ fill: "#6366F1", strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Products - Takes up 1 column */}
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-[#7D6E83]">
                Produk Terlaris
              </h2>
              <select
                className="border rounded-lg px-3 py-1 text-sm bg-[#FFFBF5] text-[#7D6E83]"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
              </select>
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-[#7D6E83]">
                      {product.name}
                    </span>
                    <span className="text-sm text-[#7D6E83]">
                      {product.total_sold.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-[#FFFBF5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6366F1] rounded-full"
                      style={{
                        width: `${
                          (product.total_sold / topProducts[0].total_sold) * 100
                        }%`,
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
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex-1 p-4">
              <div className="text-3xl font-bold text-gray-500">38</div>
              <div className="text-gray-600">Bahan Baku</div>
            </div>
          </div>

          <div className="flex bg-white rounded-lg overflow-hidden shadow">
            <div className="w-20 bg-[#C0CA33] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="flex-1 p-4">
              <div className="text-3xl font-bold text-gray-500">15</div>
              <div className="text-gray-600">Bahan Baku</div>
            </div>
          </div>

          <div className="flex bg-white rounded-lg overflow-hidden shadow">
            <div className="w-20 bg-[#D32F2F] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
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
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="flex-1 p-4">
              <div className="text-3xl font-bold text-gray-500">20</div>
              <div className="text-gray-600">Peralatan Dapur</div>
            </div>
          </div>

          <div className="flex bg-white rounded-lg overflow-hidden shadow">
            <div className="w-20 bg-[#9E9E9E] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
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
  );
};

export default Dashboard;
