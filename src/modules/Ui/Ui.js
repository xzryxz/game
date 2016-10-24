// @flow

import React, { Component } from 'react'
import UiCommandline from './UiCommandline/UiCommandline'
import UiControls from './UiControls/UiControls'
import UiDestination from './UiDestination/UiDestination'
import UiLogs from './UiLogs/UiLogs'
import UiOverview from './UiOverview/UiOverview'
import UiPosition from './UiPosition/UiPosition'
import UiRadar from './UiRadar/UiRadar'
import UiResources from './UiResources/UiResources'
import UiTime from './UiTime/UiTime'
import './Ui.css'

export default class Ui extends Component {

  state: Object

  constructor (props: Object) {
    super()
    this.state = {
      autopilot: props.autopilot
    }
  }

  componentDidMount () {
    const nextState = this.state
    nextState.autopilot.boot(this.uiUpdate.bind(this))
    this.setState(nextState)
  }

  uiUpdate (autopilot: Object) {
    const nextState = this.state
    nextState.autopilot = autopilot
    this.setState(nextState)
  }

  render () {
    const autopilot = this.state.autopilot
    return (
      <div className='Ui'>
        <div className='statusbar'>
          <UiResources autopilot={ autopilot } />
          <UiTime autopilot={ autopilot } />
        </div>
        <div className='instruments'>
          <UiOverview autopilot={ autopilot } />
          <div className='navigation'>
            <UiDestination autopilot={ autopilot } />
            <UiPosition autopilot={ autopilot } />
            <UiControls autopilot={ autopilot } />
          </div>
          <UiRadar autopilot={ autopilot } />
        </div>
        <div className='terminal'>
          <UiCommandline autopilot={ autopilot } />
          <UiLogs autopilot={ autopilot } />
        </div>
      </div>
    )
  }
}
