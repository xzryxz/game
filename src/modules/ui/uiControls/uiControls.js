import React, { Component } from 'react'
import uiControlsDirection from './uiControlsDirection/uiControlsDirection'
import uiControlsArrow from './uiControlsArrow/uiControlsArrow'

export default class uiControls extends Component {
  render() {
    return (
      <div className='uiControls'>
        <div>
          <uiControlsDirection
            direction={ this.props.direction }
            showShip={ !this.props.stopped }
          />
          <uiControlsArrow arrowClass='x_null__y_false' direction={ {x:null,y:false} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <uiControlsArrow arrowClass='x_true__y_false' direction={ {x:true,y:false} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <uiControlsArrow arrowClass='x_true__y_null' direction={ {x:true,y:null} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <uiControlsArrow arrowClass='x_true__y_true' direction={ {x:true,y:true} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <uiControlsArrow arrowClass='x_null__y_true' direction={ {x:null,y:true} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <uiControlsArrow arrowClass='x_false__y_true' direction={ {x:false,y:true} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <uiControlsArrow arrowClass='x_false__y_null' direction={ {x:false,y:null} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <uiControlsArrow arrowClass='x_false__y_false' direction={ {x:false,y:false} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
        </div>
      </div>
    )
  }
}
