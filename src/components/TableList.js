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
  const { classes, tasks, handleClick, handleStatusChange } = props;
  return (
    <Paper className={classes.tableBlock}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>ID</TableCell>
            <TableCell className={classes.cell}>Статус</TableCell>
            <TableCell className={classes.cell}>Название задачи</TableCell>
            <TableCell className={classes.cell}>Описание задачи</TableCell>
            <TableCell className={classes.cell}>Дата выполнения</TableCell>
            <TableCell className={classes.cell}>Важность</TableCell>
            <TableCell className={classes.cell}>Теги</TableCell>
            <TableCell className={classes.cell}>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableListTasks
          handleClick={handleClick}
          handleStatusChange={handleStatusChange}
          tasks={tasks}
        />
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableList);
