// @flow

// import { Map as map } from 'immutable'
import Cargo from './AutopilotCargo'
import Engine from './AutopilotEngine'
import Logger from './AutopilotLogger'
import Scanner from './AutopilotScanner'
import Turret from './AutopilotTurret'


export default class Autopilot {

  destination: Object
  modules: Object
  position: Object
  time: number
  uiUpdateFn: Function
  world: Object

  constructor (world: Object) {
    this.destination = {x: 50, y: 50}
    this.modules = {
      cargo: new Cargo(),
      engine: new Engine(),
      logger: new Logger(),
      scanner: new Scanner(),
      turret: new Turret(),
    }
    this.position = {x: 50, y: 50}
    this.time = 0
    this.world = world
    document.addEventListener('keydown', this.setDestinationBasedOnKeyKode.bind(this))
  }

  boot (uiUpdateFn: Function): void {
    this.uiUpdateFn = uiUpdateFn
    this.modules.logger.log(`[SYSTEM] System online.`)
    setInterval(this.tick.bind(this), 2000)
  }

  setDestination (coordinates: Object): void {
    if (typeof coordinates.x === 'number' && typeof coordinates.y === 'number') {
      this.destination = coordinates
      this.modules.logger.log(`[SYSTEM] Destination set to ${ coordinates.x },${ coordinates.y }.`)
      this.uiUpdateFn(this)
    }
  }

  setDestinationBasedOnKeyKode (event: Object) {
    const coordinates = Object.assign({}, this.destination)
    switch (event.keyCode) {
      case 37: coordinates.x--
        break
      case 38: coordinates.y--
        break
      case 39: coordinates.x++
        break
      case 40: coordinates.y++
        break
      default: break
    }
    if (coordinates.x !== this.destination.x || coordinates.y !== this.destination.y) {
      this.setDestination(coordinates)
    }
  }

  tick (): void {
    this.time++
    // this.localScan()
    // this.encounters()
    // if (destination) this.engine.warp()
    this.uiUpdateFn(this)
  }

}
