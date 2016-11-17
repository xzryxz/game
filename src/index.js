// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import { List as list } from 'immutable'
import { tick, setHome, setMission } from './actions/autopilot'
// import { destroy } from './actions/world'
import reducer from './reducers'
import App from './App'
import './index.css'


let store = createStore(reducer)

store.dispatch(tick())

// const localPirates = (dots, name) => {
//   return dots.filter((dot) => {
//     if (dot.name.indexOf(name) > -1) {
//       return dot
//     }
//     return false
//   })
// }

const getDiff = (a: number, b: number): number => Math.abs(a - b)

const getRange = (x: number, y: number):number => {
  return getDiff(x, store.getState().autopilot.position.x) + getDiff(y, store.getState().autopilot.position.y)
}

const getNearest = (type) => {
  const result = store.getState().world.dots
    .filter((dot) => {
      if (dot.type === type) return dot
      return false
    })
    .sort((a, b) => {
      return getRange(a.position.x, a.position.y) - getRange(b.position.x, b.position.y)
    })
  return result.first()
}

setInterval(() => {
  const { active, home, mission, } = store.getState().autopilot
  if (active) {
    if (home.x === undefined) {
      store.dispatch(setHome({
        x: getNearest('station').position.x,
        y: getNearest('station').position.y,
      }))
    }
    if (mission.x === undefined) {
      store.dispatch(setMission({
        x: getNearest('ship').position.x,
        y: getNearest('ship').position.y,
      }))
    }
  }
  store.dispatch(tick())
  // if (store.getState().autopilot.active === true) {
  //   if (store.getState().autopilot.isInWarp === false) {
  //     const dots = list(store.getState().world.dots)
  //     if ()
  //     // if (localPirates(dots, 'pirate').length > 0) { // pirates
  //     //   dots.map((dot) => {
  //     //     store.dispatch(destroy(dot))
  //     //     return false
  //     //   })
  //     // }
  //   } else {
  //     // TODO: find a destination and warp
  //     console.log('TODO: find a destination and warp');
  //   }
  // }
}, 1500)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
