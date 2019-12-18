import { combineReducers } from 'redux'
import countryReducer from './country'
import favoriteReducer from './favorite'

export default combineReducers({
  countryReducer,
  favoriteReducer,
})
