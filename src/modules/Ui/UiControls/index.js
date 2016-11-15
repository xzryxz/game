// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import UiControlsDirection from './UiControlsDirection'
import UiControlsArrow from './UiControlsArrow'
import './UiControls.css'


class UiControls extends Component {

  getDirection (): Object {
    const destination = this.props.destination
    const position = this.props.position
    let direction = { x: undefined, y: undefined }
    if (destination) {
      if (position.x < destination.x) { direction.x = true } // position.x++;
      if (position.y > destination.y) { direction.y = false } // position.y--;
      if (position.x > destination.x) { direction.x = false } // position.x--;
      if (position.y < destination.y) { direction.y = true } // position.y++;
    }
    return direction
  }

  getRotation (direction: Object) {
    let rotation = 0
    if (direction.x === true && direction.y === false) rotation = 45
    else if (direction.x === true && direction.y === undefined) rotation = 90
    else if (direction.x === true && direction.y === true) rotation = 135
    else if (direction.x === undefined && direction.y === true) rotation = 180
    else if (direction.x === false && direction.y === true) rotation = 225
    else if (direction.x === false && direction.y === undefined) rotation = 270
    else if (direction.x === false && direction.y === false) rotation = 315
    return rotation
  }

  hasDestination (): boolean {
    const direction = this.getDirection()
    return direction.x !== undefined || direction.y !== undefined
  }

  render() {
    return (
      <div className='UiControls'>
        <div>
          { this.hasDestination() && <UiControlsDirection rotation={ this.getRotation(this.getDirection()) } /> }
          <UiControlsArrow arrowClass='x_void__y_false' direction={ {x:undefined,y:false} } />
          <UiControlsArrow arrowClass='x_true__y_false' direction={ {x:true,y:false} } />
          <UiControlsArrow arrowClass='x_true__y_void' direction={ {x:true,y:undefined} } />
          <UiControlsArrow arrowClass='x_true__y_true' direction={ {x:true,y:true} } />
          <UiControlsArrow arrowClass='x_void__y_true' direction={ {x:undefined,y:true} } />
          <UiControlsArrow arrowClass='x_false__y_true' direction={ {x:false,y:true} } />
          <UiControlsArrow arrowClass='x_false__y_void' direction={ {x:false,y:undefined} } />
          <UiControlsArrow arrowClass='x_false__y_false' direction={ {x:false,y:false} } />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  destination: {
    x: state.autopilot.destination.x,
    y: state.autopilot.destination.y
  },
  position: {
    x: state.autopilot.position.x,
    y: state.autopilot.position.y
  },
})

const connected = connect(mapStateToProps)(UiControls)

export default connected
