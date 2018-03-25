import React, { Component } from 'react';

class Grid extends Component {
  generateTableJSX(size) {
    let table = []
    for (let i=0; i <size; i++) {
      let innerTable = []
      for (let j=0; j < size; j++) {
        innerTable.push(<td>{j}</td>);
      }
      table.push(<tr>{innerTable}</tr>);
    }
    return table;
  }
  render() {
    return (
      <div className="App-grid">
        <table>
          {this.generateTableJSX(40)}
        </table>
      </div>
    )
  }

}

export default Grid;