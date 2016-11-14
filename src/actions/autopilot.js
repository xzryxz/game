// @flow

export const setDestination = (coordinates: Object) => {
  return {
    type: 'SET_DESTINATION',
    coordinates,
  }
}

export const runCommand = (command: Object) => {
  return {
    type: 'RUN_COMMAND',
    command,
  }
}
