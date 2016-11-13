// @flow

import React, { Component } from 'react'
import UiRadarMapDot from './UiRadarMapDot'
import UiRadarMapLatitude from './UiRadarMapLatitude'


export default class UiRadarMap extends Component {

  state: Object

  constructor () {
    super()
    this.state = {
      cursor: {}
    }
  }

  clearCursor ():void {
    let s = this.state
    s.cursor = {}
    this.setState(s)
  }

  setCursor (cursor: Object): void {
    let s = this.state
    s.cursor = cursor
    this.setState(s)
  }

  getAxis (axis: string): Array<Object> {
    let array = []
    for (let i = 0; i < 100; i++ ) {
      array.push({
        axis,
        value: i,
      })
    }
    return array
  }

  getSpace (): Array<Object> {
    const a = []
    const x = this.getAxis('x')
    const y = this.getAxis('y')
    const n = x.length
    for (let i = 0; i < n; i++) {
      a.push(x[i], y[i])
    }
    return a
  }

  render () {
    const Dots = this.props.autopilot.world.dots.map((dot, index) => {
      return <UiRadarMapDot dot={ dot } key={ index } />
    })
    const Latitudes = this.getSpace().map((latitude, index) => {
      return (
        <UiRadarMapLatitude key={ index }
          cursor={ this.state.cursor }
          latitude={ latitude }
          setCursor={ this.setCursor.bind(this) }
          setDestination={ this.props.autopilot.setDestination.bind(this.props.autopilot) }
        />
      )
    })
    return (
      <div className='UiRadarMap' onMouseLeave={ this.clearCursor.bind(this) }>
        { Dots }
        { Latitudes }
        <UiRadarMapDot dot={ {type: 'destination', position: this.props.autopilot.destination} } />
        <UiRadarMapDot dot={ {type: 'position', position: this.props.autopilot.position} } />
      </div>
    )
  }

}
