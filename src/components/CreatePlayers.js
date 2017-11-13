import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PlayerInput from './PlayerInput.js';
import { addPlayer } from '../actions';
class CreatePlayers extends Component {
  render() {
    var playerInputs = this.props.players.map((p,i) => <PlayerInput key={i} playerName={p} index={i}/> )
    return (
      <div className="CreatePlayers">
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
              Input Names
            </Typography>
            {playerInputs}
          </CardContent>
          <CardActions>
            <Button dense onClick={this.props.onAdd} color="primary">
              Add
            </Button>
            <Button raised dense color="primary">
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
    players: state.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => {
      dispatch(addPlayer())
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CreatePlayers);
