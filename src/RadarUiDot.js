import React, { Component } from 'react';

export default class UiSelf extends Component {
  render() {
    return (
      <div style={ {
        height: 3,
        width: 3,
        top: this.props.dot.y * 3,
        left: this.props.dot.x * 3,
        position: 'absolute',
        backgroundColor: this.props.dot.color || 'white',
      } } />
    )
  }
}
