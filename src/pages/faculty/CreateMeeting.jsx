// src/pages/faculty/CreateMeeting.jsx

import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress, Alert, Box } from '@mui/material';
import { createMeeting } from '../../api/api';

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

      const response = await createMeeting(meetingTitle, section, facultyId, facultyName);

      setSuccessMessage(`Meeting created successfully! Meeting URL: ${response.meetingUrl}`);
    } catch (error) {
      setError('Failed to create meeting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create a Meeting
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Meeting Title"
            variant="outlined"
            fullWidth
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Section"
            variant="outlined"
            fullWidth
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} />}
        >
          {loading ? 'Creating...' : 'Create Meeting'}
        </Button>
      </form>

      {error && (
        <Box mt={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      {successMessage && (
        <Box mt={2}>
          <Alert severity="success">{successMessage}</Alert>
        </Box>
      )}
    </Box>
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