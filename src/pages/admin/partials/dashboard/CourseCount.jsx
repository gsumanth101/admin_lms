import React, { useEffect, useState } from 'react';
import { getDataFromBackend } from '../../../../api/api';

function CourseCount() {
  const [spocCount, setCourseCount] = useState(0);

  useEffect(() => {
    const fetchCourseCount = async () => {
      try {
        const response = await getDataFromBackend('/admin/course_count');
        if (response && typeof response.count === 'number') {
          setCourseCount(response.count);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching SPOC count:', error);
      }
    };

    fetchCourseCount();
  }, []);

  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-gradient-to-r from-yellow-500 to-yellow-700 shadow-lg rounded-sm border border-gray-200 dark:border-gray-700">
      <div className="p-5">
        <header className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v2h-2V7zm0 4h2v4h-2v-4z"/>
            </svg>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-semibold text-white">Courses</h2>
            <div className="text-3xl font-bold text-white">{spocCount}</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default CourseCount;