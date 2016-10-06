import WorldTickAutopilotDestination from './WorldTickAutopilotDestination'
import WorldTickAutopilotScan from './WorldTickAutopilotScan'

export default class WorldTickAutopilot {

  constructor () {
    this._destination = new WorldTickAutopilotDestination()
    this._scan = new WorldTickAutopilotScan()
  }

  _autoPilot () {
    this._increaseTick()
    this._tick()
  }



  _tick () {
    this._addTravelPath()
    this._moveOnce()
    this._localScan()
    this._encounters()
  }



  _increaseTick () {
    let s = this.state
    s.ticks++
    this.setState(s)
  }

  _start () {
    return setInterval(this._autoPilot.bind(this), this.gameSpeed)
  }

  _stopShip () {
    let s = this.state
    clearInterval(s.intervalId)
    s.intervalId = null
    s.stopped = true
    s.log.unshift(`[AUTOPILOT] Ship stopped.`)
    this.setState(s)
  }


}
