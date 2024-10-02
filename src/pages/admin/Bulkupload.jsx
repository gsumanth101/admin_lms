import React, { useState, useEffect } from 'react';
import { getDataFromBackend, postDataToBackend } from '../../api/api'; // Import API functions
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS

function Bulkupload() {
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
      setFile(null);
      setUniversityId('');
    } catch (error) {
      toast.error('Error uploading users: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Bulk Upload Users</h2>
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
      <ToastContainer />
    </div>
  );
}

export default Bulkupload;