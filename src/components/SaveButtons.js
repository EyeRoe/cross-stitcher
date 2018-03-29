import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap'

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

  importGrid() {
    // var csvArr = csvStr.split("\n").map(function(row){return row.split(",");});
    // this.props.importCSVToGrid(csvArr)
  }
  
  handleFiles(e) {
    var reader = new FileReader()
    reader.onload = function() {
      console.log(reader.result)
      const base64 = reader.result.split(',')[1]
      console.log(atob(base64))
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render() {
    return (
      <div className="App-header">
        <Button id="magicButton" bsStyle="default" bsSize="large" onClick={this.exportGrid}>
          Export
        </Button>
        <FormControl
          type="file"
          accept=".csv"
          onChange={this.handleFiles}
        />
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
