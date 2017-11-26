import React, { Component } from 'react';
import './App.css';
import CreatePlayers from './CreatePlayers.js';
import Bid from './Bid.js';
import Curtain from "./Curtain.js";
import ResultScreen from "./ResultScreen.js";
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class App extends Component {
  render() {
    var main;
    switch(this.props.phase) {
    case "bid":
      main = <Bid/>
      break;
    case "curtain":
      main = <Curtain/>
      break;
    case "result":
      main = <ResultScreen/>
      break;
    default:
      main = <CreatePlayers/>
      break;
    }
    return (
      <div className="App">
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='contrast' aria-label='Menu'>
              <MenuIcon/>
            </IconButton>
            <Typography className='main-title' color='inherit' type='title'>Auctioneer</Typography>
          </Toolbar>
        </AppBar>
        <div className='main'>
        {main}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phase: state.auction.phase
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App);
