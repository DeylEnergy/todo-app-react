import React, { Component } from 'react';
import './App.css';
import { CssBaseline, Grid, withStyles, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Header from './components/Header';
import TableList from './components/TableList';

import tasks from './models/tasks';

const styles = theme => ({
  grid: {
    padding: '10px 20px 0 20px'
  },
  buttonBlock: {
    textAlign: 'right'
  },
  button: {
    backgroundColor: grey[100],
    color: grey[800]
  }
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks
    };
  }
  render() {
    const { grid, buttonBlock, button } = this.props.classes;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Grid container direction="column" className={grid}>
          <Typography variant="h5">List of Tasks</Typography>
          <div className={buttonBlock}>
            <Button variant="contained" className={button}>
              Add Task
            </Button>
          </div>
          <TableList tasks={tasks} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
