import { Bell, Mail, Search, User } from "lucide-react";
import logoFull from "../../assets/logo/logofill.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import apiService from "../../service/config";

const HeaderAdmin = ({ onToggleSidebar }) => {
  const [unprocessedOrders, setUnprocessedOrders] = useState([]);
  useEffect(() => {
    const fetchUnprocessedOrders = async () => {
      try {
        const response = await apiService.orders.getAll("search=proses");
        setUnprocessedOrders(response.data.data);
        console.log(unprocessedOrders, "ini unprocessed");
      } catch (error) {
        console.error("Error fetching unprocessed orders:", error);
      }
    };
    fetchUnprocessedOrders();
    
      const echo = new Echo({
        broadcaster: "pusher",
        key: "1b58a56378ce87c49646",
        cluster: "ap1",
        encrypted: true,
      });

      echo.channel("order").listen(".NewOrder", (e) => {
        console.log("New order received:", e);
        setUnprocessedOrders((prev) => [...prev, e.order]);
      });

      return () => {
        echo.leave("order");
      };
    
  }, []);

  return (
    <div className="w-full bg-secondary shadow-md px-4 lg:px-8 py-3 min-w-mobile">
      <div className="max-w-content mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          <img src={logoFull} alt="Logo" className="h-8 md:h-10 w-auto" />
          <h1 className="text-base md:text-xl lg:text-2xl font-bright text-primary hidden md:block">
            Warung Kopi Mbah Redjo
          </h1>
        </div>

        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden md:block flex-1 max-w-xl mx-4 lg:mx-8">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="search"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          {/* Notifications - Hidden on Mobile */}
          {/* <div className="hidden md:block relative">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
            <Mail className="w-6 h-6 text-gray-600" />
          </div> */}

          <div className="relative">
            {unprocessedOrders.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {unprocessedOrders.length}
              </span>
            )}
            <Bell className="w-6 h-6 text-gray-600" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-3 border-l pl-3 md:pl-6">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-gray-700">Admin Name</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <div className="h-8 w-8 md:h-10 md:w-10 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="mt-3 md:hidden">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-1.5 text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
