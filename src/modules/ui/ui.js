// @flow

import React, { Component } from 'react'
// import UiCommandline from './UiCommandline/UiCommandline'
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
    let state = this.state
    state.autopilot.boot(this.uiUpdate.bind(this))
    this.setState(state)
  }

  uiUpdate (autopilot: Object) {
    let state = this.state
    state.autopilot = autopilot
    this.setState(state)
  }

  render () {
    let autopilot = this.state.autopilot
    return (
      <div>
        <UiControls autopilot={ autopilot } />
        <UiDestination autopilot={ autopilot } />
        <UiLogs logs={ autopilot.modules.logger.logs } />
        <UiOverview
          destination={ autopilot.destination }
          dots={ autopilot.world.dots }
          position={ autopilot.position }
        />
        <UiPosition autopilot={ autopilot } />
        <UiRadar autopilot={ autopilot } />
        <UiResources resources={ autopilot.modules.cargo.resources } />
        <UiTime autopilot={ autopilot } />
      </div>
    )
  }
}
