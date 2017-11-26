import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card, {  CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ResultItem from './ResultItem';
class ResultScreen extends Component {

  constructor(props) {
    super(props);
    this.state =  {
    timer: null,
    reveal: 0
  };
  
  }
  componentDidMount() {
    let timer = setInterval(this.tick.bind(this), 100)
    this.setState({timer})
  }
  
  componentWillUnmount() {
    this.clearInterval(this.state.timer)
  }
  
  render() {
    var items = this.props.players.map((p,i) => <ResultItem reveal={this.state.reveal} key={i} player={p} index={i}/> )
    return (
      <div className="Results">
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
             The results
            </Typography>
            {items}
          </CardContent>
         
        </Card>
      </div>
    );
  }


  tick() {
    if (this.state.reveal < 100) {
      this.setState({reveal: this.state.reveal + 1})
    }
  }
  
}

const mapStateToProps = state => {
  return {
    players: state.auction.players
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
   
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ResultScreen);
