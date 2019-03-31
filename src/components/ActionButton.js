import React from 'react';
import { IconButton } from '@material-ui/core';

function ActionButton(props) {
  const { label, className, children, handleClick, taskId, action } = props;

  const onClick = () => {
    handleClick(taskId, action);
  };

  return (
    <IconButton aria-label={label} className={className} onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default ActionButton;
