// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { boot } from './modules/actions'
import reducer from './modules/reducers'
import App from './App'
import './index.css'


let store = createStore(reducer)

store.dispatch(boot())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
