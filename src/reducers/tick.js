// @flow


const initialState = {
  time: 0,
}
//
// const compareCoordinates = (a: Object, b: Object): boolean => {
//   return a.x === b.x && a.y === b.y
// }

const reducer = (state: Object = initialState, action: Object) => {
  // const coordinates = action.coordinates
  // const log = action.log
  // const print = (message) => {
  //   nextState.logs.unshift(message)
  //   nextState.logs = nextState.logs.splice(0, 10)
  // }
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
