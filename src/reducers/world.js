// @flow

import World from './../modules/World'


const initialState = new World()

const reducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'POPULATE':
      // TODO: Implement
      const nextState = Object.assign({}, state)
      return nextState
    default:
      return state
  }
}

export default reducer
