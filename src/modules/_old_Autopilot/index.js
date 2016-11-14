// @flow

import Cargo from './AutopilotCargo'
import Engine from './AutopilotEngine'
import Scanner from './AutopilotScanner'
import Shield from './AutopilotShield'
import Turret from './AutopilotTurret'


export default class Autopilot {

  destination: Object
  logs: Array<string>
  modules: Object
  position: Object
  time: number

  constructor () {
    this.destination = {x: 50, y: 50}
    this.logs = []
    this.modules = {
      cargo: new Cargo(),
      engine: new Engine(),
      scanner: new Scanner(),
      shield: new Shield(),
      turret: new Turret(),
    }
    this.position = {x: 50, y: 50}
    this.time = 0
  }

}
