import React, { Component } from 'react';
import './App.css';
import { CssBaseline, Grid, withStyles, Typography, Button } from '@material-ui/core';
import DoneAll from '@material-ui/icons/DoneAll';
import { grey } from '@material-ui/core/colors';
import Header from './components/Header';
import TableList from './components/TableList';

import tasks from './models/tasks';
import ModifyTaskPanel from './components/ModifyTaskPanel';
import CustomSnackbar from './components/CustomSnackbar';

const styles = theme => ({
  grid: {
    padding: '10px 20px 0 20px'
  },
  typography: {
    paddingTop: '20px',
    color: '#888'
  },
  buttonBlock: {
    textAlign: 'right'
  },
  button: {
    backgroundColor: grey[100],
    color: grey[800]
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    color: '#888',
    fontSize: '15px'
  }
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: tasks,
      nextId: tasks.length + 1,
      todo: null, // nothing to edit
      isModifyPanelOpen: false,
      isSnackbarOpen: false
    };
    this.handleMutateBtnClick = this.handleMutateBtnClick.bind(this);
    this.toggleModifyPanel = this.toggleModifyPanel.bind(this);
    this.taskMutation = this.taskMutation.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  handleMutateBtnClick(id, action) {
    if (action === 'delete') {
      const { todos } = this.state;
      const updateTodos = todos.filter(x => x.id !== id);
      this.setState({ todos: updateTodos });
    } else if (action === 'edit') {
      const { todos } = this.state;
      const selectTodo = todos.filter(todo => todo.id === id)[0];
      this.setState({
        todo: selectTodo,
        isModifyPanelOpen: true
      });
    }
  }

  toggleModifyPanel(fields) {
    if (Array.isArray(fields)) {
      const ifFieldsWereModified = fields.filter(x => x.length > 0);
      if (ifFieldsWereModified.length) {
        // open snackbar
        setTimeout(() => {
          this.setState({
            isSnackbarOpen: true
          });
        }, 300);
      }
    }
    const { isModifyPanelOpen } = this.state;
    this.setState({ isModifyPanelOpen: !isModifyPanelOpen, todo: null });
  }

  taskMutation(task) {
    const { todo } = this.state;
    if (todo) {
      // if we want to edit todo
      const { id } = todo;
      const { todos } = this.state;
      const updateTodos = todos.map(duty => {
        if (duty.id === id) {
          return { ...task, importance: parseInt(task.importance, 10) };
        }
        return duty;
      });

      this.setState({
        todos: updateTodos,
        todo: null,
        isModifyPanelOpen: false
      });
    } else {
      const { nextId } = this.state;
      const newTask = {
        ...task,
        id: nextId,
        importance: parseInt(task.importance, 10)
      };

      this.setState(state => {
        const updateTodos = [...state.todos, newTask];
        return {
          ...state,
          todos: updateTodos,
          nextId: state.nextId + 1,
          isModifyPanelOpen: false
        };
      });
    }
  }

  handleStatus(todoId, statusId) {
    const { todos } = this.state;
    const updateTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, status: statusId };
      }
      return todo;
    });
    this.setState({
      todos: updateTodos
    });
  }

  handleSnackbarClose(event, reason) {
    if (reason === 'clickaway') return;
    this.setState({
      isSnackbarOpen: false
    });
  }

  render() {
    const { classes } = this.props;
    const { grid, buttonBlock, button, typography, footer } = classes;
    const { todos, isModifyPanelOpen, todo, isSnackbarOpen } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Grid container direction="column" className={grid}>
          <Typography variant="h5" className={typography}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  padding: '2px 5px 0 0',
                  color: '#bbdefb'
                }}
              >
                <DoneAll />
              </div>
              <div>List of Tasks</div>
            </div>
          </Typography>
          <div className={buttonBlock}>
            <Button variant="contained" className={button} onClick={this.toggleModifyPanel}>
              Add Task
            </Button>
          </div>
          <TableList
            handleClick={this.handleMutateBtnClick}
            handleStatusChange={this.handleStatus}
            tasks={todos}
          />
          <ModifyTaskPanel
            isOpen={isModifyPanelOpen}
            toggleModifyPanel={this.toggleModifyPanel}
            mutation={{ todo, onSubmit: this.taskMutation }}
          />
          <div className={footer}>
            Made by
            <a
              href="https://deylenergy.github.io/portfolio"
              style={{
                color: '#2196f3',
                textDecoration: 'none',
                paddingLeft: '5px'
              }}
            >
              Deyl Energy
            </a>
          </div>
        </Grid>
        <CustomSnackbar
          open={isSnackbarOpen}
          handleClose={this.handleSnackbarClose}
          message="You closed the drawer without save"
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
