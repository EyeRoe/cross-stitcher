import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './Header';
import Grid from './Grid';
import ColorPalette from './ColorPalette';
import SaveButtons from './SaveButtons';
import '../App.css';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
import dmcColors from '../colorList'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mousePressed: false,
      color: '#000',
      sizeOfGrid: 20
    };

    // Setters
    this.updateColorState = this.updateColorState.bind(this);

    // import/export
    this.exportCSVFromGrid = this.exportCSVFromGrid.bind(this);
    this.importCSVToGrid = this.importCSVToGrid.bind(this);
  }
  createColorPops = () => {
    var overlays = []
    for (let key in dmcColors) {
      var trigger = (<OverlayTrigger key={key} trigger="click" placement="right" overlay={this.createPalette(dmcColors[key])}>
        <Button>{key}</Button>
      </OverlayTrigger>)
      overlays.push(trigger)
    }
    return overlays
  }
  createPalette = (arr) => {
    var hexArray = []
    arr.forEach(obj =>{
      hexArray.push(obj.Hex)
    })
    console.log(this.state.color)
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          colors={hexArray}
        />
      </Popover>
    );
  }

  red = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  orange = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  yellow = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  green = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  blue = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  purple = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  pink = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  brown = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  light = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }
  dark = () => {
    return (
      <Popover id="popover-positioned-right" title="Popover right">
        <ColorPalette
          handler={this.updateColorState}
          color={this.state.color}
        />
      </Popover>
    );
  }

  updateMouseStatus(isClicked) {
    this.setState({ mousePressed: isClicked });
  }

  updateColorState(c) {
    this.setState({ color: c.hex });
  }

  exportCSVFromGrid() {
    let rows = ReactDOM.findDOMNode(this.refs.GridRef).getElementsByTagName("tr")
    let csvData = []

    for (let i = 0; i < this.state.sizeOfGrid; i++) {
      csvData.push([])
      for (let j = 0; j < this.state.sizeOfGrid; j++) {
        csvData[i].push(rgb2hex(rows[i].cells[j].style.backgroundColor));
      }
    }

    return csvData;
  }

  importCSVToGrid(csv) {
    console.log("importCSVToGrid");
    console.log(this.state.table)
    console.log(csv)
    // unpack csv into table styles
  }


  render() {
    return (
      <div className="App" onMouseDown={() => { this.updateMouseStatus(true) }} onMouseUp={() => { this.updateMouseStatus(false) }}>
        <Header text="Cross Stitcher" />
        <div className='rowC' >
          <Grid ref={"GridRef"}
            color={this.state.color}
            mousePressed={this.state.mousePressed}
            sizeOfGrid={this.state.sizeOfGrid}
          />
          <div className="paletteButtons">
            {
              this.createColorPops()
              /* <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>RED</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>ORANGE</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>YELLOW</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>GREEN</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>BLUE</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>PURPLE</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>PINK</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>BROWN</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>LIGHT</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={this.red()}>
              <Button>DARK</Button>
            </OverlayTrigger> */}
          </div>
        </div>
        <SaveButtons
          handlerExport={this.exportCSVFromGrid}
          handlerImport={this.importCSVToGrid}
        />
      </div>
    );
  }
}

function rgb2hex(rgb) {
  if (rgb === "") {
    return "#FFFFFF";
  } else if (rgb.search("rgb") === -1) {
    return rgb;
  } else {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
      return ("0" + parseInt(x, 10).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
}

export default App;
