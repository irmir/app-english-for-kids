import { createStore, combineReducers } from 'redux'

import { bodyReducer } from './redux/reducer'

const reducers = combineReducers({
    body: bodyReducer
})

export const store = createStore(reducers)