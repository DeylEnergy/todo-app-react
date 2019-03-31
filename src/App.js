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
      nextId: tasks.length + 1,
      todo: null, // nothing to edit
      isModifyPanelOpen: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleModifyPanel = this.toggleModifyPanel.bind(this);
    this.taskMutation = this.taskMutation.bind(this);
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

  taskMutation(task) {
    const { nextId } = this.state;
    const newTask = {
      ...task,
      id: nextId,
      importance: parseInt(task.importance, 10),
      tags: [0] // for later implementation
    };

    this.setState(state => {
      const updateTodos = [...state.todos, newTask];
      return {
        ...state,
        todos: updateTodos
      };
    });
  }

  render() {
    const { grid, buttonBlock, button } = this.props.classes;
    const { todos, isModifyPanelOpen, todo } = this.state;
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
          <ModifyTaskPanel
            isOpen={isModifyPanelOpen}
            toggleModifyPanel={this.toggleModifyPanel}
            mutation={{ todo, onSubmit: this.taskMutation }}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
