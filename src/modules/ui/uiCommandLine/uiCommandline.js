// @flow

import React, { Component } from 'react'
import './UiCommandline.css'


export default class UiCommandline extends Component {

  componentDidMount () {
    this.refs.commandline.focus()
  }

  onKeyDown (event) {
    const arrowKeys = [37, 38, 39, 40]
    const command = this.refs.commandline.value.toUpperCase()
    const keyCode = event.keyCode
    if (arrowKeys.indexOf(keyCode) >= 0) {
      event.preventDefault()
    } else if (keyCode === 13 && command.length) {
      this.props.autopilot.modules.logger.log(`[ERROR] ${ command }: Command not found.`)
      this.props.autopilot.uiUpdateFn(this.props.autopilot)
      this.refs.commandline.value = null
    }
  }

  render () {
    return (
      <div className='UiCommandline'>
        <input onKeyDown={ this.onKeyDown.bind(this) } ref='commandline' />
      </div>
    )
  }

}
