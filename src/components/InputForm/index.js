import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import { object as yupObject, string as yupString } from 'yup';
import Form from './form';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`,
    container: {
      maxWidth: '200px'
    }
  }
});

const validationSchema = yupObject({
  name: yupString('Enter a name').required('Name is required')
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    const { mutation, toggleModifyPanel } = this.props;
    // 'mutation' prop comes from App.js
    let values;
    if (mutation.todo) {
      const { todo } = mutation;
      values = { ...todo, importance: `${todo.importance}` };
    } else {
      values = { name: '', desc: '', due: '', status: 0, importance: '' };
    }

    const handleSubmit = vals => {
      mutation.onSubmit(vals); // it invokes descedent's method
    };
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper} />
          <Formik
            render={props => <Form {...props} toggleModifyPanel={toggleModifyPanel} />}
            validationSchema={validationSchema}
            initialValues={values}
            onSubmit={handleSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
