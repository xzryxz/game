export const tick = () => {
  return {
    type: 'TICK',
  }
}

export const setDestination = (coordinates) => {
  return {
    type: 'SET_DESTINATION',
    coordinates,
  }
}

export const runCommand = (command) => {
  return {
    type: 'RUN_COMMAND',
    command,
  }
}
