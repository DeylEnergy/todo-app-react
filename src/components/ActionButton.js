import React from 'react';
import { IconButton } from '@material-ui/core';

function ActionButton(props) {
  const { label, className, children, handleClick, taskId, action, fireDelete } = props;

  const onClick = () => {
    if (action === 'delete') {
      fireDelete(taskId);
      setTimeout(() => {
        handleClick(taskId, action);
      }, 2000);
    } else {
      handleClick(taskId, action);
    }
  };

  return (
    <IconButton aria-label={label} className={className} onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default ActionButton;
