import React, { Component } from 'react'
// import UiCommandline from './UiCommandline/UiCommandline'
import UiControls from './UiControls/UiControls'
import UiInventory from './UiInventory/UiInventory'
import UiLog from './UiLog/UiLog'
import UiOverview from './UiOverview/UiOverview'
import UiRadar from './UiRadar/UiRadar'

export default class Ui extends Component {
  render () {
    return (
      <div>
        <UiLog
          log={ this.props.state.log }
        />
        <UiRadar
          dest={ this.props.state.dest }
          direction={ this.props.state.direction }
          dots={ this.props.dots }
          self={ this.props.state.self }
          setDest={ this.props._setDest }
        />
        <UiOverview
          dest={ this.props.state.dest }
          dots={ this.props.dots }
          self={ this.props.state.self }
        />
        <UiInventory
          self={ this.props.state.self }
        />
        <UiControls
          direction={ this.props.state.direction }
          modifyDestBasedOnDir={ this.props._modifyDestBasedOnDir }
          stopped={ this.props.state.stopped }
        />
      </div>
    )
  }
}
