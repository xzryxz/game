// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDestination } from './../../actions/autopilot'
import UiCommandline from './UiCommandline'
import UiControls from './UiControls'
import UiDestination from './UiDestination'
import UiLogs from './UiLogs'
import UiOverview from './UiOverview'
import UiPosition from './UiPosition'
import UiRadar from './UiRadar'
import UiResources from './UiResources'
import UiTime from './UiTime'
import './Ui.css'


class Ui extends Component {

  componentDidMount () {
    document.addEventListener('keydown', (event: Object) => {
      this.setDestinationBasedOnKeyKode(event.keyCode)
    })
  }

  setDestinationBasedOnKeyKode (keyCode: number) {
    const coordinates = Object.assign({}, this.props.destination)
    switch (keyCode) {
      case 37: coordinates.x--
        break
      case 38: coordinates.y--
        break
      case 39: coordinates.x++
        break
      case 40: coordinates.y++
        break
      default: break
    }
    if (coordinates.x !== this.props.destination.x || coordinates.y !== this.props.destination.y) {
      this.props.setDestination(coordinates)
    }
  }

  render () {
    const compare = (a, b) => a.x === b.x && a.y === b.y
    const hasDestination = compare(this.props.destination, this.props.position)
    return (
      <div className='Ui'>
        <div className='statusbar'>
          <UiResources />
          <UiTime />
        </div>
        <div className='instruments'>
          <UiOverview />
          <div className='navigation'>
            <UiPosition />
            { hasDestination && <UiDestination /> }
            <UiControls />
          </div>
          <UiRadar />
        </div>
        <div className='terminal'>
          <UiCommandline />
          <UiLogs />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  destination: {
    x: state.autopilot.destination.x,
    y: state.autopilot.destination.y,
  },
  position: {
    x: state.autopilot.position.x,
    y: state.autopilot.position.y,
  },
})

const mapDispatchToProps = (dispatch) => ({
  setDestination: (coordinates) => dispatch(setDestination(coordinates))
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Ui)

export default connected
