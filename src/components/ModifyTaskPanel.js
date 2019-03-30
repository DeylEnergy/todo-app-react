import React from 'react';
import { Drawer } from '@material-ui/core';

function ModifyTaskPanel(props) {
  const { isOpen, toggleModifyPanel } = props;
  return (
    <div>
      <Drawer open={isOpen} onClose={toggleModifyPanel}>
        content of drawer
      </Drawer>
    </div>
  );
}

export default ModifyTaskPanel;
