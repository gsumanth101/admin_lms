import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const UpcomingTask = () => {
  const tasks = [
    { id: 1, text: 'Submit Research Paper', date: '2023-06-15' },
    { id: 2, text: 'Group Presentation', date: '2023-06-18' },
    { id: 3, text: 'Final Exam', date: '2023-06-22' },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Upcoming Tasks</Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} disablePadding>
            <ListItemText 
              primary={task.text}
              secondary={`Due: ${task.date}`}
              primaryTypographyProps={{ fontWeight: 'medium' }}
              secondaryTypographyProps={{ color: 'text.secondary' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UpcomingTask;