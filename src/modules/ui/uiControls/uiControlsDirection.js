import React, { Component } from 'react';

export default class UiControlsDirection extends Component {
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

    let getClassName = () => {
      let c = 'UiControlsDirection'
      if (this.props.showShip) c += ' full-speed'
      else c += ' hide'
      return c
    }

    return (
      <div className={ getClassName() }>
        <div className='UiControlsDirection direction' style={ {
          transform: `rotate(${ rotation }deg)`,
        } }/>
      </div>
    )
  }
}
