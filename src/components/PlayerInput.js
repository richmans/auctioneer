import React, { Component } from 'react';
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Input, { InputAdornment } from 'material-ui/Input';
import { updatePlayer, removePlayer } from '../actions';

class PlayerInput extends Component {
  render() {
    return (
      <Input
         placeholder="Your name"
         fullWidth
         margin="normal"
         value={this.props.playerName}
         onChange={this.props.onUpdate} 
         endAdornment={
          <InputAdornment position="end">
              <IconButton onClick={this.props.onRemove}>
                 <DeleteIcon/>
             </IconButton>
          </InputAdornment>
        }
       />
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRemove: () => {
      dispatch(removePlayer(props.index))
    }, 
    onUpdate: (event) => {
      dispatch(updatePlayer(props.index, event.target.value))
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
