import React, { Component } from 'react'
// import uiCommandline from './uiCommandline'
import uiControls from './uiControls/uiControls'
import uiInventory from './uiInventory/uiInventory'
import uiLog from './uiLog/uiLog'
import uiOverview from './uiOverview/uiOverview'
import uiRadar from './uiRadar/uiRadar'

export default class ui extends Component {
  render () {
    return (
      <div>
        <uiLog
          log={ this.props.state.log }
        />
        <uiRadar
          dest={ this.props.state.dest }
          direction={ this.props.state.direction }
          dots={ this.props.dots }
          self={ this.props.state.self }
          setDest={ this.props._setDest }
        />
        <uiOverview
          dest={ this.props.state.dest }
          dots={ this.props.dots }
          self={ this.props.state.self }
        />
        <uiInventory
          self={ this.props.state.self }
        />
        <uiControls
          direction={ this.props.state.direction }
          modifyDestBasedOnDir={ this.props._modifyDestBasedOnDir }
          stopped={ this.props.state.stopped }
        />
      </div>
    )
  }
}
