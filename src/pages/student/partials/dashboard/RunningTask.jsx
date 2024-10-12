import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const RunningTask = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Running Task</Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CircularProgress variant="determinate" value={65} size={100} thickness={4} sx={{ color: '#4318FF' }} />
        <Box>
          <Typography variant="h2" fontWeight="bold">65</Typography>
          <Typography variant="subtitle1">100 Task</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RunningTask;