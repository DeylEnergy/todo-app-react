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

import TableListTasks from './TableListTasks';

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
        <TableListTasks tasks={tasks} />
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableList);
