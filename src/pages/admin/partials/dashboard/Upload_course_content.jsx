import React, { useEffect, useState } from 'react';
import { getDataFromBackend, postDataToBackend } from '../../../../api/api';

function upload_course_content() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [unitTitle, setUnitTitle] = useState('');
  const [unitContent, setUnitContent] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getDataFromBackend('admin/courses');
        if (response && Array.isArray(response.courses)) {
          setCourses(response.courses);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleUploadContent = async (e) => {
    e.preventDefault();
    try {
      const data = {
        courseId: selectedCourse,
        unitTitle,
        unitContent,
      };
      const response = await postDataToBackend('admin/upload_course_content', data);
      if (response.success) {
        alert('Content uploaded successfully');
        setUnitTitle('');
        setUnitContent('');
      } else {
        console.error('Error uploading content:', response.message);
      }
    } catch (error) {
      console.error('Error uploading content:', error);
    }
  };

  return (
    <div className="col-span-full xl:col-span-10 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Courses</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Course Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Description</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Universities</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {courses.map((course) => (
                <tr key={course._id}>
                  <td className="p-2">
                    <div className="text-gray-800 dark:text-gray-100">{course.name}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-gray-800 dark:text-gray-100">{course.description}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-gray-800 dark:text-gray-100">
                      {course.universities.map((university) => (
                        <div key={university._id}>
                          {university.long_name}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upload Course Content */}
        <div className="bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Upload Course Content</h3>
          <form onSubmit={handleUploadContent}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="course">
                Select Course
              </label>
              <select
                id="course"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="unitTitle">
                Unit Title
              </label>
              <input
                id="unitTitle"
                type="text"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
                value={unitTitle}
                onChange={(e) => setUnitTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="unitContent">
                Unit Content
              </label>
              <textarea
                id="unitContent"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
                value={unitContent}
                onChange={(e) => setUnitContent(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Upload Content
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default upload_course_content;