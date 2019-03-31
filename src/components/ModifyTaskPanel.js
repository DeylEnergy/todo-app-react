import React from 'react';
import { Drawer, CssBaseline, AppBar, Toolbar, withStyles } from '@material-ui/core';
import InputForm from './InputForm';

const styles = theme => ({
  content: {
    padding: '80px 10px 0 10px'
  },
  appBarTop: {
    top: 0,
    bottom: 'auto'
  },
  toolbar: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function ModifyTaskPanel(props) {
  const { isOpen, toggleModifyPanel, classes, mutation } = props;
  return (
    <div>
      <Drawer open={isOpen} onClose={toggleModifyPanel}>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBarTop}>
            <Toolbar className={classes.toolbar}>
              <div>{mutation.todo ? 'Edit Task' : 'Add Task'}</div>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <InputForm mutation={mutation} />
          </div>
        </React.Fragment>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(ModifyTaskPanel);
