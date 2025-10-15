import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AdminSidebar } from '../components/AdminSidebar';
import { AdminHeader } from '../components/AdminHeader';

export const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="bg-gray-50 flex">
      <AdminSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col ">
        <AdminHeader />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
