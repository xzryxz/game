import React, { Component } from 'react';

export default class UiDest extends Component {
  render() {
    let style = {}
    if (this.props.dest.x !== null && this.props.dest.y !== null) {
      style = {
        height: 4,
        width: 4,
        top: this.props.dest.y * 3,
        left: this.props.dest.x * 3,
        marginTop: -2,
        marginLeft: -2,
        position: 'absolute',
        border: '2px solid rgba(255,0,0, 0.25)',
      }
    }
    return (
      <div style={ style } />
    )
  }
}
