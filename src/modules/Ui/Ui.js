// @flow

import React, { Component } from 'react'
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


export default class Ui extends Component {

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
