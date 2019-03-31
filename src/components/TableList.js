import React from 'react';
import { withStyles, Paper, Table, TableHead, TableRow, TableCell } from '@material-ui/core';

import TableListTasks from './TableListTasks';

const styles = theme => ({
  tableBlock: {
    width: '100%',
    marginTop: '10px',
    overflowX: 'auto'
  },
  table: {
    minWidth: 1050
  },
  cell: {
    paddingRight: '4px'
  }
});

function TableList(props) {
  const { classes, tasks, handleClick } = props;
  return (
    <Paper className={classes.tableBlock}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>ID</TableCell>
            <TableCell className={classes.cell}>Status</TableCell>
            <TableCell className={classes.cell}>Name</TableCell>
            <TableCell className={classes.cell}>Description</TableCell>
            <TableCell className={classes.cell}>Due</TableCell>
            <TableCell className={classes.cell}>Importance</TableCell>
            <TableCell className={classes.cell}>Tags</TableCell>
            <TableCell className={classes.cell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableListTasks handleClick={handleClick} tasks={tasks} />
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableList);
