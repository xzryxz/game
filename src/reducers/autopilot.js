// @flow

import Autopilot from './../modules/Autopilot'


const initialAutopilot = new Autopilot()

initialAutopilot.logs.push(`[SYSTEM] System online.`)

const autopilot = (prevState: Object = initialAutopilot, action: Object) => {
  const state = Object.assign({}, prevState)
  const log = (message) => {
    state.logs.unshift(message)
    state.logs = state.logs.splice(0, 10)
  }
  switch (action.type) {
    case 'TICK':
      state.time++
      return state
    case 'SET_DESTINATION':
      state.destination = action.coordinates
      log(`[SYSTEM] Destination set to ${ action.coordinates.x },${ action.coordinates.y }.`)
      return state
    case 'RUN_COMMAND':
      if (action.command === 'STOP') {
        log(`[SYSTEM] Stopped.`)
      } else if (action.command === 'DOCK') {
        log(`[SYSTEM] Docking.`)
      } else if (action.command === 'AUTO') {
        log(`[SYSTEM] Autopiloting.`)
      } else if (action.command === 'WARP') {
        log(`[SYSTEM] Warping.`)
        if (state.position.x < state.destination.x) state.position.x++
        if (state.position.y > state.destination.y) state.position.y--
        if (state.position.x > state.destination.x) state.position.x--
        if (state.position.y < state.destination.y) state.position.y++
      } else {
        log(`[ERROR] ${ action.command }: Command not found.`)
      }
      return state
    default:
      return state
  }
}

export default autopilot
