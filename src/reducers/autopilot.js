// @flow

import { Map as map } from 'immutable'


const logs = [`[SYSTEM] System online.`]
const destination = {x: 50, y: 50}
const position = {x: 50, y: 50}
const resources = map({
  dollars: 0,
  fuel: Infinity,
})
const initialState = {
  destination,
  logs,
  position,
  resources,
}

const reducer = (state: Object = initialState, action: Object) => {
  const nextState = Object.assign({}, state)
  const print = (message) => {
    nextState.logs.unshift(message)
    nextState.logs = nextState.logs.splice(0, 10)
  }
  switch (action.type) {
    case 'SET_DESTINATION':
      nextState.destination = action.coordinates
      print(`[SYSTEM] Destination set to ${ action.coordinates.x },${ action.coordinates.y }.`)
      return nextState
    case 'RUN_COMMAND':
      if (action.command === 'STOP' || action.command === 'S') {
        print(`[SYSTEM] Stopped.`)
      } else if (action.command === 'DOCK' || action.command === 'D') {
        print(`[SYSTEM] Docking.`)
      } else if (action.command === 'AUTO' || action.command === 'A') {
        print(`[SYSTEM] Autopiloting.`)
      } else if (action.command === 'WARP' || action.command === 'W') {
        print(`[SYSTEM] Warping.`)
        if (nextState.position.x < nextState.destination.x) nextState.position.x++
        if (nextState.position.y > nextState.destination.y) nextState.position.y--
        if (nextState.position.x > nextState.destination.x) nextState.position.x--
        if (nextState.position.y < nextState.destination.y) nextState.position.y++
      } else {
        print(`[ERROR] ${ action.command }: Command not found.`)
      }
      return nextState
    default:
      return state
  }
}

export default reducer
