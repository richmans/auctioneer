export const ADD_PLAYER = "action.ADD_PLAYER";
export const REMOVE_PLAYER = "action.REMOVE_PLAYER";
export const UPDATE_PLAYER = "action.UPDATE_PLAYER";
export const removePlayer = (index) => ({type: REMOVE_PLAYER, index: index})
export const addPlayer = () => ({type: ADD_PLAYER})
export const updatePlayer = (index, playerName) => ({type: UPDATE_PLAYER, index: index, playerName: playerName})