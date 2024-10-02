import React, { useState } from 'react';
import { postDataToBackend } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const response = await postDataToBackend('admin/add_org', formData);
      toast.success(response.message);
      setFormData({ long_name: '', short_name: '', location: '', country: '' }); // Clear form
    } catch (error) {
      toast.error('Error creating university: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add University</h2>
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
      <ToastContainer />
    </div>
  );
}

export default AddUniversity;