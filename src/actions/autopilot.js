// @flow

export const runCommand = (command: Object) => {
  return {
    type: 'RUN_COMMAND',
    command,
  }
}

export const setDestination = (coordinates: Object) => {
  return {
    type: 'SET_DESTINATION',
    coordinates,
  }
}

export const setHome = (coordinates: Object) => {
  return {
    type: 'SET_HOME',
    coordinates,
  }
}

export const setMission = (coordinates: Object) => {
  return {
    type: 'SET_MISSION',
    coordinates,
  }
}

export const tick = () => {
  return {
    type: 'TICK',
  }
}
