import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class SaveButtons extends Component {
  constructor()
  {
    super();

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
  }

  exportGrid() {
    /**
    TODO: 
    * Generate grid into csv variable
    * Save variable to file
    **/
    console.log(this.props.handlerExport())
    console.log("Export");
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
