import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class SaveButtons extends Component {
  render () {
    return (
      <div className="App-header">
        <Button id="magicButton" bsStyle="default" bsSize="large">
          Print
        </Button>
        <Button id="magicButton" bsStyle="default" bsSize="large">
          Import
        </Button>
      </div>
    )
  }
}

export default SaveButtons;
