import React, { Component } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import status from '../models/status';

const ITEM_HEIGHT = 48;

class StatusSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      currentStatus: props.currentStatus
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = newStatus => {
    // check whether status was picked
    if (Number(newStatus) || newStatus === 0) {
      this.setState({ currentStatus: newStatus });
    }
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl, currentStatus } = this.state;
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
            <MenuItem key={option} onClick={this.handleClose.bind(null, id)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </span>
    );
  }
}

export default StatusSelector;
