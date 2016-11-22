// @flow

export const setDestination = (coordinates: Object) => {
  return {
    type: 'SET_DESTINATION',
    coordinates,
  }
}

export const start = (log: String, coordinates: Object) => {
  return {
    type: 'START',
    coordinates,
    log,
  }
}

export const stop = (log: String) => {
  return {
    type: 'STOP',
    log,
  }
}
