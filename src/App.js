import React, { Component } from 'react'
import Ui from './modules/Ui/Ui'
import World from './modules/World/World'
import './App.css'

export default class App extends Component {

  render () {
    const h = window.innerHeight
    const w = window.innerWidth
    const low = h > w ? w : h
    return (
      <div className="App" style={{
        height: low + 'px',
        width: low + 'px',
        marginLeft: '-' + (low / 2) + 'px',
      }}>
        <Ui
          dots={ this.state.dots }
          // setDestination={ this.setDestination.bind(this) }
          // modifyDestinationBasedOnDirection={ this.modifyDestinationBasedOnDirection.bind(this) }
          // state={ this.state }
        />
      </div>
    )
  }

  constructor () {
    super()

    let world = new World()

    this.state = {
      // piratesInbound: false,
      // destination: world.autopilot.destination,
      // direction: {x:null, y:null},
      // dots: DOTS,
      // gameSpeed: GAMESPEED,
      // intervalId: this._start(),
      // log: LOG,
      // ticks: 0,
      // self: {
      //   x:53,
      //   y:57,
      //   inventory: [
      //     { name: 'food', quantity: Infinity},
      //     { name: 'water', quantity: Infinity},
      //     { name: 'fuel', quantity: Infinity},
      //     { name: '$', quantity: 0},
      //   ]
      // },
      // stopped: true,
    }
  }


}
