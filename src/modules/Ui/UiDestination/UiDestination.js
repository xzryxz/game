// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UiDestination.css'


class UiDestination extends Component {

  getDestination (): string {
    const x = this.props.destination.x
    const y = this.props.destination.y
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

const mapStateToProps = (state) => ({
  destination: state.destination
})

const connected = connect(mapStateToProps)(UiDestination)

export default connected
