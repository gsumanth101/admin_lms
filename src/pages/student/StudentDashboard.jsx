import React from 'react';
import { Box, Grid, Paper, Typography, Avatar, LinearProgress } from '@mui/material';
import { FaTasks, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import Activity from './partials/dashboard/Activity';
import TaskToday from './partials/dashboard/TaskToday';
import RunningTask from './partials/dashboard/RunningTask';
import UpcomingTask from './partials/dashboard/UpcomingTask';
import WeekCalendar from './partials/dashboard/WeekCalendar';
import MonthlyMentors from './partials/dashboard/MonthlyMentors';

function StudentDashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f8f9fa' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: '#1e1e2d', color: 'white', borderRadius: 4 }}>
                <RunningTask />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
                <Activity />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
                <MonthlyMentors />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
                <UpcomingTask />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#4318FF', color: 'white', borderRadius: 4, mb: 3 }}>
            <WeekCalendar />
          </Paper>
          <Paper elevation={0} sx={{ p: 3, bgcolor: 'white', borderRadius: 4 }}>
            <TaskToday />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentDashboard;