// @flow

import React, { Component } from 'react'
import './UiDestination.css'

export default class UiDestination extends Component {

  autopilot: Object

  constructor (props: Object) {
    super()
    this.autopilot = props.autopilot
  }

  getDestination (): string {
    const x = this.autopilot.destination.x
    const y = this.autopilot.destination.y
    return `${ x },${ y }`
  }

  render () {
    return (
      <div className='UiDestination'>
        Destination: { this.getDestination() }
      </div>
    )
  }

}
