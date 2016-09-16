import React, { Component } from 'react';
import Ship from './Ship.js';

class RadarArrow extends Component {
  render() {
    const direction = this.props.direction
    let rotation = 0
    if (direction.x === true && direction.y === false) rotation = 45
    else if (direction.x === true && direction.y === null) rotation = 90
    else if (direction.x === true && direction.y === true) rotation = 135
    else if (direction.x === null && direction.y === true) rotation = 180
    else if (direction.x === false && direction.y === true) rotation = 225
    else if (direction.x === false && direction.y === null) rotation = 270
    else if (direction.x === false && direction.y === false) rotation = 315
    function onClick () {
      this.props.modifyDestBasedOnDir(direction)
    }

    return (
      <div className='RadarArrow'>
        <div
          onClick={ onClick.bind(this) }
          className={ this.props.arrowClass }
          style={ {
            transform: `rotate(${ rotation }deg)`,
          } }
        />
      </div>
    )
  }
}

export class RadarControls extends Component {
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
