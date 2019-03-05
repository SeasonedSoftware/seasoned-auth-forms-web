import { combineReducers } from 'redux'
import { createReducer } from 'croods'

const reducers = {
  signin: createReducer('signin'),
  signup: createReducer('signup'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
