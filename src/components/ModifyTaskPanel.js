import React from 'react';
import { Drawer, CssBaseline, withStyles } from '@material-ui/core';
import InputForm from './InputForm';

const styles = theme => ({
  content: {},
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
          {/* <AppBar position="fixed" className={classes.appBarTop}>
            <Toolbar className={classes.toolbar}>
              <div>{mutation.todo ? 'Редактировать задачу' : 'Добавить задачу'}</div>
            </Toolbar>
          </AppBar> */}
          <div className={classes.content}>
            <InputForm mutation={mutation} toggleModifyPanel={toggleModifyPanel} />
          </div>
        </React.Fragment>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(ModifyTaskPanel);
