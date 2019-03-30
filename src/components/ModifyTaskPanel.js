import React from 'react';
import { Drawer, CssBaseline, AppBar, Toolbar, withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  content: {
    padding: '80px 10px 0 10px'
  },
  appBarTop: {
    top: 0,
    bottom: 'auto'
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0
  },
  toolbar: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function ModifyTaskPanel(props) {
  const { isOpen, toggleModifyPanel, classes } = props;
  return (
    <div>
      <Drawer open={isOpen} onClose={toggleModifyPanel}>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBarTop}>
            <Toolbar className={classes.toolbar}>
              <div>Add Task</div>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>Some content here</div>
          <AppBar position="fixed" className={classes.appBarBottom}>
            <Toolbar>
              <Button>Save</Button>
              <Button>Cancel</Button>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(ModifyTaskPanel);
