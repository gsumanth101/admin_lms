import React from 'react';
import { Box, Typography, Avatar, Grid, Button } from '@mui/material';

const TopStudents = () => {
  const students = [
    { id: 1, name: 'Alice Johnson', course: 'Advanced Mathematics', grade: 'A', performance: 95 },
    { id: 2, name: 'Bob Smith', course: 'Physics 101', grade: 'A-', performance: 92 },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight="bold">Top Performing Students</Typography>
      <Grid container spacing={2}>
        {students.map((student) => (
          <Grid item key={student.id} xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ width: 48, height: 48, bgcolor: '#4318FF', color: 'white', mr: 2 }}>
                {student.name[0]}
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">{student.name}</Typography>
                <Typography variant="body2" color="text.secondary">{student.course}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">Grade: <strong>{student.grade}</strong></Typography>
              <Typography variant="body2">Performance: <strong>{student.performance}%</strong></Typography>
            </Box>
            <Button variant="outlined" fullWidth color="primary" sx={{ textTransform: 'none' }}>
              View Details
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopStudents;