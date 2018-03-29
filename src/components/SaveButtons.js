import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class SaveButtons extends Component {
  constructor(props) {
    super(props);

    this.exportGrid = this.exportGrid.bind(this);
  }

  exportGrid() {
    let csvVar = this.props.handlerExport()

    let csvContent = "data:text/csv;charset=utf-8,";
    csvVar.forEach(function (rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    var csvFile = encodeURI(csvContent);

    // Hack for naming files
    var link = document.createElement('a');
    link.download = "cross-stitch.csv";
    link.href = 'data:,' + csvFile;
    link.click();
  }

  render() {
    return (
      <div className="App-header">
        <Button id="magicButton" bsStyle="default" bsSize="large" onClick={this.exportGrid}>
          Export
        </Button>
        <Button id="magicButton" bsStyle="default" bsSize="large" onClick={function refreshPage() {
          window.location.reload();
        }}>
          Erase Design
        </Button>
      </div>
    )
  }
}

export default SaveButtons;
