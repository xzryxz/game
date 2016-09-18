import React, { Component } from 'react'
import UiControlsDirection from './UiControlsDirection'
import UiControlsArrow from './UiControlsArrow'
import './UiControls.css'

export default class UiControls extends Component {
  render() {
    return (
      <div className='UiControls'>
        <div>
          <UiControlsDirection
            direction={ this.props.direction }
            showShip={ !this.props.stopped }
          />
          <UiControlsArrow arrowClass='x_null__y_false' direction={ {x:null,y:false} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
          <UiControlsArrow arrowClass='x_true__y_false' direction={ {x:true,y:false} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
          <UiControlsArrow arrowClass='x_true__y_null' direction={ {x:true,y:null} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
          <UiControlsArrow arrowClass='x_true__y_true' direction={ {x:true,y:true} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
          <UiControlsArrow arrowClass='x_null__y_true' direction={ {x:null,y:true} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
          <UiControlsArrow arrowClass='x_false__y_true' direction={ {x:false,y:true} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
          <UiControlsArrow arrowClass='x_false__y_null' direction={ {x:false,y:null} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
          <UiControlsArrow arrowClass='x_false__y_false' direction={ {x:false,y:false} } modifyDestinationBasedOnDirection={ this.props.modifyDestinationBasedOnDirection } />
        </div>
      </div>
    )
  }
}
