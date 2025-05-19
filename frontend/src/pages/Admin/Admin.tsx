// src/pages/Admin/Admin.tsx
import MainLayout from '../../components/layout/MainLayout';

const Admin = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="text-lg font-medium">Users</div>
                <div className="text-3xl font-bold">125</div>
              </div>
              <div className="bg-green-50 p-4 rounded-md">
                <div className="text-lg font-medium">Revenue</div>
                <div className="text-3xl font-bold">$12,350</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-md">
                <div className="text-lg font-medium">Orders</div>
                <div className="text-3xl font-bold">243</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
            <div className="border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">Created account</td>
                    <td className="px-6 py-4 whitespace-nowrap">May 18, 2025</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                    <td className="px-6 py-4 whitespace-nowrap">Purchased product</td>
                    <td className="px-6 py-4 whitespace-nowrap">May 17, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Admin;