import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';
import ProtectedRoute from './ProtectedRoute';

// Import pages
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Authpage';
import AddUniversity from './pages/admin/Adduniversity';
import AddCourse from './pages/admin/Addcourse';
import AdminLayout from './pages/admin/AdminLayout';
import BulkUpload from './pages/admin/Bulkupload';
import CreateUser from './pages/admin/Createuser';
import Createspoc from './pages/admin/Createspoc';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute element={AdminLayout} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add_university" element={<AddUniversity />} />
          <Route path="add_course" element={<AddCourse />} />
          <Route path="upload_users" element={<BulkUpload />} />
          <Route path="create_user" element={<CreateUser/>} />
          <Route path="create_spoc" element={<Createspoc/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;