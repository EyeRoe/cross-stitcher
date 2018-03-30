import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap'

class SaveButtons extends Component {
  constructor(props) {
    super(props);

    this.exportGrid = this.exportGrid.bind(this);
    this.importGrid = this.importGrid.bind(this);
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

<<<<<<< HEAD
  importGrid() {
    // var csvArr = csvStr.split("\n").map(function(row){return row.split(",");});
    // this.props.importCSVToGrid(csvArr)
  }

  handleFiles(e) {
    var reader = new FileReader()
    reader.onload = function () {
      console.log(reader.result)
=======
  importGrid(e) {
    var callback = this.props.handlerImport;
    var reader = new FileReader()
    reader.onload = function() {
>>>>>>> a1099e295c7347aede163622f67345a3824f563a
      const base64 = reader.result.split(',')[1]
      const csvFile = atob(base64)
      const csvText = csvFile.substr(csvFile.indexOf('#')+1)
      var csvArr = csvText.split("\n").map(function(row){return row.split(",");});
      csvArr.pop()
      callback(csvArr)
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  render() {
    return (
      <div className="App-header">
        <Button id="magicButton" bsStyle="default" bsSize="large" onClick={this.exportGrid}>
          Export
        </Button>
<<<<<<< HEAD
=======
        <FormControl
          type="file"
          accept=".csv"
          onChange={this.importGrid}
        />
>>>>>>> a1099e295c7347aede163622f67345a3824f563a
        <Button id="magicButton" bsStyle="default" bsSize="large" onClick={function refreshPage() {
          window.location.reload();
        }}>
          Erase Design
        </Button>
        <FormControl
          className="Hannnah"
          type="file"
          accept=".csv"
          onChange={this.handleFiles}
        />
      </div>
    )
  }
}

export default SaveButtons;
