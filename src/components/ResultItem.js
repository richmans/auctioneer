import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LinearProgress } from 'material-ui/Progress'
class ResultItem extends Component {
  revealedBalance() {
    var myBid = this.props.player.bid
    var winBid = this.props.winner.bid
    var revealFrac = this.props.reveal / 100
    var revealPrice = winBid * revealFrac
    var revealBalance = (revealPrice > myBid) ? myBid : revealPrice;
    return revealBalance;
  }
  
  render() {
    var balance = this.revealedBalance()
    var barWidth = (balance / this.props.winner.bid) * 100;
    var roundBalance = Math.round(balance).toLocaleString(undefined)
    return (
      <div className="ResultItem">
        <div className='player-data'>{this.props.player.name}</div>
        <div className='player-balance'>: {roundBalance}</div>
        <LinearProgress className='player-bar' mode='buffer' value={barWidth}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    winner: state.auction.winner,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ResultItem);
