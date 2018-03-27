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

    // Setters
    this.updateColorState = this.updateColorState.bind(this);
    this.updateTableState = this.updateTableState.bind(this);

    // import/export
    this.exportCSVFromGrid = this.exportCSVFromGrid.bind(this);
    this.importCSVToGrid = this.importCSVToGrid.bind(this);
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

  exportCSVFromGrid() {
    console.log("exportCSVFromGrid");
    console.log(this.state.table)
    //console.log(ReactDOM.findDOMNode(this.state.table[0]).style)
    // Create and return CSV
  }

  importCSVToGrid(csv) {
    console.log("importCSVToGrid");
    console.log(this.state.table)
    console.log(csv)
    // unpack csv into table styles
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
            handlerExport = { this.exportCSVFromGrid }
            handlerImport = { this.importCSVToGrid }
        />
      </div>
    );
  }
}

export default App;
