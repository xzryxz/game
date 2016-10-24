// @flow

import React, { Component } from 'react';
import UiRadarMap from './UiRadarMap'
import './UiRadar.css'


export default class UiRadar extends Component {

  render () {
    return (
      <div className='UiRadar'>
        <UiRadarMap autopilot={ this.props.autopilot } />
      </div>
    )
  }

}
