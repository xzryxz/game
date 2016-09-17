import React, { Component } from 'react';

export default class uiRadarMapDot extends Component {
  render() {
    return (
      <div style={ {
        height: '1%',
        width: '1%',
        top: this.props.dot.y + '%',
        left: this.props.dot.x + '%',
        position: 'absolute',
        backgroundColor: this.props.dot.color || 'white',
      } } />
    )
  }
}
