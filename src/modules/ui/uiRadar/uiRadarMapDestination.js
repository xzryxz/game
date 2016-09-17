import React, { Component } from 'react';

export default class uiRadarMapDest extends Component {
  render() {
    let style = {}
    if (this.props.dest.x !== null && this.props.dest.y !== null) {
      style = {
        backgroundColor: 'yellow',
        height: '1%',
        width: '1%',
        top: this.props.dest.y + '%',
        left: this.props.dest.x + '%',
        position: 'absolute',
      }
    }
    return (
      <div style={ style } />
    )
  }
}
