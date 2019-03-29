import React from 'react';
import { TableBody, TableRow, TableCell, Chip, withStyles } from '@material-ui/core';
import StatusSelector from './StatusSelector';
import tags from '../models/tags';
import importance from '../models/importance';

const styles = theme => ({
  cell: {
    paddingRight: '4px'
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

export default withStyles(styles)(TableListTasks);
