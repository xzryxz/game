import React, { Component } from 'react';
import Console from './Console.js';
import Overview from './Overview.js';
import Ship from './Ship.js';
import Radar from './Radar.js';
import './App.css';

const LOG = [
  `[SYSTEM] System online.`,
  `[SYSTEM] Starting services.`,
  `[SYSTEM] Detected distress call nearby.`,
  `[SYSTEM] Setting destination.`,
]
const GAMESPEED = 2000
const SELF = {x:54, y:61}
const DEST = {x:52, y:58}
const DOTS = [
  { x:52, y:58, type: 'beacon', color: 'green', name: 'rescue beacon', },
  { x:52, y:58, type: 'loot', color: 'transparent', name: 'spooky wreck', },
  { x:52, y:58, type: 'ship', color: 'transparent', name: 'ghost pirate', },
].concat(generateDots(100, {
  color: 'rgba(255,0,0, 0.1)',
  name: 'bloody pirate' ,
  type: 'ship',
})).concat(generateDots(3, {
  color: 'green',
  name: 'container',
  type: 'loot',
})).concat(generateDots(2, {
  color: 'blue',
  name: 'deep space mining company',
  type: 'station',
})).concat(generateDots(1, {
  color: 'blue',
  name: 'military storage facility',
  type: 'station',
}))

function generateDots (n, dot) {
  let dots = []
  for (let i = 0; i < n; i++ ) {
    let x = Math.floor((Math.random() * 100));
    let y = Math.floor((Math.random() * 100));
        dots.push(Object.assign({ x, y }, dot))
  }
  return dots
}


class App extends Component {
  constructor () {
    super()
    this.state = {
      gameSpeed: GAMESPEED,
      direction: {x:null, y:null},
      self: SELF,
      dest: DEST,
      dots: DOTS,
      intervalId: this.start(),
      log: LOG,
      caughtByPirate: false,
      stopped: false,
    }
  }
  get gameSpeed () {
    return this.state ? this.state.gameSpeed : GAMESPEED
  }
  set gameSpeed (gameSpeed) {
    if (typeof gameSpeed !== 'number') throw new Error('game speed must be a number')
    let s = this.state
    s.gameSpeed = gameSpeed
    this.setState(s)
  }
  get dots () {
    return this.state.dots
  }
  start () {
    return setInterval(this.autoPilot.bind(this), this.gameSpeed)
  }
  stopShip () {
    let s = this.state
    clearInterval(s.intervalId)
    s.intervalId = null
    s.stopped = true
    s.log.push(`[AUTOPILOT] Ship stopped.`)
    this.setState(s)
  }
  autoPilot () {
    let s = this.state
    s.log.push(`[AUTOPILOT] Currently at ${ s.self.x },${ s.self.y }.`)
    if (s.dest.x === null && s.dest.y === null) {
      s.log.push(`[AUTOPILOT] No destination found.`)
      this.setState(s)
      this.stopShip()
    } else {
      this.moveOnce()
      this.localScan()
      this.encounters()
    }
  }
  encounters () {
    let s = this.state
    if (s.caughtByPirate && !s.stopped) {
      s.caughtByPirate = false // auto win
      s.log.push(`[AUTOPILOT] Escapive maneuver!`)
      this.setState(s)
    }
    if (s.caughtByPirate && s.stopped) {
      this.battle()
    }
  }
  battle () {
    let s = this.state
    let pirate = s.scan.filter((dot, i) => { return dot.name.indexOf('pirate') >= 0 ? dot : false })[0]
    s.log.push(`[${ pirate.name.toUpperCase() }] Ye shouldn't 'ave stopped 'ere fool!`)
    let victory = Math.random() - 0.5
    if (victory > 0) {
      s.log.push(`[AUTOPILOT] Enemy eliminated.`)
      s.caughtByPirate = false
    } else {
      s.log.push(`[${ pirate.name.toUpperCase() }] NOW YE DIE, YARR!`)
      s.log.push(`[AUTOPILOT] Ship is taking damage!`)
      s.log.push(`[${ pirate.name.toUpperCase() }] HA-HA-HA-HA!`)
    }
    this.setState(s)
  }
  addTravelPath () {
    let s = this.state
    s.dots.push({
      x: s.self.x,
      y: s.self.y,
      type: 'bookmark',
      color: 'rgba(255,255,255, 0.1)',
      name: 'travel path',
    })
    this.setState(s)
  }
  moveOnce () {
    this.addTravelPath()
    let s = this.state
    s.stopped = s.self.x === s.dest.x && s.self.y === s.dest.y
    if (s.stopped) this.stopShip()
    s.log.push(`[AUTOPILOT] ${ s.stopped ? 'Ship has arrived at set destination.' : 'Moving at full speed.'}`)
    s.direction = {x:null, y:null}
    if (s.self.x < s.dest.x) { s.self.x++; s.direction.x = true }
    if (s.self.y > s.dest.y) { s.self.y--; s.direction.y = false }
    if (s.self.x > s.dest.x) { s.self.x--; s.direction.x = false }
    if (s.self.y < s.dest.y) { s.self.y++; s.direction.y = true }
    this.setState(s)
  }
  localScan (type) {
    let s = this.state
    const result = this.dots.filter((dot) => { return dot.x === s.self.x && dot.y === s.self.y ? dot : false })
    s.log.push(`[SCANNER] ${ result.filter((dot) => { return dot.type === 'ship' ? dot : false }).length > 0 ? 'You are not alone.' : 'You are in dark space.'}`)
    result.forEach((dot) => {
      if (dot.name.indexOf('pirate') >= 0) {
        s.caughtByPirate = true
        s.log.push(`[${dot.name.toUpperCase()}] YARRRRRR!`)
      }
    })
    s.scan = result
    this.setState(s)
  }
  setDest (dest) {
    let s = this.state
    if (s.stopped && s.caughtByPirate) {
      s.log.push(`[${ s.scan.filter((dot) => { return dot.name.indexOf('pirate') >= 0 ? dot : false })[0].name.toUpperCase() }] Gotha! YARRR!`)
    } else {
      s.dest = dest
      this.stopShip()
      s.intervalId = this.start()
      s.log.push(`[AUTOPILOT] Destination set.`)
    }
    this.setState(s)
  }
  render () {
    return (
      <div className="App">
        <Console log={ this.state.log } />
        <Ship direction={ this.state.direction } />
        <Radar
          dest={ this.state.dest }
          dots={ this.dots }
          self={ this.state.self }
          setDest={ this.setDest.bind(this) }
        />
        <Overview
          dest={ this.state.dest }
          dots={ this.dots }
          self={ this.state.self }
        />
      </div>
    );
  }
}

export default App;
