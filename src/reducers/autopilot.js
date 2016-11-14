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
  active: false,
  destination,
  logs,
  position,
  resources,
  time: 0,
}

const reducer = (state: Object = initialState, action: Object) => {
  const nextState = Object.assign({}, state)
  const print = (message) => {
    nextState.logs.unshift(message)
    nextState.logs = nextState.logs.splice(0, 10)
  }
  switch (action.type) {
    case 'TICK':
      nextState.time++
      if (nextState.active && nextState.position.x === nextState.destination.x && nextState.position.y === nextState.destination.y) {
        print(`[SYSTEM] Arrived at destination.`)
        nextState.active = false
      } else if (nextState.active) {
        print(`[SYSTEM] In warp.`)
        if (nextState.position.x < nextState.destination.x) nextState.position.x++
        if (nextState.position.y > nextState.destination.y) nextState.position.y--
        if (nextState.position.x > nextState.destination.x) nextState.position.x--
        if (nextState.position.y < nextState.destination.y) nextState.position.y++
      }
      return nextState
    case 'SET_DESTINATION':
      const coordinates = action.coordinates
      nextState.destination = coordinates
      print(`[SYSTEM] Destination set to ${ coordinates.x },${ coordinates.y }.`)
      return nextState
    case 'RUN_COMMAND':
      const command = action.command
      if (command === 'STOP' || command === 'S') {
        print(`[SYSTEM] Stopped.`)
        nextState.active = false
      } else if (command === 'DOCK' || command === 'D') {
        print(`[SYSTEM] Docking.`)
      } else if (command === 'AUTO' || command === 'A') {
        print(`[SYSTEM] Autopiloting.`)
      } else if (command === 'WARP' || command === 'W') {
        if (nextState.position.x === nextState.destination.x && nextState.position.y === nextState.destination.y) {
          print(`[ERROR] No destination to warp to.`)
        } else {
          print(`[SYSTEM] Starting warp engine.`)
          nextState.active = true
        }
      } else {
        print(`[ERROR] ${ command }: Command not found.`)
      }
      return nextState
    default:
      return state
  }
}

export default reducer
