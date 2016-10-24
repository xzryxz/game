// @flow

import React, { Component } from 'react';


export default class UiRadarMapDot extends Component {

  getStyle (): Object {
    return {
      left: this.props.dot.position.x + '%',
      top: this.props.dot.position.y + '%',
    }
  }

  render () {
    return <div className={ `UiRadarMapDot ${ this.props.dot.type }` } style={ this.getStyle() } />
  }

}
