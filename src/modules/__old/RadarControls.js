import React, { Component } from 'react';
import RadarArrow from './RadarArrow.js';
import Ship from './Ship.js';

export default class RadarControls extends Component {
  render() {
    return (
      <div className='RadarControls'>
        <div>
          <Ship
            direction={ this.props.direction }
            showShip={ !this.props.stopped }
          />
          <RadarArrow arrowClass='x_null__y_false' direction={ {x:null,y:false} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <RadarArrow arrowClass='x_true__y_false' direction={ {x:true,y:false} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <RadarArrow arrowClass='x_true__y_null' direction={ {x:true,y:null} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <RadarArrow arrowClass='x_true__y_true' direction={ {x:true,y:true} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <RadarArrow arrowClass='x_null__y_true' direction={ {x:null,y:true} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <RadarArrow arrowClass='x_false__y_true' direction={ {x:false,y:true} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <RadarArrow arrowClass='x_false__y_null' direction={ {x:false,y:null} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
          <RadarArrow arrowClass='x_false__y_false' direction={ {x:false,y:false} } modifyDestBasedOnDir={ this.props.modifyDestBasedOnDir } />
        </div>
      </div>
    )
  }
}
