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
import ManageUniversity from './pages/admin/ManageUniversity';
import ManageSpoc from './pages/admin/Managespoc';


import SpocLogin from './pages/spoc/Authpage';
import SpocLayout from './pages/spoc/SpocLayout';
import SpocDashboard from './pages/spoc/SpocDashboard';
import SpocProfilePage from './pages/spoc/SpocProfilePage';
import CreateFaculty from './pages/spoc/CreateFaculty';
import CreateMeeting from './pages/faculty/CreateMeeting';

import FacultyLayout from './pages/faculty/FacultyLayout';
import FacultyLogin from './pages/faculty/AuthPage';
import AssessmentCreation from './pages/faculty/AssessmentGeneration';
import ManageAssessments from './pages/faculty/ManageAssessments';
import AssessmentResults from './pages/faculty/AssessmentResults';
import FacultyDashboard from './pages/faculty/FacultyDashboard';

import StudentLayout from './pages/student/StudentLayout';
import StudentLogin from './pages/student/AuthPage';
import StudentDashboard from './pages/student/StudentDashboard';
import Meetings from './pages/student/Meeting';
import Assessments from './pages/student/Assessments';
import Mycourse from './pages/student/mycourse';



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
        <Route path="/faculty/login" element={<FacultyLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />

        {/* ______________________ADMIN ROUTES__________________________________ */}
        <Route path="/admin" element={<ProtectedRoute element={AdminLayout} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add_university" element={<Adduniversity />} />
          <Route path="add_course" element={<AddCourse />} />
          <Route path="upload_users" element={<BulkUpload />} />
          <Route path="create_user" element={<CreateUser/>} />
          <Route path="create_spoc" element={<Createspoc/>} />
          <Route path="profile" element={<ProfilePage/>} />
          <Route path="manage_university" element={<ManageUniversity/>} />
          <Route path="manage_spoc" element={<ManageSpoc/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>


          {/* ______________________SPOC ROUTES_________________________________ */}
           <Route path="/spoc" element={<ProtectedRoute element={SpocLayout} />}>
            <Route path="dashboard" element={<SpocDashboard />} />
            <Route path="profile" element={<SpocProfilePage/>} />
            <Route path="add_faculty" element={<CreateFaculty/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>

          {/* _____________________Faculty Routes _____________________________*/}
          <Route path="/faculty" element={<FacultyLayout/>}>
            <Route index element={<FacultyDashboard />} />
            <Route path="dashboard" element={<FacultyDashboard />} />
            <Route path="generate_assessments" element={<AssessmentCreation/>} />
            <Route path="manage-assessments" element={<ManageAssessments />} />
            <Route path="assessment-results" element={<AssessmentResults/>} />
            <Route path="create_meeting" element={<CreateMeeting/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>


          {/* _____________________Student Routes_______________________________ */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} /> {/* This will be the default route */}
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="mycourse" element={<Mycourse />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
          

      </Routes>
    </>
  );
}

export default App;
