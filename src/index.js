import React from 'react'
import ReactDOM from 'react-dom'
import './components/styles/index.css'
import App from './components/App'

import { applyMiddleware, createStore } from 'redux'
import { allReducers } from './components/store/configureStore'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

const store = createStore(allReducers, applyMiddleware(thunk, logger))
console.log(store, 'this')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
