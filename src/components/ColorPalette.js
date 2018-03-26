import React, {Component} from 'react';
import { BlockPicker } from 'react-color';

class ColorPalette extends Component {
  render() {
    return (
      <BlockPicker
        color={ this.props.color }
        onChangeComplete={ this.props.handler }
      />
    );
  }
}

export default ColorPalette;
