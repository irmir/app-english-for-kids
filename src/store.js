import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

import { bodyReducer } from './redux/reducer'

const reducers = combineReducers({
    body: bodyReducer
})

export const store = createStore(reducers)

// export const store = createStore(reducers, applyMiddleware(thunk))