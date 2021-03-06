// @flow

import { Map as map } from 'immutable'


const initialState = {
  active: false,
  destination: { x: 50, y: 50, },
  logs: [],
  position: { x: 50, y: 50, },
  resources: map({
    ammo: 0,
    dollars: 0,
    fuel: 0,
    parts: 0,
    water: 0,
  }),
  time: 0,
}

const compareCoordinates = (a: Object, b: Object): boolean => {
  return a.x === b.x && a.y === b.y
}

const reducer = (state: Object = initialState, action: Object) => {
  const coordinates = action.coordinates
  const log = action.log
  const nextState = Object.assign({}, state)
  const print = (message) => {
    nextState.logs.unshift(message)
    nextState.logs = nextState.logs.splice(0, 10)
  }
  switch (action.type) {
    case 'SET_DESTINATION':
      nextState.destination.x = coordinates.x
      nextState.destination.y = coordinates.y
      return nextState
    case 'START':
      nextState.active = true
      if (coordinates) {
        nextState.destination.x = coordinates.x
        nextState.destination.y = coordinates.y
      }
      if (log) print(log)
      return nextState
    case 'STOP':
      nextState.active = false
      if (log) print(log)
      return nextState
    case 'TICK':
      if (nextState.active) {
        if (nextState.position.x < nextState.destination.x) nextState.position.x++
        if (nextState.position.y > nextState.destination.y) nextState.position.y--
        if (nextState.position.x > nextState.destination.x) nextState.position.x--
        if (nextState.position.y < nextState.destination.y) nextState.position.y++
        if (compareCoordinates(nextState.destination, nextState.position)) nextState.active = false
      }
      return nextState
    default:
      return state
  }
}

export default reducer
