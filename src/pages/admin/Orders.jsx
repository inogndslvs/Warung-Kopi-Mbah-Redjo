import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Edit2, Trash2, Search, Filter, Printer } from "lucide-react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";
import apiService from "../../service/config";
import { formatRupiah } from "../../utils/currency";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "../../component/atoms/AlertDialog";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    orderId: null,
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchOrders();
  }, [startDate, endDate, searchTerm, currentPage]);

  const fetchOrders = async () => {
    try {
      let queryParams = new URLSearchParams();

      if (startDate) queryParams.append("start_date", startDate);
      if (endDate) queryParams.append("end_date", endDate);
      if (searchTerm) queryParams.append("search", searchTerm);
      queryParams.append("paginate", itemsPerPage);
   

      const response = await apiService.orders.getAll(queryParams.toString());
      setOrders(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteModal({ isOpen: true, orderId: id });
  };

  const handleConfirmDelete = async () => {
    try {
      await apiService.orders.delete(deleteModal.orderId);
      fetchOrders(); // Refresh the orders list
      setDeleteModal({ isOpen: false, orderId: null });
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      proses: "bg-yellow-100 text-yellow-800",
      processing: "bg-blue-100 text-blue-800",
      done: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      if (!newStatus) {
        console.log("New status is undefined");
        return;
      }
      await apiService.orders.updateStatus(orderId, { status: newStatus });
      fetchOrders(); // Refresh orders after update
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleDownloadPDF = async () => {
    await apiService.statistics.downloadPdf(startDate, endDate);
  };

  return (
    <div>
      <AlertDialog
        open={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, orderId: null })}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <h3 className="text-lg font-medium text-gray-900">Delete Order</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this order? This action cannot be
              undone.
            </p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button
              onClick={() => setDeleteModal({ isOpen: false, orderId: null })}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors ml-3"
            >
              Delete
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div>
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bright text-primary">Orders</h1>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
              >
                <Printer size={20} />
                Print
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search orders..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  {/* <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="all">All Status</option>
                    <option value="proces">Processing</option>
                    <option value="done">Completed</option>
                    <option value="cancel">Cancelled</option>
                  </select> */}

                  {/* <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Filter size={20} />
                  </button> */}
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <span>to</span>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 p-8">
                      <div className="text-gray-400 mb-4">
                        <svg
                          className="w-16 h-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No Orders Yet
                      </h3>
                      <p className="text-gray-500 text-center mb-4">
                        Orders will appear here when customers place them
                      </p>
                    </div>
                  ) : (
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                            No
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                            Order ID
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                            Customer
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                            Table
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                            Total
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                            Status
                          </th>
                          <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                            Date
                          </th>
                          <th className="text-right py-4 px-4 text-sm font-medium text-gray-600">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => (
                          <tr
                            key={order.id}
                            className="border-b last:border-b-0 hover:bg-gray-50"
                          >
                            <td className="py-4 px-4">{index + 1}</td>
                            <td className="py-4 px-4">#{order.code}</td>
                            <td className="py-4 px-4">{order.customer_name}</td>
                            <td className="py-4 px-4">
                              Meja {order.table_number}
                            </td>
                            <td className="py-4 px-4">
                              {formatRupiah(order.total_amount)}
                            </td>
                            <td className="py-4 px-4">
                              <span
                                className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                                  order.status
                                )}`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              {new Date(order.order_date).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex justify-end gap-2">
                                <select
                                  value={order.status}
                                  onChange={(e) =>
                                    handleStatusChange(order.id, e.target.value)
                                  }
                                  className="px-2 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                  <option value="proses">Proses</option>
                                  <option value="done">Done</option>
                                </select>
                                <button
                                  onClick={() =>
                                    navigate(`/admin/orders/${order.id}`)
                                  }
                                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  <Eye size={18} />
                                </button>
                                <button
                                  onClick={() => handleDeleteClick(order.id)}
                                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
              {/* <div className="mt-4 flex justify-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2">Page {currentPage}</span>
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={orders.length < itemsPerPage}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
