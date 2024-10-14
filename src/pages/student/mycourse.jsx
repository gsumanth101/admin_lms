import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { getDataFromBackend } from '../../api/api';

const Mycourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        const data = await getDataFromBackend('/student/my-courses', token);
        setCourses(data.courses);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course._id}>
            <Link to={`/course/${course._id}`} style={{ textDecoration: 'none' }}>
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