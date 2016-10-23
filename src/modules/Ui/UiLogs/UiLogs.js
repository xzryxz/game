// @flow

import React, { Component } from 'react'
// import UiLogTabs from './UiLogTabs'
import './UiLogs.css'


export default class UiLogs extends Component {

  getOutput (): Array<*> {
    const logs = this.props.autopilot.modules.logger.logs
    return logs.map((text, index) => <div key={ index } children={ text } />).slice(0,10)
  }

  render () {
    return (
      <div className='UiLogs'>
        <div className='logs' children={ this.getOutput() } />
      </div>
    )
  }

}
