// @flow

import React, { Component } from 'react'
import './UiCommandline.css'


export default class UiCommandline extends Component {

  componentDidMount () {
    this.refs.commandline.focus()
  }

  onKeyPress (event) {
    console.log(`key with code ${ event.keyCode } was pressed`);
    if (event.keyCode === 13) {
      this.props.autopilot.logger.log('Firmware update is needed.')
    }
  }

  render () {
    return (
      <div className='UiCommandline'
        contentEditable={ true }
        onKeyPress={ this.onKeyPress }
        ref='commandline'
      />
    )
  }

}
