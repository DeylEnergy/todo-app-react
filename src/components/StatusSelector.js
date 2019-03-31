import React, { Component } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import status from '../models/status';

const ITEM_HEIGHT = 48;

class StatusSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (taskId, newStatus) => {
    // check whether status was picked
    if (Number(newStatus) || newStatus === 0) {
      const { handleStatusChange } = this.props;
      handleStatusChange(taskId, newStatus);
    }
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { taskId, currentStatus } = this.props;
    const open = Boolean(anchorEl);
    return (
      <span>
        {status[currentStatus]}
        <IconButton
          aria-label="more"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {status.map((option, id) => (
            <DropItem key={option} taskId={taskId} id={id} handleClose={this.handleClose}>
              {option}
            </DropItem>
          ))}
        </Menu>
      </span>
    );
  }
}

function DropItem(props) {
  const { taskId, id, children, handleClose } = props;
  const onClick = () => {
    handleClose(taskId, id);
  };
  return <MenuItem onClick={onClick}>{children}</MenuItem>;
}

export default StatusSelector;
