import React, { Component } from 'react';
import uiRadarMapDestination from './uiRadarMapDestination/uiRadarMapDestination'
import uiRadarMapDot from './uiRadarMapDot/uiRadarMapDot'
import uiRadarMapLatitude from './uiRadarMapLatitude/uiRadarMapLatitude'
import uiRadarMapReadout from './uiRadarMapReadout/uiRadarMapReadout'

export default class uiRadarMap extends Component {
  render() {
    const Dots = this.props.dots.map((dot, index) => {
      return <uiRadarMapDot dot={ dot } key={ index } />
    })
    const Latitudes = this.getSpace().map((latitude, index) => {
     return <uiRadarMapLatitude
        cursor={ this.state.cursor }
        setCursor={ this.setCursor.bind(this) }
        setDest={ this.props.setDest }
        key={ index }
        latitude={ latitude } />
    })
    return (
      <div onMouseLeave={ this.clearCursor.bind(this) }>
        { Dots }
        <uiRadarMapDestination dest={ this.props.dest } />
        <uiRadarMapDot dot={ this.props.self } />
        <uiRadarMapReadout cursor={ this.state.cursor } dots={ this.props.dots } />
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
