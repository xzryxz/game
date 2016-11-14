// @flow

import { combineReducers } from 'redux'
import autopilot from './autopilot'
import world from './world'


export default combineReducers({
  autopilot,
  world,
})
