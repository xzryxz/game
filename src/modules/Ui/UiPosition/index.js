// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UiPosition.css'


class UiPosition extends Component {

  getPosition (): string {
    const x = this.props.position.x
    const y = this.props.position.y
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

const mapStateToProps = (state) => ({
  position: {
    x: state.autopilot.position.x,
    y: state.autopilot.position.y,
  },
})

const connected = connect(mapStateToProps)(UiPosition)

export default connected
