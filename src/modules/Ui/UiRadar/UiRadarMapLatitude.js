// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDestination } from './../../actions'


class UiRadarMapLatitude extends Component {

  getStyle (): Object {
    const cursor = this.props.cursor
    const latitudeAxis = this.props.latitude.axis
    const latitudeValue = this.props.latitude.value
    const status = cursor[latitudeAxis] === latitudeValue
    return {
      backgroundColor: `rgba(255,255,255, ${ status ? 0.5 : 0 })`,
      height: latitudeAxis === 'y' ? '1%' : '100%',
      left: latitudeAxis === 'x' ? latitudeValue + '%' : 0,
      top: latitudeAxis === 'y' ? latitudeValue + '%' : 0,
      width: latitudeAxis === 'x' ? '1%' : '100%',
    }
  }

  onMouseDown (): void {
    let target = {}
    Object.assign(target, this.props.cursor)
    this.props.setDestination(target)
  }

  onMouseEnter (event: Object): void {
    event.target.style.zIndex--
    let cursor = this.props.cursor
    cursor[this.props.latitude.axis] = this.props.latitude.value
    this.props.setCursor(cursor)
  }

  onMouseLeave (event: Object): void {
    event.target.style.zIndex++
  }

  render () {
    return (
      <div className='UiRadarMapLatitude' style={ this.getStyle() }
        onMouseEnter={ this.onMouseEnter.bind(this) }
        onMouseLeave={ this.onMouseLeave.bind(this) }
        onMouseDown={ this.onMouseDown.bind(this) }
      />
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  setDestination: (coord) => {
    if (typeof coord.x === 'number' && typeof coord.y === 'number') {
      dispatch(setDestination(coord))
    }
  }
})

const connected = connect(null, mapDispatchToProps)(UiRadarMapLatitude)

export default connected
