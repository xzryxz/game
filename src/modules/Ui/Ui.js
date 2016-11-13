// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDestination } from './../actions'
import UiCommandline from './UiCommandline/UiCommandline'
import UiControls from './UiControls/UiControls'
import UiDestination from './UiDestination/UiDestination'
import UiLogs from './UiLogs/UiLogs'
import UiOverview from './UiOverview/UiOverview'
import UiPosition from './UiPosition/UiPosition'
import UiRadar from './UiRadar/UiRadar'
import UiResources from './UiResources/UiResources'
import UiTime from './UiTime/UiTime'
import './Ui.css'


class Ui extends Component {

  componentDidMount () {
    document.addEventListener('keydown', (event: Object) => {
      this.setDestinationBasedOnKeyKode(event.keyCode)
    })
  }

  setDestinationBasedOnKeyKode (keyCode: number) {
    const coord = Object.assign({}, this.props.destination)
    switch (keyCode) {
      case 37: coord.x--
        break
      case 38: coord.y--
        break
      case 39: coord.x++
        break
      case 40: coord.y++
        break
      default: break
    }
    if (coord.x !== this.props.destination.x || coord.y !== this.props.destination.y) {
      this.props.setDestination(coord)
    }
  }

  render () {
    return (
      <div className='Ui'>
        <div className='statusbar'>
          <UiResources />
          <UiTime />
        </div>
        <div className='instruments'>
          <UiOverview />
          <div className='navigation'>
            <UiDestination />
            <UiPosition />
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
  destination: state.destination
})

const mapDispatchToProps = (dispatch) => ({
  setDestination: (coord) => dispatch(setDestination(coord))
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Ui)

export default connected
