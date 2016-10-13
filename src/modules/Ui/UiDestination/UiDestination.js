import React, { Component } from 'react'
import './UiDestination.css'

export default class UiDestination extends Component {

  constructor (props) {
    super()
    this._autopilot = props.autopilot
  }

  get destination () {
    const d = this._autopilot.destination
    return d === null ? '-' : d
  }

  render () {
    return (
      <div className='UiDestination'>
        Destination: { this.destination }
      </div>
    )
  }

}
