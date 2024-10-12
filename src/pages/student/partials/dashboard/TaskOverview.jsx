import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TaskOverview = () => {
  const tasks = [
    { id: 1, name: 'Math Assignment', status: 'Completed', dueDate: '2023-06-10' },
    { id: 2, name: 'History Essay', status: 'In Progress', dueDate: '2023-06-15' },
    { id: 3, name: 'Science Project', status: 'Not Started', dueDate: '2023-06-20' },
  ];

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Task Overview
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TaskOverview;