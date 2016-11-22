// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { tick } from './actions/tick'
import reducer from './reducers'
import App from './App'
import './index.css'


let store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(tick())

setInterval(() => {
  store.dispatch(tick())
}, 1500)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
