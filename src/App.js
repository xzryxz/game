// @flow

import React, { Component } from 'react'
import Ui from './modules/Ui/Ui'
import './App.css'


export default class App extends Component {

  state: Object

  constructor () {
    super()
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
        <Ui />
      </div>
    )
  }

}
