import React, { Component } from 'react';
import Console from './Console.js';
import Overview from './Overview.js';
import Radar from './Radar.js';
import RadarControls from './RadarControls.js';
import Inventory from './Inventory.js';
import './App.css';

const INVENTORY = [
  { name: 'food', quantity: Infinity},
  { name: 'water', quantity: Infinity},
  { name: 'fuel', quantity: Infinity},
  { name: '$', quantity: 0},
]
const LOG = [
  `[SYSTEM] System online.`,
  `[SYSTEM] Starting services.`,
  `[SYSTEM] Distress call nearby.`,
  `[SYSTEM] Starting Autopilot.`,
]
const GAMESPEED = 2000
const SELF = {x:53, y:57, inventory: INVENTORY}
const DEST = {x:52, y:58}
const DOTS = [
  { x:52, y:58, type: 'signal', color: 'green', name: 'distress call', },
  { x:52, y:58, type: 'loot', color: 'transparent', name: 'spooky wreck', },
  { x:52, y:58, type: 'ship', color: 'transparent', name: 'ghost pirate', },
].concat(generateDots(100, {
  color: 'rgba(255,0,0, 0.25)',
  name: 'bloody pirate' ,
  type: 'ship',
})).concat(generateDots(3, {
  color: 'green',
  name: 'space junk',
  type: 'beacon',
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
  render () {
    return (
      <div className="App">
        <Console
          log={ this.state.log }
        />
        <Radar
          dest={ this.state.dest }
          direction={ this.state.direction }
          dots={ this.dots }
          self={ this.state.self }
          setDest={ this._setDest.bind(this) }
        />
        <Overview
          dest={ this.state.dest }
          dots={ this.dots }
          self={ this.state.self }
        />
        <Inventory
          self={ this.state.self }
        />
        <RadarControls
          direction={ this.state.direction }
          modifyDestBasedOnDir={ this._modifyDestBasedOnDir.bind(this) }
          stopped={ this.state.stopped }
        />
      </div>
    );
  }
  constructor () {
    super()
    this.state = {
      caughtByPirate: false,
      dest: DEST,
      direction: {x:null, y:null},
      dots: DOTS,
      gameSpeed: GAMESPEED,
      intervalId: this._start(),
      log: LOG,
      ticks: 0,
      self: SELF,
      stopped: true,
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
  _modifyDestBasedOnDir (direction) {
    const s = this.state
    let d = s.dest
    if (direction.x === true) d.x++
    if (direction.x === false) d.x--
    if (direction.y === true) d.y++
    if (direction.y === false) d.y--
    this._setDest(d)
  }
  _start () {
    return setInterval(this._autoPilot.bind(this), this.gameSpeed)
  }
  _stopShip () {
    let s = this.state
    clearInterval(s.intervalId)
    s.intervalId = null
    s.stopped = true
    s.log.push(`[AUTOPILOT] Ship stopped.`)
    this.setState(s)
  }
  _autoPilot () {
    this._increaseTick()
    this._tick()
  }
  _increaseTick () {
    let s = this.state
    s.ticks++
    this.setState(s)
  }
  _tick () {
    this._addTravelPath()
    this._moveOnce()
    this._localScan()
    this._encounters()
  }
  _encounters () {
    let s = this.state
    if (s.caughtByPirate && s.stopped) {
      this._battle()
    }
  }
  _battle () {
    let s = this.state
    let pirate = s.scan.filter((dot, i) => { return dot.name.indexOf('pirate') >= 0 ? dot : false })[0]
    s.log.push(`[${ pirate.name.toUpperCase() }] Ye shouldn't 'ave stopped 'ere fools!`)
    s.log.push(`[${ pirate.name.toUpperCase() }] Get 'em!`)
    let victory = Math.random() - 0.5
    if (victory > 0) {
      s.log.push(`[AUTOPILOT] Aiming lazer blasters.`)
      s.log.push(`[AUTOPILOT] Enemy eliminated.`)
      s.caughtByPirate = false
    } else {
      s.log.push(`[AUTOPILOT] Incoming missiles!`)
      s.log.push(`[${ pirate.name.toUpperCase() }] NOW YE DIE, YARR!`)
      s.log.push(`[AUTOPILOT] Ship is taking damage!`)
      s.log.push(`[${ pirate.name.toUpperCase() }] HA-HA-HA-HA!`)
    }
    this.setState(s)
  }
  _addTravelPath () {
    let s = this.state
    s.log.push(`[AUTOPILOT] Round: ${ s.ticks }. Position: ${ s.self.x },${ s.self.y }.`)
    s.dots.push({
      x: s.self.x,
      y: s.self.y,
      type: 'bookmark',
      color: 'rgba(255,255,255, 0.1)',
      name: 'travel path',
    })
    this.setState(s)
  }
  _moveOnce () {
    let s = this.state
    let shouldStop = s.self.x === s.dest.x && s.self.y === s.dest.y
    if (shouldStop) {
      this._stopShip()
    } else {
      s.direction = {x:null, y:null}
      if (s.self.x < s.dest.x) { s.self.x++; s.direction.x = true }
      if (s.self.y > s.dest.y) { s.self.y--; s.direction.y = false }
      if (s.self.x > s.dest.x) { s.self.x--; s.direction.x = false }
      if (s.self.y < s.dest.y) { s.self.y++; s.direction.y = true }
    }
    s.stopped = shouldStop
    s.log.push(`[AUTOPILOT] ${ s.stopped ? 'Ship has arrived at set destination.' : 'Moving at full speed.'}`)
    this.setState(s)
  }
  _localScan (type) {
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
  _setDest (dest) {
    let s = this.state
    if (s.stopped && s.caughtByPirate) {
      s.log.push(`[${ s.scan.filter((dot) => { return dot.name.indexOf('pirate') >= 0 ? dot : false })[0].name.toUpperCase() }] Gotha! YARRR!`)
    } else {
      s.dest = dest
      this._stopShip()
      s.intervalId = this._start()
      s.log.push(`[AUTOPILOT] Destination set.`)
    }
    this.setState(s)
  }
}

export default App;
