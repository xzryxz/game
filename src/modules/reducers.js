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
      if (action.command === 'STOP') {
        log(`[SYSTEM] Stopped.`)
      } else if (action.command === 'DOCK') {
        log(`[SYSTEM] Docking.`)
      } else if (action.command === 'AUTO') {
        log(`[SYSTEM] Autopiloting.`)
      } else if (action.command === 'WARP') {
        log(`[SYSTEM] Warping.`)
        if (autopilot.position.x < autopilot.destination.x) autopilot.position.x++
        if (autopilot.position.y > autopilot.destination.y) autopilot.position.y--
        if (autopilot.position.x > autopilot.destination.x) autopilot.position.x--
        if (autopilot.position.y < autopilot.destination.y) autopilot.position.y++
      } else {
        log(`[ERROR] ${ action.command }: Command not found.`)
      }
      return autopilot
    default:
      return autopilot
  }
}

export default reducer
