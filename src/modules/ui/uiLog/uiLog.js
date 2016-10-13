import React, { Component } from 'react'
import UiLogTabs from './UiLogTabs'
import './UiLog.css'

export default class UiLog extends Component {

  constructor (props) {
    super()
    this._log = props.log
  }

  get output () {
    return this._log.read.map((text, index) => {
      return (
        <div key={ index }>
          { text }
        </div>
      )
    })
  }

  render () {
    return (
      <div className='UiLog'>
        <div className='log'>
          { this.output }
        </div>
      </div>
    )
  }

}
