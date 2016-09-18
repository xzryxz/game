import React, { Component } from 'react';

export default class UiRadarMapDest extends Component {
  render() {
    let style = {}
    if (this.props.destination.x !== null && this.props.destination.y !== null) {
      style = {
        backgroundColor: 'yellow',
        height: '1%',
        width: '1%',
        top: this.props.destination.y + '%',
        left: this.props.destination.x + '%',
        position: 'absolute',
      }
    }
    return (
      <div style={ style } />
    )
  }
}
