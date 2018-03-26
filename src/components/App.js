import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';
import ColorPalette from './ColorPalette';
import SaveButtons from './SaveButtons';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Cross Stitcher" />
        {/* <p className="App-intro">
          Welcome to cross stitcher
        </p> */}        
        <div className='rowC'>
          <Grid />
          <ColorPalette />
        </div>
        <SaveButtons />
      </div>
    );
  }
}

export default App;
