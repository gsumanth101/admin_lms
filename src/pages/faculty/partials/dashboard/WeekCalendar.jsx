import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const WeekCalendar = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight="bold">Week Calendar</Typography>
      <Typography variant="h5" gutterBottom fontWeight="bold">{`${currentMonth} ${currentYear}`}</Typography>
      <Grid container spacing={1} justifyContent="space-between">
        {days.map((day, index) => (
          <Grid item key={index}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 1, 
                textAlign: 'center',
                bgcolor: index === 6 ? 'rgba(255,255,255,0.2)' : 'transparent',
                borderRadius: 2
              }}
            >
              <Typography variant="body2">{day}</Typography>
              <Typography variant="h6" fontWeight="bold">{index + 6}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeekCalendar;