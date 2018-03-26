import React, { Component } from 'react';
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
      color: '#fff'
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
      <div className="App">
        <Header text="Cross Stitcher" />
        <div className='rowC' onMouseDown={() => {this.updateMouseStatus(true)}} onMouseUp={() => {this.updateMouseStatus(false) }}>
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
