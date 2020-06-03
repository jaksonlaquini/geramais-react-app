import React, { Component } from 'react';
import './../../index.css'
import videoApresentacao from './../../video/apresentacao.mp4';

class Video extends Component {
  render() {
    return(
      <video className="d-block w-100" loop autoplay="autoplay">
      <source src={videoApresentacao} type="video/mp4"></source>
        
      </video>
    );
  }
  
}
export default Video;