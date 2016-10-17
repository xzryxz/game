import React, { Component } from 'react'
import UiControlsDirection from './UiControlsDirection'
import UiControlsArrow from './UiControlsArrow'
import './UiControls.css'

export default class UiControls extends Component {

  constructor (props) {
    super()
    this.moveInDirection = props.moveInDirection
    this.stopped = props.direction.x === null && props.direction.y === null
  }

  getRotation (direction) {
    let rotation = 0
    if (direction.x === true && direction.y === false) rotation = 45
    else if (direction.x === true && direction.y === null) rotation = 90
    else if (direction.x === true && direction.y === true) rotation = 135
    else if (direction.x === null && direction.y === true) rotation = 180
    else if (direction.x === false && direction.y === true) rotation = 225
    else if (direction.x === false && direction.y === null) rotation = 270
    else if (direction.x === false && direction.y === false) rotation = 315
    return rotation
  }

  render() {
    return (
      <div className='UiControls'>
        <div>
          <UiControlsDirection
            rotation={ this.getRotation(this.props.direction) }
            showShip={ !this.stopped }
          />
          <UiControlsArrow arrowClass='x_null__y_false' rotation={ this.getRotation({x:null,y:false}) } direction={ {x:null,y:false} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_true__y_false' rotation={ this.getRotation({x:true,y:false}) } direction={ {x:true,y:false} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_true__y_null' rotation={ this.getRotation({x:true,y:null}) } direction={ {x:true,y:null} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_true__y_true' rotation={ this.getRotation({x:true,y:true}) } direction={ {x:true,y:true} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_null__y_true' rotation={ this.getRotation({x:null,y:true}) } direction={ {x:null,y:true} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_false__y_true' rotation={ this.getRotation({x:false,y:true}) } direction={ {x:false,y:true} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_false__y_null' rotation={ this.getRotation({x:false,y:null}) } direction={ {x:false,y:null} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_false__y_false' rotation={ this.getRotation({x:false,y:false}) } direction={ {x:false,y:false} } moveInDirection={ this.moveInDirection } />
        </div>
      </div>
    )
  }

}
