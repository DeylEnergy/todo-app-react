import React, { Component } from 'react';
import './App.css';
import { CssBaseline, Grid, withStyles, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Header from './components/Header';
import TableList from './components/TableList';

import tasks from './models/tasks';
import ModifyTaskPanel from './components/ModifyTaskPanel';

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
      todos: tasks,
      isModifyPanelOpen: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleModifyPanel = this.toggleModifyPanel.bind(this);
  }

  handleDelete(id) {
    const { todos } = this.state;
    const updateTodos = todos.filter(x => x.id !== id);
    this.setState({ todos: updateTodos });
  }

  toggleModifyPanel() {
    const { isModifyPanelOpen } = this.state;
    this.setState({ isModifyPanelOpen: !isModifyPanelOpen });
  }

  render() {
    const { grid, buttonBlock, button } = this.props.classes;
    const { todos, isModifyPanelOpen } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Grid container direction="column" className={grid}>
          <Typography variant="h5">List of Tasks</Typography>
          <div className={buttonBlock}>
            <Button variant="contained" className={button} onClick={this.toggleModifyPanel}>
              Add Task
            </Button>
          </div>
          <TableList handleDelete={this.handleDelete} tasks={todos} />
          <ModifyTaskPanel isOpen={isModifyPanelOpen} toggleModifyPanel={this.toggleModifyPanel} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
