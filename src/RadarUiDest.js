import React, { Component } from 'react';

export default class UiDest extends Component {
  render() {
    let style = {}
    if (this.props.dest.x !== null && this.props.dest.y !== null) {
      style = {
        height: '3%',
        width: '3%',
        top: this.props.dest.y + '%',
        left: this.props.dest.x + '%',
        marginTop: '-1.5%',
        marginLeft: '-1.5%',
        position: 'absolute',
        border: '0.2em solid yellow',
      }
    }
    return (
      <div style={ style } />
    )
  }
}
