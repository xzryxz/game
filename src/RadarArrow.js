import React, { Component } from 'react';

export default class RadarArrow extends Component {
  render() {
    let direction = this.props.direction
    let rotation = 0
    if (direction.x === true && direction.y === false) rotation = 45
    else if (direction.x === true && direction.y === null) rotation = 90
    else if (direction.x === true && direction.y === true) rotation = 135
    else if (direction.x === null && direction.y === true) rotation = 180
    else if (direction.x === false && direction.y === true) rotation = 225
    else if (direction.x === false && direction.y === null) rotation = 270
    else if (direction.x === false && direction.y === false) rotation = 315

    return (
      <div className="RadarArrow">
        <div className='arrow' style={ {
          transform: `rotate(${ rotation }deg)`,
        } }/>
      </div>
    )
  }
}
