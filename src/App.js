import React, { Component } from 'react';
import Console from './Console.js';
import Overview from './Overview.js';
import Ship from './Ship.js';
import Radar from './Radar.js';
import './App.css';


const GAMESPEED = 1000
const SELF = {x:54, y:61}
const DEST = {x:52, y:58}
const DOTS = [
  { x:52, y:58, type: 'beacon', color: 'yellow', name: 'distress call', },
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
      log: [],
      caughtByPirate: false
    }
    this.state.log.push(`[${ Date.now() }] [SYSTEM] System online.`)
    this.state.log.push(`[${ Date.now() }] [SYSTEM] Booting AUTO bot.`)
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
    return setInterval(this.autoMove.bind(this), this.gameSpeed)
  }
  flushInterval () {
    let s = this.state
    clearInterval(s.intervalId)
    s.intervalId = null
    this.setState(s)
  }
  autoMove () {
    let s = this.state
    s.log = []
    if (s.dest.x === null && s.dest.y === null) {
      s.log.push(`[${ Date.now() }] [SYSTEM] No destination found.`)
      s.log.push(`[${ Date.now() }] [SYSTEM] Drifting. `)
      this.flushInterval()
    } else {
      s.caughtByPirate = false
      s.direction = {x:null, y:null}
      if (s.self.x < s.dest.x) { s.self.x++; s.direction.x = true }
      if (s.self.y > s.dest.y) { s.self.y--; s.direction.y = false }
      if (s.self.x > s.dest.x) { s.self.x--; s.direction.x = false }
      if (s.self.y < s.dest.y) { s.self.y++; s.direction.y = true }
      if (this.areWeThereYet()) this.flushInterval()
      s.log.push(`[${ Date.now() }] [AUTO] Currently at ${ this.state.self.x },${ this.state.self.y }.`)
      s.log.push(`[${ Date.now() }] [AUTO] ${this.areWeThereYet() ? 'Ship has arrived at set destination.' : 'Moving at full speed.'}`)
      s.log.push(`[${ Date.now() }] [SCANNER] ${this.getLocalScan().filter((dot) => { return dot.type === 'ship' ? dot : false }).length > 0 ? 'You are not alone.' : 'You are in dark space.'}`)
      if (this.getLocalScan().length > 0) {
        this.getLocalScan().forEach((dot) => {
          if (dot.name.indexOf('pirate') >= 0) {
            s.caughtByPirate = true
            s.log.push(`[${ Date.now() }] [${dot.name.toUpperCase()}] YARRRRRR!`)
          }
        })
      }
      if (s.caughtByPirate) {
        s.caughtByPirate = false
        s.log.push(`[${ Date.now() }] [AUTO] Running defensive maneuver.`)
      }
      s.dots.push({
        x: s.self.x,
        y: s.self.y,
        type: 'bookmark',
        color: 'rgba(255,255,255, 0.1)',
        name: 'travel path',
      })
      this.setState(s)
    }
  }
  areWeThereYet () {
    let s = this.state
    return s.self.x === s.dest.x && s.self.y === s.dest.y
  }
  getLocalScan () {
    const result = this.dots.filter(function (dot) {
      if (dot.x === this.state.self.x && dot.y === this.state.self.y) {
        return dot
      }
    }.bind(this))
    return result
  }
  setDest (dest) {
    let s = this.state
    if (s.caughtByPirate) {
      s.log.push(`[${ Date.now() }] [SYSTEM] Unable to move.`)
    } else {
      s.dest = dest
      this.flushInterval()
      s.intervalId = this.start()
      s.log.push(`[${ Date.now() }] [COMMAND] Destination set.`)
      s.log.push(`[${ Date.now() }] [SYSTEM] AUTO-bot started auto-piloting.`)
    }
    this.setState(s)
  }
  render () {
    return (
      <div className="App">
        <Console output={ this.state.log } />
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
