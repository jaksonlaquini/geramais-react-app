import React, { Component } from 'react';
import './../../index.css'
import { BallBeat } from 'react-pure-loaders';
class Loading extends Component {
  render() {
    return(
      this.props.show ?   <div className="loading"><BallBeat color={'#123abc'} loading={this.props.show} /></div> : null
    );
  }
  
}
export default Loading;