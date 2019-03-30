import React from 'react';
import { IconButton } from '@material-ui/core';

function ActionButton(props) {
  const { label, className, children, handleClick, taskId } = props;

  const onClick = () => {
    handleClick(taskId);
  };

  return (
    <IconButton aria-label={label} className={className} onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default ActionButton;
