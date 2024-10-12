import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Checkbox, LinearProgress } from '@mui/material';

const TaskToday = () => {
  const tasks = [
    { id: 1, text: 'Creating Awesome Mobile Apps', done: false, progress: 90 },
    { id: 2, text: 'Read Chapter 5 of History', done: true },
    { id: 3, text: 'Prepare for Science Quiz', done: false },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Task Today</Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} disablePadding>
            <Checkbox checked={task.done} />
            <ListItemText 
              primary={task.text}
              secondary={
                task.progress ? (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate" value={task.progress} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="text.secondary">{`${task.progress}%`}</Typography>
                    </Box>
                  </Box>
                ) : null
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskToday;