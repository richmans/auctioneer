import { ADD_PLAYER, REMOVE_PLAYER, UPDATE_PLAYER } from '../actions'
const initialState = [""] 


export default function players(state = initialState, action) {
  switch(action.type) {
  case ADD_PLAYER:
    return [...state, ""]
  case REMOVE_PLAYER:
    return state.filter((p,i) => i !== action.index)
  case UPDATE_PLAYER:
    return state.map((p,i) => i===action.index ? action.playerName : p)
  default:
    break;
  }
  return state;
}