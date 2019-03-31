import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

// Customize css
const styles = theme => ({
  appBar: {
    backgroundColor: blue[500]
  },
  typography: {
    fontFamily: 'Carter One, cursive',
    fontSize: '23px',
    color: blue[50],
    margin: '0 auto',
    textAlign: 'center'
  }
});

function Header(props) {
  const { appBar, typography } = props.classes;
  return (
    <AppBar position="static">
      <Toolbar className={appBar}>
        <Typography variant="h6" className={typography}>
          ToDo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
