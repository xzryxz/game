import WorldTickAutopilot from './WorldTickAutopilot'

export default class WorldTick {

  constructor () {
    this._autopilot = new WorldTickAutopilot()
  }

  get autopilot () {
    return this._autopilot
  }

}
