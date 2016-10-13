import Cargo from './AutopilotCargo'
import Engine from './AutopilotEngine'
import Log from './AutopilotLog'
import Scan from './AutopilotScan'
import Turret from './AutopilotTurret'

export default class Autopilot {

  constructor (props) {
    this._world = props.world
    this._destination = null
    this._position = {x: 50, y: 50}
    this._intervalId = null
    this._time = null
    this._modules = {
      cargo: new Cargo(),
      engine: new Engine(),
      log: new Log(),
      scan: new Scan(),
      turret: new Turret(),
    }
  }

  _clearInterval () {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  _tick () {
    this._increaseTick()
    // this._localScan()
    // this._encounters()
    // if (destination) this.engine.warp()
    this.uiUpdateFn(this)
  }

  _increaseTick () {
    if (this._time === null) {
      this._time = 0
      this.modules.log.write(`[SYSTEM] Autopilot initiated.`)
    } else {
      this._time++
    }
  }

  get destination () {
    return this._destination
  }

  set destination (coordinates) {
    this._destination = coordinates
    this.modules.log.write(`[SYSTEM] Destination set to ${ coordinates.x },${ coordinates.y }.`)
  }

  get direction () {
    const destination = this.destination
    if (destination) {
      const position = this.position
      let direction = {x:null, y:null}
      if (position.x < destination.x) { direction.x = true } // position.x++;
      if (position.y > destination.y) { direction.y = false } // position.y--;
      if (position.x > destination.x) { direction.x = false } // position.x--;
      if (position.y < destination.y) { direction.y = true } // position.y++;
      return direction
    }
  }

  get intervalId () {
    return this._intervalId
  }

  set intervalId (id) {
    if (this.intervalId !== null) {
      this._clearInterval()
    }
    if (this.intervalId === null) {
      this._intervalId = id
    }
  }

  get modules () {
    return this._modules
  }

  get position () {
    return this._position
  }

  get time () {
    return this._time
  }

  boot (uiUpdateFn) {
    this.uiUpdateFn = uiUpdateFn
    this.modules.log.write(`[SYSTEM] System online.`)
    this.intervalId = setInterval(this._tick.bind(this), 2000)
  }

  moveInDirection (direction) {
    let coordinates = this.position
    if (direction.x === true) coordinates.x++
    if (direction.x === false) coordinates.x--
    if (direction.y === true) coordinates.y++
    if (direction.y === false) coordinates.y--
    this.destination = coordinates
  }

}
