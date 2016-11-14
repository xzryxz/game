// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './UiResources.css'


class UiResources extends Component {

  getResources (): Array<*> {
    const resources = this.props.resources
    return resources.keySeq().map((label, index) => {
      const quantity = resources.get(label)
      return (
        <li key={ index }>
          <span> { label }: </span>
          <span> { quantity === Infinity ? '\u221E' : quantity } </span>
        </li>
      )
    })
  }

  render () {
    return (
      <div className='UiResources'>
        <ul>
          { this.getResources() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  resources: state.autopilot.resources,
})

const connected = connect(mapStateToProps)(UiResources)

export default connected
