// @flow

import React, { Component } from 'react'
import { Map as map, IndexedIterable } from 'immutable'
import './UiResources.css'


export default class UiResources extends Component {

  resources: map<string, number>

  constructor (props: Object) {
    super()
    this.resources = props.resources
  }

  getResources (): IndexedIterable<*> {
    const resources = this.resources
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
