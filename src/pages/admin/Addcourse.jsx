import React, { useState, useEffect } from 'react';
import { postDataToBackend } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCourse() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',

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
      await postDataToBackend('/admin/add_course', formData);
      toast.success('Course created successfully!');
      setFormData({
        name: '',
        description: '',
      });
    } catch (error) {
      toast.error('Error creating course');
      console.error('Error creating course:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Course Name</label>
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
          {loading ? 'Creating...' : 'Create Course'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddCourse;