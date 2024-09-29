import React, { useState } from 'react';
import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import Coursedashboard from './partials/dashboard/Coursedashboard';

function ManageUniversity() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow flex">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-6xl mx-auto">
            {/* Content */}
            <div className="overflow-x-auto">
              <Coursedashboard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManageUniversity;