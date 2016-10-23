// @flow

import React, { Component } from 'react'
import Autopilot from './modules/Autopilot/Autopilot'
import Ui from './modules/Ui/Ui'
import World from './modules/World/World'
import './App.css'


export default class App extends Component {

  autopilot: Object
  state: Object

  constructor () {
    super()
    const world = new World()
    this.autopilot = new Autopilot(world)
    this.state = {
      appSize: this.getAppSize()
    }
  }

  componentDidMount (): void {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  getAppSize (): number {
    const h = window.innerHeight
    const w = window.innerWidth
    const low = h > w ? w : h
    return low
  }

  getStyle (): Object {
    const appSize = this.state.appSize
    return {
      height: `${ appSize }px`,
      width: `${ appSize }px`,
      marginLeft: `-${ appSize / 2 }px`,
    }
  }

  onResize (): void {
    const nextState = this.state
    nextState.appSize = this.getAppSize()
    this.setState(nextState)
  }

  render () {
    return (
      <div className='App' style={ this.getStyle() }>
        <Ui autopilot={ this.autopilot } />
      </div>
    )
  }

}
