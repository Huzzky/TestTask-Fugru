import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { allReducers } from './configureStore'

export const store = createStore(allReducers, applyMiddleware(thunk, logger))
