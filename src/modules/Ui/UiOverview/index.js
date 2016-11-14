// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import UiOverviewRow from './UiOverviewRow'
import './UiOverview.css'


class UiOverview extends Component {

  getFilteredDots (): Array<Object> {
    const hiddenTypes = list(['loot', 'ship', 'wreck'])
    return this.props.dots.filter((dot) => {
      if (dot.type === 'travelpath') return false
      if (this.getRange(dot.x, dot.y) === 0) return dot
      if (hiddenTypes.includes(dot.type)) return false
      return dot
    }).sort((a, b) => {
      return this.getRange(a.position.x, a.position.y) - this.getRange(b.position.x, b.position.y)
    })
  }

  getRange (x: number, y: number): number {
    const getDiff = (a: number, b: number): number => Math.abs(a - b)
    return getDiff(x, this.props.position.x) + getDiff(y, this.props.position.y)
  }

  getRows (rows: Array<Object>): Array<React.Element<*>> {
    return rows.map((dot, index) => {
      return (
        <UiOverviewRow key={ index }
          className={ this.getRowClassName(dot) }
          position={ dot.position }
          range={ this.getRange(dot.position.x, dot.position.y) }
          type={ dot.type }
        />
      )
    })
  }

  getRowClassName (dot: Object): string|void {
    if (this.isDestination(dot.position)) return 'is-destination'
    if (this.isHostile(dot.name)) return 'is-hostile'
  }

  isDestination (coordinates: Object): boolean {
    const destination = this.props.destination
    return coordinates.x === destination.x && coordinates.y === destination.y
  }

  isHostile (name: string): boolean {
    return name.indexOf('pirate') >= 0
  }

  render () {
    return (
      <div className='UiOverview'>
        <table>
          <thead>
            <tr>
              <th> Type </th>
              <th> Range </th>
            </tr>
          </thead>
          <tbody children={ this.getRows(this.getFilteredDots()) } />
        </table>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  destination: state.autopilot.destination,
  dots: state.world.dots,
  position: state.autopilot.position,
})

const connected = connect(mapStateToProps)(UiOverview)

export default connected
