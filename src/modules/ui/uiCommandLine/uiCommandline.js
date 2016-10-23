// @flow

import React, { Component } from 'react'
import { List as list } from 'immutable'
import './UiCommandline.css'


export default class UiCommandline extends Component {

  componentDidMount () {
    this.refs.inputElement.focus()
  }

  onKeyDown (event: Object): void {
    const tabOrArrowKeys = list([9, 37, 38, 39, 40])
    const command = this.refs.inputElement.value.toUpperCase()
    const keyCode = event.keyCode
    if (tabOrArrowKeys.includes(keyCode)) {
      event.preventDefault()
    } else if (keyCode === 13 && command.length) {
      this.props.autopilot.modules.logger.log(`[ERROR] ${ command }: Command not found.`)
      this.props.autopilot.uiUpdateFn(this.props.autopilot)
      this.refs.inputElement.value = null
    }
  }

  render () {
    return (
      <div className='UiCommandline'>
        <input onKeyDown={ this.onKeyDown.bind(this) } ref='inputElement' />
      </div>
    )
  }

}
