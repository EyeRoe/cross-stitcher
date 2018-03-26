import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class SaveButtons extends Component {
  render () {
    return (
      <div className="App-header">
        <Button bsStyle="primary" bsSize="large">
          Print
        </Button>
        <Button bsStyle="primary" bsSize="large">
          Import
        </Button>
      </div>
    )
  }
}

export default SaveButtons;
