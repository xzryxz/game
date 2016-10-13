import React, { Component } from 'react'
import Autopilot from './modules/Autopilot/Autopilot'
import Ui from './modules/Ui/Ui'
import World from './modules/World/World'
import './App.css'

export default class App extends Component {

  constructor () {
    super()
    const world = new World()
    this.autopilot = new Autopilot(world)
  }

  get style () {
    const h = window.innerHeight
    const w = window.innerWidth
    const low = h > w ? w : h
    return {
      height: low + 'px',
      width: low + 'px',
      marginLeft: '-' + (low / 2) + 'px',
    }
  }

  render () {
    return (
      <div className="App" style={ this.style }>
        <Ui autopilot={ this.autopilot } />
      </div>
    )
  }

}
