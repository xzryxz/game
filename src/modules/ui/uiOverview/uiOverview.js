import React, { Component } from 'react';

export default class uiOverview extends Component {
  getRange (x, y) {
    function difference (a, b) { return Math.abs(a - b) }
    const xx = this.props.self.x
    const yy = this.props.self.y
    return difference(x, xx) + difference(y, yy)
  }
  isDestination (row) {
    return row.x === this.props.dest.x && row.y === this.props.dest.y
  }
  isLocal (row) {
    return this.getRange(row.x, row.y) === 0
  }
  isHostile (row) {
    return row.name.indexOf('pirate') >= 0
  }
  getClassName (row) {
    if (this.isHostile(row)) return 'is-hostile'
    if (this.isLocal(row)) return 'is-local'
    else if (this.isDestination(row)) return 'is-destination'
    else return null
  }
  render () {
    const hidden = ['loot', 'ship', 'wreck']
    const rows = this.props.dots.filter((dot) => {
      if (dot.type === 'bookmark') return false
      else if (this.getRange(dot.x, dot.y) === 0) return dot
      else if (hidden.indexOf(dot.type) >= 0) return false
      else return dot
    }).sort((a, b) => {
      return this.getRange(a.x, a.y) - this.getRange(b.x, b.y)
    })
    return (
      <div className="uiOverview">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th style={{width: '100%'}}>Name</th>
              <th>Range</th>
              <th>X/Y</th>
            </tr>
          </thead>
          <tbody>
            { rows.map((row, i) => {return (
              <tr key={ i } className={ this.getClassName(row) } >
                <td>{ row.type }</td>
                <td>{ row.name }</td>
                <td>{ this.getRange(row.x, row.y) }</td>
                <td>{ row.x },{ row.y }</td>
              </tr>
            )}) }
          </tbody>
        </table>
      </div>
    )
  }
}
