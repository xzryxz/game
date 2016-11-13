export const boot = () => {
  return {
    type: 'BOOT',
  }
}

export const destination = (coordinates) => {
  return {
    type: 'DESTINATION',
    coordinates,
  }
}
