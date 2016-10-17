import React, { Component } from 'react'

export default class UiOverviewRow extends Component {

  constructor (props) {
    super()
    this._isDestination = props.isDestination
    this._isHostile = props.isHostile
    this._isLocal = props.isLocal
    this._range = props.range
    this._type = props.type
  }

  getClassName () {
    if (this._isHostile) return 'is-hostile'
    if (this._isLocal) return 'is-local'
    else if (this._isDestination) return 'is-destination'
    else return null
  }

  render () {
    return (
      <tr className={ this.getClassName() } >
        <td>{ this._type }</td>
        <td>{ this._range }</td>
      </tr>
    )
  }

}
