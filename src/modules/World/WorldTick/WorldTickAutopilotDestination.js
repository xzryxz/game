import WorldTickAutopilotDestinationMove from './WorldTickAutopilotDestinationMove'

export default class WorldTickAutopilotDestination {

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
      s.log.unshift(`[${ s.scan.filter((dot) => { return dot.name.indexOf('pirate') >= 0 ? dot : false })[0].name.toUpperCase() }] Gotha! YARRR!`)
    } else {
      s.destination = destination
      this._stopShip()
      s.intervalId = this._start()
      s.log.unshift(`[AUTOPILOT] Destination set.`)
    }
    this.setState(s)
  }

}
