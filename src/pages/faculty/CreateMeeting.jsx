import React, { useState } from 'react';
import axios from 'axios';

const MeetingForm = () => {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [section, setSection] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {

      const facultyId = getFacultyId(); 
      const facultyName = getFacultyName(); 

      const response = await axios.post('/api/create-meeting', {
        meetingTitle,
        section,
        facultyId,
        facultyName,
      });

      setSuccessMessage(`Meeting created successfully! Meeting URL: ${response.data.meetingUrl}`);
    } catch (error) {
      setError('Failed to create meeting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create a Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Meeting Title:</label>
          <input
            type="text"
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Section:</label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Meeting'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

// Mock functions to simulate fetching faculty ID and name from authentication system
const getFacultyId = () => {
  // Replace with actual logic to get faculty ID
  return 'faculty123';
};

const getFacultyName = () => {
  // Replace with actual logic to get faculty name
  return 'John Doe';
};

export default MeetingForm;