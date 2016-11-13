import Autopilot from './Autopilot/Autopilot'
import World from './World/World'


const world = new World()
const initialState = new Autopilot(world)

const reducer = (state = initialState, action) => {
  const autopilot = Object.assign({}, state)
  switch (action.type) {
    case 'TICK':
      autopilot.time++
      return autopilot
    case 'SET_DESTINATION':
      const coordinates = action.coordinates
      autopilot.destination = coordinates
      autopilot.modules.logger.log(`[SYSTEM] Destination set to ${ coordinates.x },${ coordinates.y }.`)
      return autopilot
    case 'RUN_COMMAND':
      autopilot.modules.logger.log(`[ERROR] ${ action.command }: Command not found.`)
      return autopilot
    default:
      return autopilot
  }
}

export default reducer
