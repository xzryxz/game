// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UiTime.css'

class UiTime extends Component {

  render () {
    return (
      <div className='UiTime'>
        Time: { this.props.time }
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  time: state.autopilot.time
})

const connected = connect(mapStateToProps)(UiTime)

export default connected
