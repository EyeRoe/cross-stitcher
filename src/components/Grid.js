import React, {Component} from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);

    // Setup grid
    this.props.tableHandler(this.generateTableJSX())
  }

  generateTableJSX() {
    let table = []

    let overCallback = (e) => {
      if (this.props.mousePressed) {
        e.target.style.background = this.props.color;
      }
    }

    let clickCallback = (e) => {
      e.target.style.background = this.props.color;
    }

    for (let i=0; i < this.props.sizeOfGrid; i++) {
      let innerTable = []
      for (let j=0; j < this.props.sizeOfGrid; j++) {
        innerTable.push(<td onMouseOver = { overCallback } onMouseDown = { clickCallback } key={j}></td>);
      }
      table.push(<tr key={i}>{innerTable}</tr>);
    }
    return table;
  }

  render() {
    return (
      <div className="App-grid" >
        <table>
          <tbody>
            { this.props.table }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Grid;
