// @flow

import { Map as map } from 'immutable'


const initialState = {
  active: false,
  isInWarp: false,
  destination: { x: 50, y: 50, },
  logs: [`[SYSTEM] System online.`],
  position: { x: 50, y: 50, },
  resources: map({
    dollars: 0,
    fuel: Infinity,
  }),
  time: 0,
}

const compareCoordinates = (a: Object, b: Object): boolean => {
  return a.x === b.x && a.y === b.y
}

const reducer = (state: Object = initialState, action: Object) => {
  const nextState = Object.assign({}, state)
  const print = (message) => {
    nextState.logs.unshift(message)
    nextState.logs = nextState.logs.splice(0, 10)
  }
  switch (action.type) {
    case 'RUN_COMMAND':
      const command = action.command
      if (command === 'STOP' || command === 'S') {
        if (nextState.isInWarp) {
          print(`[SYSTEM] Stopped.`)
          nextState.active = false
          nextState.isInWarp = false
        } else {
          print(`[SYSTEM] Already stopped.`)
        }
      } else if (command === 'DOCK' || command === 'D') {
        print(`[SYSTEM] Docking.`)
      } else if (command === 'AUTO' || command === 'A') {
        print(`[SYSTEM] Autopiloting.`)
        nextState.active = true
      } else if (command === 'WARP' || command === 'W') {
        if (compareCoordinates(nextState.destination, nextState.position)) {
          print(`[ERROR] No destination to warp to.`)
        } else {
          print(`[SYSTEM] Starting warp engine.`)
          nextState.isInWarp = true
        }
      } else {
        print(`[ERROR] ${ command }: Command not found.`)
      }
      return nextState
    case 'SET_DESTINATION':
      const coordinates = action.coordinates
      nextState.destination = coordinates
      print(`[SYSTEM] Destination set to ${ coordinates.x },${ coordinates.y }.`)
      return nextState
    case 'TICK':
      nextState.time++
      if (nextState.isInWarp) {
        if (nextState.position.x < nextState.destination.x) nextState.position.x++
        if (nextState.position.y > nextState.destination.y) nextState.position.y--
        if (nextState.position.x > nextState.destination.x) nextState.position.x--
        if (nextState.position.y < nextState.destination.y) nextState.position.y++
        if (compareCoordinates(nextState.destination, nextState.position)) {
          print(`[SYSTEM] Arrived at destination.`)
          nextState.isInWarp = false
        } else {
          print(`[SYSTEM] In warp.`)
        }
      }
      return nextState
    default:
      return state
  }
}

export default reducer
