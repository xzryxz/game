// @flow

import { combineReducers } from 'redux'
import autopilot from './autopilot'
import tick from './tick'
import world from './world'


export default combineReducers({
  autopilot,
  tick,
  world,
})
