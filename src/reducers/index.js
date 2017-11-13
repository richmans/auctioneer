import { combineReducers } from 'redux';
import players from './players.js'
const rootReducer = combineReducers({
  'players': players
})

export default rootReducer