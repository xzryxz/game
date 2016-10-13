import React, { Component } from 'react'
import './UiTime.css'

export default class UiTime extends Component {

  constructor (props) {
    super()
    this._autopilot = props.autopilot
  }

  get time () {
    const t = this._autopilot.time
    return t === null ? '-' : t
  }

  render () {
    return (
      <div className='UiTime'>
        Time: { this.time }
      </div>
    )
  }

}
