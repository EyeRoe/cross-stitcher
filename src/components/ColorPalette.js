import React from 'react';
import { BlockPicker } from 'react-color';
import ColorState from './ColorState';

class ColorPalette extends ColorState {
  handleChangeComplete = (color) => {
    console.log(this.state.color)
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <BlockPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default ColorPalette;
