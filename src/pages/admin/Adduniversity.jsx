import React, { useState } from 'react';
import { postDataToBackend } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUniversity() {
  const [formData, setFormData] = useState({
    name: '',
    long_name: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postDataToBackend('/universities', formData);
      toast.success('University created successfully!');
      setFormData({
        name: '',
        long_name: '',
        description: ''
      });
    } catch (error) {
      toast.error('Error creating university');
      console.error('Error creating university:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add University</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">University Name</label>
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
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="btn bg-gray-900 text-white hover:bg-gray-700 w-full py-2 rounded-md"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create University'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddUniversity;