import React, { Component } from 'react'

export default class UiControlsArrow extends Component {

  onClick () {
    this.props.moveInDirection(this.props.direction)
  }

  render() {
    return (
      <div className='UiControlsArrow'>
        <div
          onClick={ this.onClick.bind(this) }
          className={ this.props.arrowClass }
          style={ {
            transform: `rotate(${ this.props.rotation }deg)`,
          } }
        />
      </div>
    )
  }

}
