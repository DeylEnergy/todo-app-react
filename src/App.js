import React, { Component } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
