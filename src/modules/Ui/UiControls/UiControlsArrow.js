// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDestination } from './../../../actions/autopilot'


class UiControlsArrow extends Component {

  onClick (): void {
    this.setDestinationInDirection(this.props.direction)
  }

  setDestinationInDirection (direction: Object): void {
    const coordinates = Object.assign({}, this.props.destination)
    if (direction.x === true) coordinates.x++
    if (direction.x === false) coordinates.x--
    if (direction.y === true) coordinates.y++
    if (direction.y === false) coordinates.y--
    this.props.setDestination(coordinates)
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

const mapStateToProps = (state) => ({
  destination: state.autopilot.destination
})

const mapDispatchToProps = (dispatch) => ({
  setDestination: (coordinates) => dispatch(setDestination(coordinates))
})

const connected = connect(mapStateToProps, mapDispatchToProps)(UiControlsArrow)

export default connected
