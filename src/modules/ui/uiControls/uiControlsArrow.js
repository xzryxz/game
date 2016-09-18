import React, { Component } from 'react'

export default class UiControlsArrow extends Component {
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
      <div className='UiControlsArrow'>
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
