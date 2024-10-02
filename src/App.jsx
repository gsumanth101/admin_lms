import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';
import ProtectedRoute from './ProtectedRoute';

// Import pages
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Authpage';
import Adduniversity from './pages/admin/Adduniversity';
import AddCourse from './pages/admin/Addcourse';
import AdminLayout from './pages/admin/AdminLayout';
import BulkUpload from './pages/admin/Bulkupload';
import CreateUser from './pages/admin/Createuser';
import Createspoc from './pages/admin/Createspoc';
import ProfilePage from './pages/admin/ProfilePage';


import SpocLogin from './pages/spoc/Authpage';
import SpocLayout from './pages/spoc/SpocLayout';
import SpocDashboard from './pages/spoc/SpocDashboard';
import SpocProfilePage from './pages/spoc/SpocProfilePage';
import CreateFaculty from './pages/spoc/CreateFaculty';


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
        <Route path="/spoc/login" element={<SpocLogin />} />
        {/* ______________________ADMIN ROUTES__________________________________ */}
        <Route path="/admin" element={<ProtectedRoute element={AdminLayout} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add_university" element={<Adduniversity />} />
          <Route path="add_course" element={<AddCourse />} />
          <Route path="upload_users" element={<BulkUpload />} />
          <Route path="create_user" element={<CreateUser/>} />
          <Route path="create_spoc" element={<Createspoc/>} />
          <Route path="profile" element={<ProfilePage/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>


          {/* ______________________SPOC ROUTES_________________________________ */}
           <Route path="/spoc" element={<ProtectedRoute element={SpocLayout} />}>
            <Route path="dashboard" element={<SpocDashboard />} />
            <Route path="profile" element={<SpocProfilePage/>} />
            <Route path="add_faculty" element={<CreateFaculty/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
          

      </Routes>
    </>
  );
}

export default App;