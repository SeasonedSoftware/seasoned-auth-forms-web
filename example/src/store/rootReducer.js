import { combineReducers } from 'redux'
import { createReducer } from 'croods'

const reducers = {
  signin: createReducer('signin'),
  signup: createReducer('signup'),
  forgotPassword: createReducer('forgotPassword'),
  newPassword: createReducer('newPassword'),
}

const rootReducer = combineReducers(reducers)
export default rootReducer
