import React, { useState } from 'react';
import Spocdashboard from './partials/dashboard/Spocdashboard';

function ManageSpoc() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="px-0 sm:px-6 lg:px-8 py-8 w-full max-w-6xl mx-auto">

    <div className="overflow-x-auto">
        <Spocdashboard />
    </div>
  </div>
  );
}

export default ManageSpoc;