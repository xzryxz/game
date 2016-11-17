// @flow

import { List as list, Map as map } from 'immutable'


const initialState = {
  active: false,
  destination: { x: 50, y: 50, },
  home: { x: undefined, y: undefined, },
  logs: [`[SYSTEM] System online.`],
  mission: { x: undefined, y: undefined, },
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
  const coordinates = action.coordinates
  const nextState = Object.assign({}, state)
  const print = (message) => {
    nextState.logs.unshift(message)
    nextState.logs = nextState.logs.splice(0, 10)
  }
  switch (action.type) {
    case 'RUN_COMMAND':
      let command = action.command
      let commands = map({
        A: 'AUTO',
        D: 'DOCK',
        S: 'STOP',
        W: 'WARP',
      })
      if (list(commands.keySeq()).includes(command)) command = commands.get(command)
      if (command === 'AUTO' || command === 'DOCK' || command === 'WARP') {
        if (command === 'AUTO') {
          print(`[SYSTEM] Auto attacking.`)
          nextState.active = true
          nextState.destination = nextState.mission
        }
        if (command === 'DOCK') {
          print(`[SYSTEM] Docking.`)
          nextState.active = true
          nextState.destination = nextState.home
        }
        if (command === 'WARP') {
          if (compareCoordinates(nextState.destination, nextState.position)) {
            print(`[ERROR] No destination.`)
          } else {
            print(`[SYSTEM] Warping.`)
            nextState.active = true
          }
        }
      } else if (command === 'STOP') {
        print(`[SYSTEM] Stopped.`)
        nextState.active = false
      } else {
        print(`[ERROR] ${ command }: Command not found.`)
      }
      return nextState
    case 'SET_DESTINATION':
      print(`[SYSTEM] Destination set to ${ coordinates.x },${ coordinates.y }.`)
      nextState.destination = coordinates
      return nextState
    case 'SET_HOME':
      nextState.home = coordinates
      console.log('home', coordinates);
      return nextState
    case 'SET_MISSION':
      nextState.mission = coordinates
      console.log('mission', coordinates);
      return nextState
    case 'TICK':
      nextState.time++
      if (nextState.active) {
        if (nextState.position.x < nextState.destination.x) nextState.position.x++
        if (nextState.position.y > nextState.destination.y) nextState.position.y--
        if (nextState.position.x > nextState.destination.x) nextState.position.x--
        if (nextState.position.y < nextState.destination.y) nextState.position.y++
        if (compareCoordinates(nextState.destination, nextState.position)) {
          print(`[SYSTEM] Arrived at destination.`)
          nextState.active = false
          if (compareCoordinates(nextState.position, nextState.home)) nextState.home = { x: undefined, y: undefined, }
          if (compareCoordinates(nextState.position, nextState.station)) nextState.station = { x: undefined, y: undefined, }
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
