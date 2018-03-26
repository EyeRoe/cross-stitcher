import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Header from './Header';
import Grid from './Grid';
import ColorPalette from './ColorPalette';
import SaveButtons from './SaveButtons';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mousePressed: false,
      color: '#000'
    };

    this.updateState = this.updateState.bind(this);
  }

  updateMouseStatus (isClicked) {
    this.setState({ mousePressed: isClicked});
  }

  updateState(c) {
    this.setState({ color: c.hex });
  }

  render() {
    return (
      <div className="App" onMouseDown={() => {this.updateMouseStatus(true)}} onMouseUp={() => {this.updateMouseStatus(false) }}>
        <Header text="Cross Stitcher" />
        <div className='rowC' >
          <Grid 
            color = { this.state.color }
            mousePressed = { this.state.mousePressed }
          />
          <ColorPalette 
            handler = { this.updateState } 
            color = { this.state.color }
          />
        </div>
        <SaveButtons />
      </div>
    );
  }
}

export default App;
