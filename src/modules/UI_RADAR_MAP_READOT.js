import React, { Component } from 'react';

export default class RadarUiReadout extends Component {
  render() {
    const cursor = this.props.cursor
    const isOver = typeof cursor.x === 'number' && typeof cursor.y === 'number'
    const dots = this.props.dots.filter((dot) => {
      if (dot.type === 'bookmark') return false
      if (dot.color === 'transparent') return false
      return dot.x === cursor.x && dot.y === cursor.y ? dot : false
    })
    const readout = dots.map((dot, index) => {
      return (
        <div className='name' key={index}>
          {dot.name}
        </div>
      )
    })

    return (
      <div className="RadarUiReadout">
        { isOver ? `x=${cursor.x} y=${cursor.y}` : '' }
        { readout }
      </div>
    )
  }
}
