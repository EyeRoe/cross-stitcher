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
    console.log("Import");
  }

  exportGrid() {
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
