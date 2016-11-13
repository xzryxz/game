// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDestination } from './../../actions'


class UiControlsArrow extends Component {

  onClick (): void {
    this.setDestinationInDirection(this.props.direction)
  }

  setDestinationInDirection (direction: Object): void {
    const coord = Object.assign({}, this.props.destination)
    if (direction.x === true) coord.x++
    if (direction.x === false) coord.x--
    if (direction.y === true) coord.y++
    if (direction.y === false) coord.y--
    this.props.setDestination(coord)
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
  destination: state.destination
})

const mapDispatchToProps = (dispatch) => ({
  setDestination: (coord) => dispatch(setDestination(coord))
})

const connected = connect(mapStateToProps, mapDispatchToProps)(UiControlsArrow)

export default connected
