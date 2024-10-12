import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Activity = () => {
  const data = [
    { name: 'S', value: 1 },
    { name: 'M', value: 2 },
    { name: 'T', value: 1.5 },
    { name: 'W', value: 3 },
    { name: 'T', value: 2.5 },
    { name: 'F', value: 2 },
    { name: 'S', value: 2.3 },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Activity</Typography>
      <Typography variant="subtitle2" gutterBottom>This Week</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis hide={true} />
          <Line type="monotone" dataKey="value" stroke="#4318FF" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Activity;