// @flow

import React, { Component } from 'react';


export default class UiRadarMapReadout extends Component {

  getCursorCoordinates () {
    return `x=${this.props.cursor.x} y=${this.props.cursor.y}`
  }

  getNamesAtCursor () {
    const cursor = this.props.cursor
    return this.props.dots.filter((dot) => {
      if (cursor.x !== dot.x && cursor.y !== dot.y) return false
      if (dot.type === 'travelpath') return false
      return dot
    }).map((dot, index) => <span children={ dot.name } key={ index } />)
  }

  render () {
    const isValid = typeof this.props.cursor.x === 'number' && typeof this.props.cursor.y === 'number'
    return (
      <div className='UiRadarMapReadout'>
        { isValid && this.getCursorCoordinates() }
        { isValid && this.getNamesAtCursor() }
      </div>
    )
  }

}
