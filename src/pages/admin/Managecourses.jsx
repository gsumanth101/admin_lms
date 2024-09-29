import React, { useState } from 'react';
import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import Coursedashboard from './partials/dashboard/Coursedashboard';
import UploadCourseContent from './partials/dashboard/Upload_course_content';
// import MapUniversities from './partials/dashboard/MapUniversities';

function ManageUniversity() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('allCourses');

  const renderContent = () => {
    switch (activeTab) {
      case 'allCourses':
        return <Coursedashboard />;
      case 'uploadCourseContent':
        return <UploadCourseContent />;
      case 'mapUniversities':
        return <Coursedashboard />;
      default:
        return <Coursedashboard />;
    }
  };

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
            {/* Tabs */}
            <div className="mb-4">
              <button
                className={`px-4 py-2 mr-2 ${activeTab === 'allCourses' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('allCourses')}
              >
                All Courses
              </button>
              <button
                className={`px-4 py-2 mr-2 ${activeTab === 'uploadCourseContent' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('uploadCourseContent')}
              >
                Upload Course Content
              </button>
              <button
                className={`px-4 py-2 ${activeTab === 'mapUniversities' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('mapUniversities')}
              >
                Map Universities
              </button>
            </div>

            {/* Content */}
            <div className="overflow-x-auto">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManageUniversity;