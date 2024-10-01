import React, { useState, useEffect } from 'react';
import { getDataFromBackend, postDataToBackend } from '../../api/api'; // Import API functions
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function CreateSpoc() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    universityId: ''
  });
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
          toast.error('Failed to load universities.');
        }
      } catch (error) {
        console.error('Error fetching universities:', error);
        toast.error('Error fetching universities.');
      }
    };

    fetchUniversities();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, universityId } = formData;

    if (!name || !email || !phone || !universityId) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true); // Show spinner
    try {
      const response = await postDataToBackend('/spocs', formData);
      if (response && response.message) {
        toast.success(response.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          universityId: ''
        }); // Clear form
      } else {
        console.error('Unexpected response format:', response);
        toast.error('Failed to create SPOC.');
      }
    } catch (error) {
      console.error('Error creating SPOC:', error);
      toast.error('Error creating SPOC: ' + (error.response?.data?.message || error.message));
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
              <div className="col-span-12 xl:col-span-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full h-96 overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Create SPOC</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select University</label>
                    <select
                      name="universityId"
                      value={formData.universityId}
                      onChange={handleChange}
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
                    {loading ? 'Creating...' : 'Create SPOC'}
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

export default CreateSpoc;