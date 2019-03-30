import React from 'react';
import { TableBody, TableRow, TableCell, Chip, withStyles, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StatusSelector from './StatusSelector';
import tags from '../models/tags';
import importance from '../models/importance';

const styles = theme => ({
  cell: {
    paddingRight: '4px'
  },
  icon: {
    padding: '6px'
  }
});

function TableListTasks(props) {
  const { tasks, classes } = props;
  return (
    <TableBody>
      {tasks.map(task => (
        <TableRow key={task.id}>
          <TableCell className={classes.cell} align="left">
            {task.id}
          </TableCell>
          <TableCell className={classes.cell} align="left">
            <StatusSelector currentStatus={task.status} />
          </TableCell>
          <TableCell className={classes.cell} align="left">
            {task.name}
          </TableCell>
          <TableCell className={classes.cell} align="left">
            {task.desc}
          </TableCell>
          <TableCell className={classes.cell} align="left">
            {task.due}
          </TableCell>
          <TableCell className={classes.cell} align="left">
            {importance[task.importance]}
          </TableCell>
          <TableCell className={classes.cell} align="left">
            {task.tags.map(id => (
              <Chip
                key={id}
                label={tags[id]}
                style={{
                  marginLeft: '3px'
                }}
              />
            ))}
          </TableCell>
          <TableCell align="left">
            <IconButton aria-label="Edit" className={classes.icon}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Delete" className={classes.icon}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default withStyles(styles)(TableListTasks);
