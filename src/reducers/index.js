import { combineReducers } from 'redux';
import auction from './auction.js'
const rootReducer = combineReducers({
  'auction': auction
})

export default rootReducer