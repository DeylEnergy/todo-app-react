import React, { Component } from 'react';
import {
  TableBody,
  TableRow,
  TableCell,
  Chip,
  withStyles,
  CircularProgress
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StatusSelector from './StatusSelector';
import ActionButton from './ActionButton';
import tags from '../models/tags';
import importance from '../models/importance';
import toHumanDate from '../helpers/time';

const styles = theme => ({
  cell: {
    paddingRight: '4px'
  },
  icon: {
    padding: '6px'
  }
});

class TableListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTrash: []
    };
    this.fireDelete = this.fireDelete.bind(this);
  }

  fireDelete(id) {
    const { idTrash } = this.state;
    this.setState({
      idTrash: [...idTrash, id]
    });

    // delete from array after 7000 ms for visual effect
    setTimeout(() => {
      this.setState({
        idTrash: []
      });
    }, 7000);
  }

  toDelete(id) {
    const { idTrash } = this.state;
    return idTrash.indexOf(id) > -1;
  }

  render() {
    const { tasks, classes, handleClick, handleStatusChange } = this.props;

    return (
      <TableBody>
        {tasks.map(task => (
          <TableRow key={task.id}>
            <TableCell className={classes.cell} align="left">
              {task.id}
            </TableCell>
            <TableCell className={classes.cell} align="left">
              <StatusSelector
                currentStatus={task.status}
                taskId={task.id}
                handleStatusChange={handleStatusChange}
              />
            </TableCell>
            <TableCell className={classes.cell} align="left">
              {task.name}
            </TableCell>
            <TableCell className={classes.cell} align="left">
              {task.desc}
            </TableCell>
            <TableCell className={classes.cell} align="left">
              {toHumanDate(task.due)}
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
                fireDelete={this.fireDelete}
              >
                <DeleteIcon
                  fontSize="small"
                  style={{ display: !this.toDelete(task.id) ? 'block' : 'none' }}
                />
                <CircularProgress
                  size={20}
                  style={{ display: this.toDelete(task.id) ? 'block' : 'none' }}
                />
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

export default withStyles(styles)(TableListTasks);
