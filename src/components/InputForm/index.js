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
  name: yupString('Введите название').required('Название обязательно')
});

// accumulator of all tags
const allTags = {
  collection: [],
  put(update) {
    this.collection = update;
  }
};

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: false
    };
    this.setTags = allTags.put.bind(allTags);
  }

  toggleProgressbar() {
    const { progress } = this.state;
    this.setState({ progress: !progress });
  }

  render() {
    const classes = this.props;
    const { mutation, toggleModifyPanel } = this.props;
    // 'mutation' prop comes from App.js
    const { progress } = this.state;
    let values;
    if (mutation.todo) {
      const { todo } = mutation;
      values = { ...todo, importance: `${todo.importance}` };
    } else {
      values = { name: '', desc: '', due: '', status: 0, importance: '' };
    }

    const handleSubmit = vals => {
      this.toggleProgressbar();
      setTimeout(() => {
        mutation.onSubmit({ ...vals, tags: allTags.collection }); // it invokes descedent's method
      }, 2000);
    };
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper} />
          <Formik
            render={props => (
              <Form
                {...props}
                toggleModifyPanel={toggleModifyPanel}
                mutation={mutation}
                setTags={this.setTags}
                progress={progress}
              />
            )}
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
