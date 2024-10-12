import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';

const TaskToday = () => {
  const tasks = [
    { id: 1, text: 'Lecture: Advanced Algorithms', done: false },
    { id: 2, text: 'Office Hours', done: true },
    { id: 3, text: 'Research Meeting', done: false },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight="bold">Today's Schedule</Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} disablePadding>
            <Checkbox 
              checked={task.done} 
              sx={{
                color: '#4318FF',
                '&.Mui-checked': {
                  color: '#4318FF',
                },
              }}
            />
            <ListItemText 
              primary={task.text}
              primaryTypographyProps={{ fontWeight: task.done ? 'normal' : 'medium' }}
              sx={{ textDecoration: task.done ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskToday;