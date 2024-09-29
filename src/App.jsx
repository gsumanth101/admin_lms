import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import ProtectedRoute from './ProtectedRoute';

// Import pages
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Authpage';
import Adduniversity from './pages/admin/Adduniversity';
import Manageuniversity from './pages/admin/ManageUniversity';
import Addcourse from './pages/admin/Addcourse';
import Managecourses from './pages/admin/Managecourses';
import BulkUpload from './pages/admin/Bulkupload';
import Createuser from './pages/admin/Createuser';
import Createspoc from './pages/admin/Createspoc';
import Managespoc from './pages/admin/Managespoc';
import CourseDetails from './pages/admin/MapCourses';



function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
        <Route path="/add_university" element={<ProtectedRoute element={Adduniversity} />} />
        <Route path="/manage_university" element={<ProtectedRoute element={Manageuniversity} />} />
        <Route path="/add_course" element={<ProtectedRoute element={Addcourse} />} />
        <Route path="/courses/:id" element={<ProtectedRoute element={CourseDetails} />} />
        <Route path="/manage_course" element={<ProtectedRoute element={Managecourses} />} />
        <Route path="/upload_users" element={<ProtectedRoute element={BulkUpload} />} />
        <Route path="/create_user" element={<ProtectedRoute element={Createuser} />} />
        <Route path="/create_spoc" element={<ProtectedRoute element={Createspoc} />} />
        <Route path="/manage_spoc" element={<ProtectedRoute element={Managespoc} />} />
        
      </Routes>
    </>
  );
}

export default App;
