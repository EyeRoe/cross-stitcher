import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';
import '../App.css';
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Cross Stitcher" />
        <p className="App-intro">
          {/* Welcome to cross stitcher */}
        </p>
        <Grid />
      </div>
    );
  }
}

export default App;
