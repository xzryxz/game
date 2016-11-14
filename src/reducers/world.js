// @flow

import World from './../modules/World'


const initialWorld = new World()

const world = (prevState: Object = initialWorld, action: Object) => {
  const state = Object.assign({}, prevState)
  switch (action.type) {
    default:
      return state
  }
}

export default world
