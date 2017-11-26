import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {finishBidding} from '../actions';
class Curtain extends Component {
  render() {
    return (
      <div className="Curtain">
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
             Are you Ready??
            </Typography>
            
          </CardContent>
          <CardActions>
            <Button raised dense onClick={this.props.onReady}  color="primary">
             Yes! Show us the results!
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onReady: (event) => {
      dispatch(finishBidding());
    }, 
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Curtain);
