// @flow

import React, { Component } from 'react';


export default class UiRadarMapLatitude extends Component {

  getStyle (): Object {
    const cursor = this.props.cursor
    const latitudeAxis = this.props.latitude.axis
    const latitudeValue = this.props.latitude.value
    const status = cursor[latitudeAxis] === latitudeValue
    return {
      backgroundColor: `rgba(255,255,255, ${ status ? 0.5 : 0.03 })`,
      height: latitudeAxis === 'y' ? '1%' : '100%',
      left: latitudeAxis === 'x' ? latitudeValue + '%' : 0,
      position: 'absolute',
      top: latitudeAxis === 'y' ? latitudeValue + '%' : 0,
      width: latitudeAxis === 'x' ? '1%' : '100%',
    }
  }

  onMouseEnter (event: Object): void {
    event.target.style.zIndex--
    let c = this.props.cursor
    c[this.props.latitude.axis] = this.props.latitude.value
    this.props.setCursor(c)
  }

  onMouseLeave (event: Object): void {
    event.target.style.zIndex++
  }

  onMouseDown (): void {
    let target = {}
    Object.assign(target, this.props.cursor)
    this.props.setDestination(target)
  }

  render () {
    return (
      <div style={ this.getStyle() }
        onMouseEnter={ this.onMouseEnter.bind(this) }
        onMouseLeave={ this.onMouseLeave.bind(this) }
        onMouseDown={ this.onMouseDown.bind(this) }
      />
    )
  }

}
