import React from 'react';
import { Box, Typography, Avatar, Grid, Button } from '@mui/material';

const MonthlyMentors = () => {
  const mentors = [
    { id: 1, name: 'Curious George', subject: 'UI/UX Design', tasks: 40, rating: 4.7, reviews: 750 },
    { id: 2, name: 'Abraham Lincoln', subject: '3D Design', tasks: 32, rating: 4.9, reviews: 510 },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Monthly Mentors</Typography>
      <Grid container spacing={3}>
        {mentors.map((mentor) => (
          <Grid item key={mentor.id} xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={1}>
              <Avatar sx={{ width: 48, height: 48, mr: 2, bgcolor: '#e0e0e0', color: '#333' }}>{mentor.name[0]}</Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">{mentor.name}</Typography>
                <Typography variant="body2" color="text.secondary">{mentor.subject}</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Typography variant="body2">{mentor.tasks} Task</Typography>
              <Typography variant="body2">⭐ {mentor.rating} ({mentor.reviews} Reviews)</Typography>
            </Box>
            <Button variant="outlined" fullWidth color={mentor.id === 1 ? 'primary' : 'secondary'}>
              {mentor.id === 1 ? '+ Follow' : 'Followed'}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MonthlyMentors;