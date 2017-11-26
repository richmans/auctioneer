export const ADD_PLAYER = "action.player.add";
export const REMOVE_PLAYER = "action.player.remove";
export const UPDATE_PLAYER = "action.player.update";
export const START_BIDDING = "action.start_bidding";
export const DO_BID = "action.player.bid";
export const UPDATE_BID = "action.bid.update";
export const FINISH_BIDDING = "action.finish_bidding";

export const finishBidding = () => ({type:FINISH_BIDDING})
export const startBidding = () => ({type: START_BIDDING})
export const doBid = () => ({type: DO_BID})
export const updateBid = (index, bid) => ({type: UPDATE_BID, index: index, bid: bid})
export const removePlayer = (index) => ({type: REMOVE_PLAYER, index: index})
export const addPlayer = () => ({type: ADD_PLAYER})
export const updatePlayer = (index, playerName) => ({type: UPDATE_PLAYER, index: index, playerName: playerName})
