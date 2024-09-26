import React, { useState, useEffect } from 'react';
import { getDataFromBackend, postDataToBackend } from '../api/api'; // Import API functions
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function Bulkupload() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [universityId, setUniversityId] = useState('');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false); // Spinner state

  // Fetch universities on component mount
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await getDataFromBackend('/org');
        if (response && Array.isArray(response.universities)) {
          setUniversities(response.universities);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle university change
  const handleUniversityChange = (e) => {
    setUniversityId(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !universityId) {
      toast.error('Please select a file and a university.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('universityId', universityId);

    setLoading(true); // Show spinner
    try {
      const response = await postDataToBackend('/upload-users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success(response.message);
    } catch (error) {
      toast.error('Error uploading users: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false); // Hide spinner
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

        <main className="grow flex items-center justify-center">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-4xl mx-auto">
            {/* Form Card */}
            <div className="flex items-center justify-center">
              <div className="col-span-12 xl:col-span-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Bulk Upload Users</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select File</label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select University</label>
                    <select
                      value={universityId}
                      onChange={handleUniversityChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select a university</option>
                      {universities.map((university) => (
                        <option key={university._id} value={university._id}>
                          {university.long_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn bg-gray-900 text-white hover:bg-gray-700 w-full py-2 rounded-md"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? 'Uploading...' : 'Upload Users'}
                  </button>
                </form>

                {/* Toast Container */}
                <ToastContainer />

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Bulkupload;