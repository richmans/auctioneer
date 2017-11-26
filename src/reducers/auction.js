import { ADD_PLAYER, REMOVE_PLAYER, UPDATE_PLAYER, START_BIDDING, UPDATE_BID, DO_BID, FINISH_BIDDING } from '../actions'
const initialState = {
  players: [{}],
  currentPlayer: 0,
  currentBid: "",
  phase: "subscribe",
  winner: undefined,
}

function updatePlayer(state, index, changes) {
  return state.map((p,i) => i===index ? {...p, ...changes} : p)
}

function playerReducer(state, action) {
  switch(action.type) {
  case ADD_PLAYER:
    return [...state, {name: ""}]
  case REMOVE_PLAYER:
    return state.filter((p,i) => i !== action.index)
  case UPDATE_PLAYER:
    return updatePlayer(state, action.index, {name: action.playerName})
  default:
    break;
  }
  return state
}

function findWinner(state) {
  return [...state.players].sort(function(a,b) {return (a.bid > b.bid)? -1: 1})[0];
}

export default function action(state = initialState, action) {
  if (action.type.split(".")[1] === 'player') {
    state = {...state, players: playerReducer(state.players, action)}
  }
  
  switch(action.type) {
  case START_BIDDING:
    if (state.phase !== "subscribe") break;
    return {...state, phase: "bid"}
  case FINISH_BIDDING: 
    if (state.phase !== "curtain") break;
    var winner = findWinner(state);
    return {...state, phase: "result", winner: winner}
  case UPDATE_BID:
    return {...state, currentBid: action.bid}
  case DO_BID:
    state = {...state, 
      currentBid: "", 
      currentPlayer: state.currentPlayer +1, 
      players: updatePlayer(state.players, state.currentPlayer, {bid: state.currentBid})
    }
    if (state.currentPlayer >= state.players.length) {
      state = {...state, phase: "curtain"}
    }
    break;
  default:
    break;
  }
  return state;
}