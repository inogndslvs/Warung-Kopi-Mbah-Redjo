import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../admin/Sidebar";
import HeaderAdmin from "../admin/HeaderAdmin";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-w-mobile h-screen flex flex-col bg-[#FFFBF5] max-w-layout mx-auto">
      <HeaderAdmin onToggleSidebar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`
          fixed md:static w-sidebar min-w-sidebar h-[calc(100vh-64px)]
          transition-transform duration-300 ease-in-out z-30 bg-secondary
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
        >
          <Sidebar onCloseSidebar={() => setIsSidebarOpen(false)} />
        </aside>

        <main className="flex-1 min-w-0 max-w-content mx-auto w-full overflow-x-hidden overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
