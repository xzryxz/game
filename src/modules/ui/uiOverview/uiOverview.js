import React, { Component } from 'react'
import UiOverviewRow from './UiOverviewRow'
import './UiOverview.css'

export default class UiOverview extends Component {

  constructor (props) {
    super()
    this._destination = props.destination
    this._dots = props.dots
    this._position = props.position
  }

  get output () {
    const hidden = ['loot', 'ship', 'wreck']
    return this._dots.filter((dot) => {
      if (dot.type === 'bookmark') return false
      else if (this.getRange(dot.x, dot.y) === 0) return dot
      else if (hidden.indexOf(dot.type) >= 0) return false
      else return dot
    }).sort((a, b) => {
      return this.getRange(a.x, a.y) - this.getRange(b.x, b.y)
    })
  }

  getRange (x, y) {
    function _diff (a, b) {
      return Math.abs(a - b)
    }
    const xx = this._position.x
    const yy = this._position.y
    return _diff(x, xx) + _diff(y, yy)
  }

  getRows (rows) {
    return rows.map((row, index) => {
      return (
        <UiOverviewRow key={ index }
          isDestination={ this.isDestination(row) }
          isHostile={ this.isHostile(row) }
          isLocal={ this.isLocal(row) }
          type={ row.type }
          range={ this.getRange(row.position.x, row.position.y) }
        />
      )
    })
  }

  isDestination (row) {
    const x = row.position.x
    const y = row.position.y
    return x === this._destination.x && y === this._destination.y
  }

  isHostile (row) {
    return row.name.value.indexOf('pirate') >= 0 && !row.dead
  }

  isLocal (row) {
    const x = row.position.x
    const y = row.position.y
    return this.getRange(x, y) === 0
  }

  render () {
    return (
      <div className="UiOverview">
        <table>
          <thead>
            <tr>
              <th style={{width: '100%'}}>Type</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            { this.getRows(this.output) }
          </tbody>
        </table>
      </div>
    )
  }

}
