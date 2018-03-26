import React, {Component} from 'react';

class Grid extends Component {
  generateTableJSX(size) {
    let table = []

    let mouseOverCallback = (e) => {
      if (this.props.mousePressed) {
        e.target.style.background = this.props.color;
      }
    }

    for (let i=0; i <size; i++) {
      let innerTable = []
      for (let j=0; j < size; j++) {
        innerTable.push(<td onMouseOver = { mouseOverCallback }>{}</td>);
      }
      table.push(<tr>{innerTable}</tr>);
    }
    return table;
  }

  render() {
    return (
      <div className="App-grid" >
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
