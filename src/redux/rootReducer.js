import {combineReducers} from 'redux'
import { userReducer } from './reducer/userReducer'
import { movieReducer } from './reducer/movieReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer
})