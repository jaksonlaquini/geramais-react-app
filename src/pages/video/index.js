import React, { Component } from 'react';
import './../../index.css'
import videoApresentacao from './../../video/apresentacao.mp4';
import videoApresentacao1 from './../../video/apresentacao.png';

class Video extends Component {
  render() {
    return(
      <video autoplay="autoplay" muted loop playsinline controls className="d-block w-100"  poster={videoApresentacao1}>
        <source src={videoApresentacao} type="video/mp4"></source>  
      </video>
    );
  }
  
}
export default Video;