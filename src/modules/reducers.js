// @flow

import Autopilot from './Autopilot/Autopilot'
import World from './World/World'


const world = new World()
const initialState = new Autopilot(world)
initialState.logs.push(`[SYSTEM] System online.`)

const reducer = (state: Object = initialState, action: Object) => {
  const autopilot = Object.assign({}, state)
  const log = (message) => {
    autopilot.logs.unshift(message)
    autopilot.logs = autopilot.logs.splice(0, 10)
  }
  switch (action.type) {
    case 'TICK':
      autopilot.time++
      return autopilot
    case 'SET_DESTINATION':
      autopilot.destination = action.coord
      log(`[SYSTEM] Destination set to ${ action.coord.x },${ action.coord.y }.`)
      return autopilot
    case 'RUN_COMMAND':
      log(`[ERROR] ${ action.command }: Command not found.`)
      return autopilot
    default:
      return autopilot
  }
}

export default reducer
