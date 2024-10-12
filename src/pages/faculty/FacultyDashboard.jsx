import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import RunningTask from './partials/dashboard/RunningTask';
import Activity from './partials/dashboard/Activity';
import TopStudents from './partials/dashboard/TopStudents';
import UpcomingTask from './partials/dashboard/UpcomingTask';
import WeekCalendar from './partials/dashboard/WeekCalendar';
import TaskToday from './partials/dashboard/TaskToday';

function FacultyDashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f8f9fa' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: '#1e1e2d', color: 'white', borderRadius: 4 }}>
                <RunningTask />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
                <TopStudents />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
                <Activity />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
                <UpcomingTask />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, bgcolor: '#4318FF', color: 'white', borderRadius: 4, mb: 3 }}>
            <WeekCalendar />
          </Paper>
          <Paper elevation={3} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
            <TaskToday />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FacultyDashboard;