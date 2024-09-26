import React, { useState } from 'react';
import { postDataToBackend } from '../api/api'; // Import API function
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function Adduniversity() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    long_name: '',
    short_name: '',
    location: '',
    country: ''
  });

  const [loading, setLoading] = useState(false); // Spinner state

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner
    try {
      const response = await postDataToBackend('/add_org', formData);
      toast.success(response.message);
      setFormData({ long_name: '', short_name: '', location: '', country: '' }); // Clear form
    } catch (error) {
      toast.error('Error creating university: ' + (error.response?.data?.message || error.message));
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
                <h2 className="text-xl font-bold mb-4">Create University</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Long Name</label>
                    <input
                      type="text"
                      name="long_name"
                      value={formData.long_name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Short Name</label>
                    <input
                      type="text"
                      name="short_name"
                      value={formData.short_name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bg-gray-900 text-white hover:bg-gray-700 w-full py-2 rounded-md"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? 'Creating...' : 'Create University'}
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

export default Adduniversity;