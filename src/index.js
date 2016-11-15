// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { tick } from './actions/autopilot'
import { destroy } from './actions/world'
import reducer from './reducers'
import App from './App'
import './index.css'


let store = createStore(reducer)

store.dispatch(tick())

const localPirates = (dots, name) => {
  return dots.filter((dot) => {
    if (dot.name.indexOf(name) > -1) {
      return dot
    }
    return false
  })
}

setInterval(() => {
  store.dispatch(tick())
  if (store.getState().autopilot.active === true) {
    if (store.getState().autopilot.isInWarp === false) {
      const dots = store.getState().world.dots
      if (localPirates(dots, 'pirate').length > 0) { // pirates
        dots.map((dot) => {
          store.dispatch(destroy(dot))
          return false
        })
      }
    } else {
      // TODO: find a destination and warp
      console.log('TODO: find a destination and warp');
    }
  }
}, 1500)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
