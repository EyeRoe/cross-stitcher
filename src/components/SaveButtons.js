import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class SaveButtons extends Component {
  constructor(props)
  {
    super(props);

    this.importGrid = this.importGrid.bind(this);
    this.exportGrid = this.exportGrid.bind(this);
  }

  importGrid() {
    /**
    TODO: 
    * Get a file explorer window to open a file. 
    * Save file to variable
    * Extract variable to grid
    **/
    console.log("Import");
    this.props.handlerImport()
  }

  exportGrid() {
    /**
    TODO: 
    * Generate grid into csv variable
    * Save variable to file
    **/
    console.log("Export");
    this.props.handlerExport()
  }

  render () {
    return (
      <div className="App-header">
        <Button id="magicButton" bsStyle="default" bsSize="large" onClick={ this.importGrid }>
          Import
        </Button>
        <Button id="magicButton" bsStyle="default" bsSize="large" onClick={ this.exportGrid }>
          Export
        </Button>
      </div>
    )
  }
}

export default SaveButtons;
