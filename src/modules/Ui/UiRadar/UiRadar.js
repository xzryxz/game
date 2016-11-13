// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import UiRadarMap from './UiRadarMap'
import './UiRadar.css'


export default class UiRadarComponent extends Component {

  render () {
    return (
      <div className='UiRadar'>
        <UiRadarMap autopilot={ this.props.autopilot } />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  autopilot: state.destination
})

const UiRadar = connect(mapStateToProps)(UiRadarComponent)

export default UiRadar
