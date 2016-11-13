// @flow

export const tick = () => {
  return {
    type: 'TICK',
  }
}

export const setDestination = (coord: Object) => {
  return {
    type: 'SET_DESTINATION',
    coord,
  }
}

export const runCommand = (command: Object) => {
  return {
    type: 'RUN_COMMAND',
    command,
  }
}
