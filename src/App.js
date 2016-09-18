import React, { Component } from 'react'
import Ui from './modules/Ui/Ui'
// import World from './modules/World/World'
import './App.css'

const LOG = [`[SYSTEM] System online.`,
    `[SYSTEM] Starting services.`,
    `[SYSTEM] Distress call nearby.`,
    `[SYSTEM] Starting Autopilot.`,
]
const GAMESPEED = 100
const DESTINATION = {x: 52, y: 58}
const DIFFICULTY = 0.999999999
const DOTS = [ { x:52, y:58, type: 'signal', color: 'blue', name: 'distress call', },
               { x:52, y:58, type: 'loot', color: 'transparent', name: 'spooky wreck', },
              { x:52, y:58, type: 'ship', color: 'transparent', name: 'ghost pirate', },
             ].concat(generateDots(250, {
               color: 'rgba(255,0,0, 0.15)',
               name: 'bloody pirate' ,
               type: 'ship',
             })).concat(generateDots(5, {
               color: 'green',
               name: 'military storage facility',
               type: 'station',
             }))

function generateDots (n, dot) {
  let dots = []
  for (let i = 0; i < n; i++ ) {
    let x = Math.floor((Math.random() * 100))
    let y = Math.floor((Math.random() * 100))
    dots.push(Object.assign({ x, y }, dot))
  }
  return dots
}

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
          dots={ this.dots }
          setDestination={ this.setDestination.bind(this) }
          modifyDestinationBasedOnDirection={ this.modifyDestinationBasedOnDirection.bind(this) }
          state={ this.state }
        />
      </div>
    )
  }

  constructor () {
    super()
    this.state = {
      piratesInbound: false,
      destination: DESTINATION,
      direction: {x:null, y:null},
      dots: DOTS,
      gameSpeed: GAMESPEED,
      difficulty: DIFFICULTY,
      intervalId: this._start(),
      log: LOG,
      ticks: 0,
      self: {
        x:53,
        y:57,
        inventory: [
          { name: 'food', quantity: Infinity},
          { name: 'water', quantity: Infinity},
          { name: 'fuel', quantity: Infinity},
          { name: '$', quantity: 0},
        ]
      },
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
    if (s.piratesInbound && s.stopped) {
      this._battle()
    }
  }

  _addTravelPath () {
    let s = this.state
    s.log.push(`[AUTOPILOT] Round: ${ s.ticks }. Position: ${ s.self.x },${ s.self.y }.`)
    s.dots.push({ x: s.self.x, y: s.self.y, type: 'bookmark', color: 'rgba(255,255,255, 0.1)', name: 'travel path', })
    this.setState(s)
  }

  _moveOnce () {
    let s = this.state
    let shouldStop = s.self.x === s.destination.x && s.self.y === s.destination.y
    if (shouldStop) {
      this._stopShip()
    } else {
      s.direction = {x:null, y:null}
      if (s.self.x < s.destination.x) { s.self.x++; s.direction.x = true }
      if (s.self.y > s.destination.y) { s.self.y--; s.direction.y = false }
      if (s.self.x > s.destination.x) { s.self.x--; s.direction.x = false }
      if (s.self.y < s.destination.y) { s.self.y++; s.direction.y = true }
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
        s.piratesInbound = true
        s.log.push(`[${dot.name.toUpperCase()}] YARRRRRR!`)
      }
    })
    s.scan = result
    this.setState(s)
  }

  _battle () {
    let s = this.state
    let pirate = s.scan.filter((dot, i) => { return dot.name.indexOf('pirate') >= 0 ? dot : false })[0]
    s.log.push(`[${ pirate.name.toUpperCase() }] Ye shouldn't 'ave stopped 'ere fools!`)
    s.log.push(`[${ pirate.name.toUpperCase() }] Get 'em!`)

    /**
     * difficulty should be 5 or more to win every time "take one hit then shoot em down"
     * @type {Float}
     */
    const extra = s.difficulty * 0.1

    /**
     * Float number from 0 to 1
     * @type {Float}
     */
    const zeroPointSomething = Math.random()

    /**
     * Float number from -0.5 to 0.5
     * @type {Float}
     */
    const aMatterOfWhoShootsFirst = zeroPointSomething - 0.5

    /**
     * @type {Boolean}
     */
    const result = aMatterOfWhoShootsFirst + extra > 0

    /**
     * Action!
     */
    if (result) {
      s.log.push(`[AUTOPILOT] Aiming lazer blasters.`)
      s.log.push(`[AUTOPILOT] Enemy eliminated.`)
      this.loot(100)
      s.piratesInbound = false
    } else {
      s.log.push(`[AUTOPILOT] Incoming missiles!`)
      s.log.push(`[${ pirate.name.toUpperCase() }] NOW YE DIE, YARR!`)
      s.log.push(`[AUTOPILOT] Ship is taking damage!`)
      s.log.push(`[${ pirate.name.toUpperCase() }] HA-HA-HA-HA!`)
    }

    this.setState(s)
  }

  loot (dollars) {
    let s = this.state
    s.self.inventory[3].quantity += dollars
    s.log.push(`[AUTOPILOT] Looted ${ dollars } dollars.`)
    this.setState(s)
  }

  modifyDestinationBasedOnDirection (direction) {
    const s = this.state
    let d = s.destination
    if (direction.x === true) d.x++
    if (direction.x === false) d.x--
    if (direction.y === true) d.y++
    if (direction.y === false) d.y--
    this.setDestination(d)
  }

  setDestination (destination) {
    let s = this.state
    if (s.stopped && s.piratesInbound) {
      s.log.push(`[${ s.scan.filter((dot) => { return dot.name.indexOf('pirate') >= 0 ? dot : false })[0].name.toUpperCase() }] Gotha! YARRR!`)
    } else {
      s.destination = destination
      this._stopShip()
      s.intervalId = this._start()
      s.log.push(`[AUTOPILOT] Destination set.`)
    }
    this.setState(s)
  }

}
