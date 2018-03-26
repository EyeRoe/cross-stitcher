import React from 'react';
import ColorState from './ColorState'

class Grid extends ColorState {
  generateTableJSX(size) {
    let table = []

    let callback = () => {
      //this.background = ColorPalette.selectedColor;
      console.log(this.state.color + "--" + this.background);
    };

    for (let i=0; i <size; i++) {
      let innerTable = []
      for (let j=0; j < size; j++) {
        innerTable.push(<td onClick={callback}>{}</td>);
      }
      table.push(<tr>{innerTable}</tr>);
    }
    return table;
  }

  render() {
    return (
      <div className="App-grid">
        <table>
          {this.generateTableJSX(20)}
        </table>
      </div>
    )
  }

  setGridColor() {

  }
}

export default Grid;
