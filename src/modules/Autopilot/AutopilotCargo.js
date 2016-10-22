// @flow

import { Map as map } from 'immutable'

export default class AutopilotCargo {

  resources: map<string, number>

  constructor () {
    this.resources = map({
      dollars: 0,
      fuel: Infinity,
    })
  }

  // loot (dollars: number): void {
  //   let s = this.state
  //   s.self.cargo[3].quantity += dollars
  //   s.log.unshift(`[AUTOPILOT] Looted ${ dollars } dollars.`)
  //   this.setState(s)
  // }

}
