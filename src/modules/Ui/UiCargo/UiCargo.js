import React, { Component } from 'react';
import './UiCargo.css'

export default class UiCargo extends Component {

  constructor (props) {
    super()
    this._cargo = props.cargo
  }

  get resources () {
    const labels = Object.keys(this._cargo.resources)
    const resources = this._cargo.resources
    return labels.map((label, index) => {
      const quantity = resources[label]
      return (
        <li key={ index }>
          <span> { label }: </span>
          <span> { quantity === Infinity ? "\u221E" : quantity } </span>
        </li>
      )
    })
  }

  render () {
    return (
      <div className='UiCargo'>
        <ul>
          { this.resources }
        </ul>
      </div>
    )
  }
}
