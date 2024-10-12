import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const RunningTask = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight="bold">Current Course</Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CircularProgress variant="determinate" value={75} size={120} thickness={4} sx={{ color: '#4318FF' }} />
        <Box textAlign="right">
          <Typography variant="h2" fontWeight="bold" sx={{ color: '#4318FF' }}>75%</Typography>
          <Typography variant="subtitle1">Progress</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RunningTask;