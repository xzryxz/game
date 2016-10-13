export default class AutopilotCargo {

  constructor () {
    this._resources = {
      dollars: 0,
      fuel: Infinity,
      provisions: Infinity,
    }
  }

  get resources () {
    return this._resources
  }

  loot (dollars) {
    let s = this.state
    s.self.cargo[3].quantity += dollars
    s.log.unshift(`[AUTOPILOT] Looted ${ dollars } dollars.`)
    this.setState(s)
  }

}
