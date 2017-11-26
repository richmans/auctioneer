import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Input, { InputAdornment } from 'material-ui/Input';
import Typography from 'material-ui/Typography';
import { updateBid, doBid } from '../actions';

class Bid extends Component {
  render() {
    return (
      <div className="Bid">
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
              {this.props.player.name}, please input your bid
            </Typography>
            <Input
               placeholder="0"
               fullWidth
               autoFocus
               margin="normal"
               onChange={this.props.onChangeBid}
               value={this.props.bid}
               startAdornment={<InputAdornment position="start">€</InputAdornment>}
                    />
          </CardContent>
          <CardActions>
            <Button raised dense onClick={this.props.onBid}  color="primary">
             Done
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    index: state.auction.currentPlayer,
    bid: state.auction.currentBid,
    player: state.auction.players[state.auction.currentPlayer]
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeBid: (event) => {
      dispatch(updateBid(props.index, event.target.value))
    }, 
    onBid: (event) => {
      dispatch(doBid())
    }, 
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Bid);
