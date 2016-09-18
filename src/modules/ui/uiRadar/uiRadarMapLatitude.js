import React, { Component } from 'react';

export default class UiRadarMapLatitude extends Component {
  render() {
    const cursor = this.props.cursor
    const latitudeAxis = this.props.latitude.axis
    const latitudeValue = this.props.latitude.value
    const status = cursor[latitudeAxis] === latitudeValue
    const highlight = {
      true: 'rgba(255,255,255, 0.5)',
      false: 'rgba(255,255,255, 0.1)',
    }
    const style = {
      height: latitudeAxis === 'y' ? '1%' : '100%',
      width: latitudeAxis === 'x' ? '1%' : '100%',
      position: 'absolute',
      top: latitudeAxis === 'y' ? latitudeValue + '%' : 0,
      left: latitudeAxis === 'x' ? latitudeValue + '%' : 0,
      backgroundColor: highlight[status],
    }
    function onMouseEnter (event) {
      event.target.style.zIndex--
      let c = cursor
      c[latitudeAxis] = latitudeValue
      this.props.setCursor(c)
    }
    function onMouseLeave (event) {
      event.target.style.zIndex++
    }
    function onMouseDown () {
      let target = {}
      Object.assign(target, cursor)
      this.props.setDest(target)
    }
    return (
      <div style={ style }
        onMouseEnter={ onMouseEnter.bind(this) }
        onMouseLeave={ onMouseLeave.bind(this) }
        onMouseDown={ onMouseDown.bind(this) }
      />
    )
  }
}
