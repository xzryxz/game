// @flow

import React, { Component } from 'react'
import { List as list } from 'immutable'
// import UiLogTabs from './UiLogTabs'
import './UiLogs.css'


export default class UiLogs extends Component {

  logs: list<string>

  constructor (props:*) {
    super()
    this.logs = props.logs
  }

  getOutput (): * {
    return this.logs.map((text, index) => {
      return (
        <div key={ index }>
          { text }
        </div>
      )
    })
  }

  render () {
    return (
      <div className='UiLogs'>
        <div className='logs'>
          { this.getOutput() }
        </div>
      </div>
    )
  }

}
