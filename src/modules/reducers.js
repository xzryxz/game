import { combineReducers } from 'redux'
import Autopilot from './Autopilot/Autopilot'
import World from './World/World'


const world = new World()
const initialState = new Autopilot(world)

const boot = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOT':
      return state
    default:
      return state
  }
}

const destination = (state = initialState, action) => {
  switch (action.type) {
    case 'DESTINATION':
      console.log('dispatched DESTINATION');
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  boot,
  destination,
})

export default reducers
