// @flow

import React, { Component } from 'react'
import './UiPosition.css'

export default class UiPosition extends Component {

  autopilot: Object

  constructor (props: Object) {
    super()
    this.autopilot = props.autopilot
  }

  getPosition (): string {
    const x = this.autopilot.position.x
    const y = this.autopilot.position.y
    return `${ x },${ y }`
  }

  render () {
    return (
      <div className='UiPosition'>
        Position: { this.getPosition() }
      </div>
    )
  }

}
