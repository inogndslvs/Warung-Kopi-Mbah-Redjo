import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Sidebar from "../../component/admin/Sidebar";

const Users = () => {
    const usersData = [
        {
          id: 1,
          name: "John Doe",
          username: "@johndoe",
          avatar: "/src/assets/avatar.jpg",
          status: "Active",
          role: "Admin",
          email: "john.doe@example.com"
        }, 
        {
          id: 2,
          name: "Jane Smith",
          username: "@janesmith",
          avatar: "/src/assets/avatar.jpg",
          status: "Inactive",
          role: "Pelanggan",
          email: "jane.smith@example.com"
        },
        {
          id: 3,
          name: "Bob Wilson",
          username: "@bobwilson",
          avatar: "/src/assets/avatar.jpg",
          status: "Active",
          role: "Pelanggan",
          email: "bob.wilson@example.com"
        },
        {
          id: 4,
          name: "Alice Brown",
          username: "@alicebrown",
          avatar: "/src/assets/avatar.jpg",
          status: "Active",
          role: "Admin",
          email: "alice.brown@example.com"
        }
      ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FFFBF5]">
      <HeaderAdmin />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6 mt-16">
            <div className="flex flex-row align-center py-3 px-5 bg-white">
                <h1 className="font-medium text-xl">Team Members</h1>
                <p className="bg-[#F9F5FF] text-[#6941C6] rounded ml-3 p-1"><span>100</span> Users</p>
            </div>
            
          <table className="min-w-full table-auto bg-white">
          <thead className="bg-header">
            <tr className="bg-gray-50 text-left border-b border-gray">
              <th className="px-4 py-2"><input type="checkbox" name="nama" value="nama" /></th>  
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Peran</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={user.id} className={`border-b border-gray bg-white}`}>
                <td className="px-4 py-2"><input type="checkbox" name="nama" value="nama" /></td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.username}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'Active' 
                      ? 'bg-green_100 text-green_800' 
                      : 'bg-red_100 text-red_800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center gap-2">
                    <button className="bg-[#DC2626] text-white px-3 py-1 rounded-md flex items-center gap-1"> 
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    <button className="bg-[#2536EB] text-white px-3 py-1 rounded-md flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
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
  );
}

export default Users;
