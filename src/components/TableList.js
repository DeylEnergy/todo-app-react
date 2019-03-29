import React from 'react';
import {
  withStyles,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

const styles = theme => ({
  tableBlock: {
    width: '100%',
    marginTop: '10px',
    overflowX: 'auto'
  },
  table: {
    minWidth: 500
  }
});

function TableList(props) {
  const { classes, tasks } = props;
  return (
    <Paper className={classes.tableBlock}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Importance</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => (
            <TableRow key={task.id}>
              <TableCell align="left">{task.id}</TableCell>
              <TableCell align="left">{task.status}</TableCell>
              <TableCell align="left">{task.name}</TableCell>
              <TableCell align="left">{task.desc}</TableCell>
              <TableCell align="left">{task.due}</TableCell>
              <TableCell align="left">{task.importance}</TableCell>
              <TableCell align="left">{task.tags}</TableCell>
              <TableCell align="center">action buttons</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableList);
