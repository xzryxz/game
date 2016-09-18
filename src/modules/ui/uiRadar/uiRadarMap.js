import React, { Component } from 'react';
import UiRadarMapDestination from './UiRadarMapDestination'
import UiRadarMapDot from './UiRadarMapDot'
import UiRadarMapLatitude from './UiRadarMapLatitude'
import UiRadarMapReadout from './UiRadarMapReadout'

export default class UiRadarMap extends Component {
  render() {
    const Dots = this.props.dots.map((dot, index) => {
      return <UiRadarMapDot dot={ dot } key={ index } />
    })
    const Latitudes = this.getSpace().map((latitude, index) => {
     return <UiRadarMapLatitude
        cursor={ this.state.cursor }
        setCursor={ this.setCursor.bind(this) }
        setDestination={ this.props.setDestination }
        key={ index }
        latitude={ latitude } />
    })
    return (
      <div onMouseLeave={ this.clearCursor.bind(this) }>
        { Dots }
        <UiRadarMapDestination destination={ this.props.destination } />
        <UiRadarMapDot dot={ this.props.self } />
        <UiRadarMapReadout cursor={ this.state.cursor } dots={ this.props.dots } />
        { Latitudes }
      </div>
    )
  }
  constructor() {
    super()
    this.state = {
      cursor: {}
    }
  }
  clearCursor() {
    let s = this.state
    s.cursor = {}
    this.setState(s)
  }
  setCursor(cursor) {
    let s = this.state
    s.cursor = cursor
    this.setState(s)
  }
  getAxis (axis) {
    let array = []
    for (let i = 0; i < 100; i++ ) {
      array.push({
        axis,
        value: i,
      })
    }
    return array
  }
  getSpace () {
    return this.getAxis('y').concat(this.getAxis('x'))
  }
}
