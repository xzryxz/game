import React, { Component } from 'react';
import UiRadarMap from './UiRadarMap'
import './UiRadar.css'

export default class UiRadar extends Component {
  render () {
    return (
      <div className="UiRadar">
        <UiRadarMap
          destination={ this.props.destination }
          dots={ this.props.dots }
          onKeyDown={ this.setDestinationBasedOnKeyKode }
          self={ this.props.self }
          setDestination={ this.props.setDestination }
        />
      </div>
    )
  }
  componentWillMount () {
    document.addEventListener('keydown', this.setDestinationBasedOnKeyKode.bind(this))
  }
  setDestinationBasedOnKeyKode (e) {
    const destination = this.props.destination
    if (e.keyCode === 37) {
      this.props.setDestination({
        x: (destination.x ? destination.x : destination.x) - 1,
        y: (destination.y ? destination.y : destination.y),
      })
    }
    else if (e.keyCode === 38) {
      this.props.setDestination({
        x: (destination.x ? destination.x : destination.x),
        y: (destination.y ? destination.y : destination.y) - 1,
      })
    }
    else if (e.keyCode === 39) {
      this.props.setDestination({
        x: (destination.x ? destination.x : destination.x) + 1,
        y: (destination.y ? destination.y : destination.y),
      })
    }
    else if (e.keyCode === 40) {
      this.props.setDestination({
        x: (destination.x ? destination.x : destination.x),
        y: (destination.y ? destination.y : destination.y) + 1,
      })
    }
  }
}
