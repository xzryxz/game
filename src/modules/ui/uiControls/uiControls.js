import React, { Component } from 'react'
import UiControlsDirection from './UiControlsDirection'
import UiControlsArrow from './UiControlsArrow'
import './UiControls.css'

export default class UiControls extends Component {

  constructor (props) {
    super()
    this.direction = props.direction
    this.moveInDirection = props.moveInDirection
    this.stopped = false
  }

  render() {
    return (
      <div className='UiControls'>
        <div>
          <UiControlsDirection
            direction={ this.direction }
            showShip={ !this.stopped }
          />
          <UiControlsArrow arrowClass='x_null__y_false' direction={ {x:null,y:false} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_true__y_false' direction={ {x:true,y:false} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_true__y_null' direction={ {x:true,y:null} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_true__y_true' direction={ {x:true,y:true} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_null__y_true' direction={ {x:null,y:true} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_false__y_true' direction={ {x:false,y:true} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_false__y_null' direction={ {x:false,y:null} } moveInDirection={ this.moveInDirection } />
          <UiControlsArrow arrowClass='x_false__y_false' direction={ {x:false,y:false} } moveInDirection={ this.moveInDirection } />
        </div>
      </div>
    )
  }

}
