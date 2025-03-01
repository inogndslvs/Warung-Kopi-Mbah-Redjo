import { useState, useEffect, useRef} from "react";

import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit2, Printer } from "lucide-react";
import apiService from "../../service/config";
import { formatRupiah, toRupiah } from "../../utils/currency";
import { useReactToPrint } from "react-to-print";



const DetailOrder = () => {
  const { orderId } = useParams();

  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const contentRef =  useRef<HTMLDivElement>(null);
  

  const triggerPrint = useReactToPrint({contentRef});

  useEffect(() => {
    fetchOrderDetail();
  }, [orderId]);

  const fetchOrderDetail = async () => {
    try {
      const response = await apiService.orders.getById(orderId);

      setOrder(response.data.data);
    } catch (error) {
      console.error("Error fetching order:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      processing: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status?.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="flex-1 p-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }


  return (
    <div>
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate("/admin/orders")}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Orders
            </button>
            {/* <div className="flex gap-3">
              <button
                onClick={()=> triggerPrint()}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
              >
                <Printer size={20} />
                Print
              </button>
             
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                <Edit2 size={20} />
                Edit Order
              </button>
            </div> */}
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-gray-500">Order Number:</span>
                      <span className="ml-2 font-medium">#{order?.code}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Date:</span>
                      <span className="ml-2">
                        {new Date(order?.order_date).toLocaleString()}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Status:</span>
                      <span
                        className={`ml-2 px-2 py-1 rounded-full text-sm ${getStatusColor(
                          order?.status
                        )}`}
                      >
                        {order?.status}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Customer Information
                  </h2>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-gray-500">Name:</span>
                      <span className="ml-2">{order?.customer_name}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-500">Table Number:</span>
                      <span className="ml-2">Table {order?.table_number}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Order Items</h2>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        No
                      </th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-600">
                        Item
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-medium text-gray-600">
                        Price
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-medium text-gray-600">
                        Quantity
                      </th>
                      <th className="text-right py-4 px-4 text-sm font-medium text-gray-600">
                        Sub Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.items.map((item, index) => (
                      <tr key={item.id} className="border-b last:border-b-0">
                        <td className="py-4 px-4">{index + 1}</td>
                        <td className="py-4 px-4">{item.product_name}</td>
                        <td className="py-4 px-4 text-right">
                          {formatRupiah(item.price)}
                        </td>
                        <td className="py-4 px-4 text-right">
                          {item.quantity}
                        </td>
                        <td className="py-4 px-4 text-right">
                          {formatRupiah(item.subtotal)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t">
                      <td
                        colSpan="4"
                        className="py-4 px-4 text-right font-medium"
                      >
                        Total Amount:
                      </td>
                      <td className="py-4 px-4 text-right font-bold">
                        {formatRupiah(order?.total_amount)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
