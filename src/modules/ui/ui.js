import React, { Component } from 'react'
// import UiCommandline from './UiCommandline/UiCommandline'
import UiControls from './UiControls/UiControls'
import UiInventory from './UiInventory/UiInventory'
import UiLog from './UiLog/UiLog'
import UiOverview from './UiOverview/UiOverview'
import UiRadar from './UiRadar/UiRadar'
import './Ui.css'

export default class Ui extends Component {
  render () {
    return (
      <div>
        <UiLog
          log={ this.props.state.log }
        />
        <UiRadar
          destination={ this.props.state.destination }
          direction={ this.props.state.direction }
          dots={ this.props.dots }
          self={ this.props.state.self }
          setDestination={ this.props.setDestination }
        />
        <UiOverview
          destination={ this.props.state.destination }
          dots={ this.props.dots }
          self={ this.props.state.self }
        />
        <UiInventory
          self={ this.props.state.self }
        />
        <UiControls
          direction={ this.props.state.direction }
          modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection }
          stopped={ this.props.state.stopped }
        />
      </div>
    )
  }
}
