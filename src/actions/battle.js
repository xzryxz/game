// @flow

export const battle = (target: Object) => {
  return {
    type: 'BATTLE',
    target,
  }
}
