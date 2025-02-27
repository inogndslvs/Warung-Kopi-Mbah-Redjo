import { useState } from "react";
import { Search, MoreVertical, UserPlus } from "lucide-react";

const Users = () => {
  const usersData = [
    {
      id: 1,
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
      status: "Active",
      role: "Admin",
      email: "john.doe@example.com",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      username: "@sarahw",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=random",
      status: "Active",
      role: "Staff",
      email: "sarah.wilson@example.com",
      lastActive: "5 mins ago"
    },
    {
      id: 3,
      name: "Michael Brown",
      username: "@michaelb",
      avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=random",
      status: "Inactive",
      role: "Staff",
      email: "michael.brown@example.com",
      lastActive: "1 day ago"
    },
    {
      id: 4,
      name: "Emma Davis",
      username: "@emmad",
      avatar: "https://ui-avatars.com/api/?name=Emma+Davis&background=random",
      status: "Active",
      role: "Admin",
      email: "emma.davis@example.com",
      lastActive: "Just now"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bright text-primary">Team Members</h1>
                <p className="text-gray-500">Manage your team members and their account permissions here</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <UserPlus size={20} />
                Add Member
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex gap-4 mt-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search members..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Staff</option>
              </select>
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {usersData.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={20} />
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
};

export default Users;
