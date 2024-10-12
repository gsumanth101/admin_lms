import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, name: 'Mathematics', description: 'Algebra and Geometry', faculty: 'Dr. Smith', pendingAssignments: 2 },
  { id: 2, name: 'Science', description: 'Physics and Chemistry', faculty: 'Dr. Johnson', pendingAssignments: 0 },
  { id: 3, name: 'History', description: 'World History', faculty: 'Dr. Brown', pendingAssignments: 1 },
  { id: 4, name: 'Art', description: 'Painting and Sculpture', faculty: 'Ms. Davis', pendingAssignments: 3 },
  // Add more courses as needed
];

const Mycourse = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: 'hidden',
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#3f51b5',
                    color: '#ffffff',
                    padding: 2,
                    flex: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {course.name}
                  </Typography>
                  <Typography variant="body2">
                    {course.description}
                  </Typography>
                  <Typography variant="body2">
                    {course.faculty}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    padding: 2,
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {course.pendingAssignments > 0 ? (
                    <Typography variant="body2" sx={{ color: '#f44336' }}>
                      {course.pendingAssignments} assignments pending
                    </Typography>
                  ) : (
                    <Typography variant="body2" sx={{ color: '#4caf50' }}>
                      No pending assignments
                    </Typography>
                  )}
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Mycourse;