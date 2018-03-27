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
      color: '#000',
      sizeOfGrid: 20,
      table: []
    };

    this.updateColorState = this.updateColorState.bind(this);
    this.updateTableState = this.updateTableState.bind(this);
  }

  updateMouseStatus (isClicked) {
    this.setState({ mousePressed: isClicked});
  }

  updateColorState(c) {
    this.setState({ color: c.hex });
  }

  updateTableState(t) {
    this.setState({ table: t });
  }

  exportCSVFomGrid() {
    console.log("exportCSVFromGrid");
  }

  importCSVToGrid() {
    console.log("importCSVToGrid");
  }

  render() {
    return (
      <div className="App" onMouseDown={() => {this.updateMouseStatus(true)}} onMouseUp={() => {this.updateMouseStatus(false) }}>
        <Header text="Cross Stitcher" />
        <div className='rowC' >
          <Grid 
            color = { this.state.color }
            mousePressed = { this.state.mousePressed }
            sizeOfGrid = { this.state.sizeOfGrid }
            tableHandler = { this.updateTableState }
            table = { this.state.table }
          />
          <ColorPalette 
            handler = { this.updateColorState } 
            color = { this.state.color }
          />
        </div>
        <SaveButtons 
            // handlerExport = { () => { this.state.grid.exportCSVFromGrid } }
            // handlerImport = { this.state.grid.importCSVToGrid }
        />
      </div>
    );
  }
}

export default App;
