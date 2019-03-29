import React, { Component } from 'react';
import './App.css';
import { CssBaseline, Grid, withStyles, Typography } from '@material-ui/core';
import Header from './components/Header';

const styles = theme => ({
  grid: {
    padding: '10px 20px 0 20px'
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { grid } = this.props.classes;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Grid container direction="column" className={grid}>
          <Typography variant="h5">List of Tasks</Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
