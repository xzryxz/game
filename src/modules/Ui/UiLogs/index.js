// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import UiLogTabs from './UiLogTabs'
import './UiLogs.css'


class UiLogs extends Component {

  getOutput (): Array<*> {
    const logs = this.props.logs
    return logs.map((text, index) => <div key={ index } children={ text } />)
  }

  render () {
    return (
      <div className='UiLogs'>
        <div className='logs' children={ this.getOutput() } />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  logs: state.autopilot.logs
})

const connected = connect(mapStateToProps)(UiLogs)

export default connected
