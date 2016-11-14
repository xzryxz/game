// @flow

const initialState = {
  time: 0
}

const reducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'TICK':
      const nextState = Object.assign({}, state)
      nextState.time++
      return nextState
    default:
      return state
  }
}

export default reducer
