import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Activity = () => {
  // Sample data for the activity graph
  const data = [
    { day: 'Mon', lectures: 3, officeHours: 2, research: 4 },
    { day: 'Tue', lectures: 4, officeHours: 1, research: 3 },
    { day: 'Wed', lectures: 2, officeHours: 3, research: 5 },
    { day: 'Thu', lectures: 3, officeHours: 2, research: 4 },
    { day: 'Fri', lectures: 4, officeHours: 1, research: 3 },
    { day: 'Sat', lectures: 1, officeHours: 0, research: 6 },
    { day: 'Sun', lectures: 0, officeHours: 0, research: 7 },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight="bold">Faculty Activity</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="lectures" stroke="#8884d8" name="Lectures" />
          <Line type="monotone" dataKey="officeHours" stroke="#82ca9d" name="Office Hours" />
          <Line type="monotone" dataKey="research" stroke="#ffc658" name="Research" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Activity;