// @flow

import World from './../modules/World'


const initialState = new World()

const reducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'DESTROY':
      const nextState = Object.assign({}, state)
      // TODO: Implement
      console.log('destroying', action.dot);
      return nextState
    default:
      return state
  }
}

export default reducer
