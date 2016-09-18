import React, { Component } from 'react';
import RadarUiLatitude from './RadarUiLatitude.js';
import RadarUiDest from './RadarUiDest.js';
import RadarUiDot from './RadarUiDot.js';
import RadarUiReadout from './RadarUiReadout.js';

export default class RadarUi extends Component {
  render() {
    const Dots = this.props.dots.map((dot, index) => {
      return <RadarUiDot dot={ dot } key={ index } />
    })
    const Latitudes = this.getSpace().map((latitude, index) => {
     return <RadarUiLatitude
        cursor={ this.state.cursor }
        setCursor={ this.setCursor.bind(this) }
        setDest={ this.props.setDest }
        key={ index }
        latitude={ latitude } />
    })
    return (
      <div onMouseLeave={ this.clearCursor.bind(this) }>
        { Dots }
        <RadarUiDest dest={ this.props.dest } />
        <RadarUiDot dot={ this.props.self } />
        <RadarUiReadout cursor={ this.state.cursor } dots={ this.props.dots } />
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
