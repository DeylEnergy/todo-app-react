import React from 'react';
import { TableBody, TableRow, TableCell, Chip } from '@material-ui/core';
import StatusSelector from './StatusSelector';
import tags from '../models/tags';

function TableListTasks(props) {
  const { tasks } = props;
  return (
    <TableBody>
      {tasks.map(task => (
        <TableRow key={task.id}>
          <TableCell align="left">{task.id}</TableCell>
          <TableCell align="left">
            <StatusSelector currentStatus={task.status} />
          </TableCell>
          <TableCell align="left">{task.name}</TableCell>
          <TableCell align="left">{task.desc}</TableCell>
          <TableCell align="left">{task.due}</TableCell>
          <TableCell align="left">{task.importance}</TableCell>
          <TableCell align="left">
            {task.tags.map(id => (
              <Chip
                label={tags[id]}
                style={{
                  marginLeft: '3px'
                }}
              />
            ))}
          </TableCell>
          <TableCell align="center">action buttons</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableListTasks;
