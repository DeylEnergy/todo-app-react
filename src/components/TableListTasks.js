import React from 'react';
import { TableBody, TableRow, TableCell, Chip, withStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StatusSelector from './StatusSelector';
import ActionButton from './ActionButton';
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
  const { tasks, classes, handleClick } = props;
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
            <ActionButton
              label="Edit"
              className={classes.icon}
              taskId={task.id}
              action="edit"
              handleClick={handleClick}
            >
              <EditIcon fontSize="small" />
            </ActionButton>
            <ActionButton
              label="Delete"
              className={classes.icon}
              taskId={task.id}
              action="delete"
              handleClick={handleClick}
            >
              <DeleteIcon fontSize="small" />
            </ActionButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default withStyles(styles)(TableListTasks);
