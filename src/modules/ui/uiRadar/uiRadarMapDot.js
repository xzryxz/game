import React, { Component } from 'react';

export default class UiRadarMapDot extends Component {
  render() {
    return (
      <div style={ {
        height: '1%',
        width: '1%',
        top: this.props.dot.position.y + '%',
        left: this.props.dot.position.x + '%',
        position: 'absolute',
        backgroundColor: this.props.dot.color || 'white',
      } } />
    )
  }
}
