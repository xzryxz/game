// @flow

import React, { Component } from 'react'


export default class UiControlsArrow extends Component {

  onClick (): void {
    this.props.setDestinationInDirection(this.props.direction)
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
