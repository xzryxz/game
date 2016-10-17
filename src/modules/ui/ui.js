import React, { Component } from 'react'
import UiCargo from './UiCargo/UiCargo'
// import UiCommandline from './UiCommandline/UiCommandline'
import UiControls from './UiControls/UiControls'
import UiLog from './UiLog/UiLog'
import UiOverview from './UiOverview/UiOverview'
// import UiRadar from './UiRadar/UiRadar'
import UiTime from './UiTime/UiTime'
import './Ui.css'

export default class Ui extends Component {

  constructor (props) {
    super()
    this.state = {
      autopilot: props.autopilot
    }
  }

  componentDidMount () {
    let s = this.state
    s.autopilot.boot(this.uiUpdate.bind(this))
    this.setState(s)
  }

  uiUpdate (autopilot) {
    let s = this.state
    s.autopilot = autopilot
    this.setState(s)
  }

  render () {
    let autopilot = this.state.autopilot
    let style = {
      display: autopilot.time === null ? 'none': 'block'
    }
    return (
      <div>
        <UiLog log={ autopilot.modules.log } />
        <UiTime autopilot={ autopilot } />
        <UiCargo cargo={ autopilot.modules.cargo } />
        <div style={ style }>
          <UiControls
            direction={ autopilot.direction }
            moveInDirection={ autopilot.moveInDirection.bind(autopilot) }
          />
        </div>
        <UiOverview
          destination={ autopilot.destination }
          dots={ autopilot.world.dots }
          position={ autopilot.position }
        />
      </div>
    )
    // <UiRadar
    //   destination={ this.props.destination }
    //   direction={ this.props.direction }
    //   dots={ this.props.dots }
    //   ship={ this.props.ship }
    //   setDestination={ this.props.setDestination }
    // />
  }
}
