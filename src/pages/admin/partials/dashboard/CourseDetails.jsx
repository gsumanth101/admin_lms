import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataFromBackend } from '../../../../api/api';

function CourseDetails() {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [unitName, setUnitName] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedStream, setSelectedStream] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await getDataFromBackend(`admin/courses/${id}`);
        if (response && response.course) {
          setCourseDetails(response.course);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    const fetchUniversities = async () => {
      try {
        const response = await getDataFromBackend('admin/org');
        if (response && response.universities) {
          setUniversities(response.universities);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchCourseDetails();
    fetchUniversities();
  }, [id]);

  const handleAddUnit = async () => {
    const formData = new FormData();
    formData.append('unitName', unitName);
    formData.append('pdfFile', pdfFile);

    try {
      const response = await fetch(`admin/courses/${id}/add-unit`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Unit added successfully');
        // Reset the form
        setUnitName('');
        setPdfFile(null);
        setSelectedUniversity('');
        setSelectedStream('');
        // Optionally, fetch the updated course details
        fetchCourseDetails();
      } else {
        console.error('Failed to add unit');
      }
    } catch (error) {
      console.error('Error adding unit:', error);
    }
  };

  const handleAddUniversity = async () => {
    const universityName = prompt('Enter the name of the university:');
    if (!universityName) return;

    try {
      const response = await fetch('admin/org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ long_name: universityName }),
      });
      if (response.ok) {
        console.log('University added successfully');
        // Fetch the updated list of universities
        fetchUniversities();
      } else {
        console.error('Failed to add university');
      }
    } catch (error) {
      console.error('Error adding university:', error);
    }
  };

  const renderDetails = () => {
    return (
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 mt-4">Course Details</h3>
        <p>{courseDetails.details}</p>
      </div>
    );
  };

  const renderAddUnit = () => {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Add Unit</h3>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="unitName">
            Unit Name
          </label>
          <input
            id="unitName"
            type="text"
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
            placeholder="Enter unit name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="pdfFile">
            Upload PDF
          </label>
          <input
            id="pdfFile"
            type="file"
            onChange={(e) => setPdfFile(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="university">
            Select University
          </label>
          <select
            id="university"
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a university</option>
            {universities.map((university) => (
              <option key={university._id} value={university._id}>
                {university.long_name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="stream">
            Select Stream
          </label>
          <select
            id="stream"
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a stream</option>
            <option value="AIML">AIML</option>
            <option value="CSF">CSF</option>
            <option value="DS">DS</option>
            <option value="IOT">IOT</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleAddUnit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Unit with PDF
          </button>
        </div>
      </div>
    );
  };

  const renderUniversitiesAndStreams = () => (
    <div>
      <h3 className="font-semibold text-gray-800 dark:text-gray-100 mt-4">Universities and Streams</h3>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="university">
          Select University
        </label>
        <select
          id="university"
          value={selectedUniversity}
          onChange={(e) => setSelectedUniversity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a university</option>
          {universities.map((university) => (
            <option key={university._id} value={university._id}>
              {university.long_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="stream">
          Select Stream
        </label>
        <select
          id="stream"
          value={selectedStream}
          onChange={(e) => setSelectedStream(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a stream</option>
          <option value="AIML">AIML</option>
          <option value="CSF">CSF</option>
          <option value="DS">DS</option>
          <option value="IOT">IOT</option>
        </select>
      </div>
      <div className="mb-4">
        <button
          onClick={handleAddUniversity}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add University
        </button>
      </div>
      {/* Add logic to display streams per university */}
    </div>
  );

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{courseDetails.name}</h2>
        <p>{courseDetails.description}</p>
        <div className="mt-4">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`text-gray-500 dark:text-gray-300 py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'details' ? 'border-indigo-500 text-indigo-600' : 'border-transparent'}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button
                className={`text-gray-500 dark:text-gray-300 py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'addUnit' ? 'border-indigo-500 text-indigo-600' : 'border-transparent'}`}
                onClick={() => setActiveTab('addUnit')}
              >
                Add Unit with PDF
              </button>
              <button
                className={`text-gray-500 dark:text-gray-300 py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'universities' ? 'border-indigo-500 text-indigo-600' : 'border-transparent'}`}
                onClick={() => setActiveTab('universities')}
              >
                Universities and Streams
              </button>
            </nav>
          </div>
          <div className="mt-4">
            {activeTab === 'details' && renderDetails()}
            {activeTab === 'addUnit' && renderAddUnit()}
            {activeTab === 'universities' && renderUniversitiesAndStreams()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;