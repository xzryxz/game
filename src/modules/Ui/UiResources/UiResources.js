// @flow

import React, { Component } from 'react'
import './UiResources.css'


export default class UiResources extends Component {

  getResources (): Array<*> {
    const resources = this.props.autopilot.modules.cargo.resources
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
