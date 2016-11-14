// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { runCommand } from './../../../actions/autopilot'
import { List as list } from 'immutable'
import './UiCommandline.css'


class UiCommandline extends Component {

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
      this.props.runCommand(command)
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

const mapDispatchToProps = (dispatch) => ({
  runCommand: (command) => dispatch(runCommand(command))
})

const connected = connect(null, mapDispatchToProps)(UiCommandline)

export default connected
