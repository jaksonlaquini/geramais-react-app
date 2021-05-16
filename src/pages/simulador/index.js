import React, { Component } from 'react';
import './../../index.css'
import './../../vendor/fontawesome-free/css/all.min.css';
import './../../css/freelancer.min.css';
import logo from './../../img/logo.png';

import './../../index.css'

class Simulador extends Component {
    constructor() {
        super();
  
    }
    render() {

        return (
            <>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
        
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />

      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="/">
                <img className="logo" src={logo} alt="" href="" />
              </a>
  
              <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                  <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">Home</a>
                  </li>
                   <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#projetos">Projetos</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#servico">Serviços</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#comoFunciona">Como Funciona</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#contato">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>

        <div id="simulador" className="section-simulador">
        <iframe src="https://www.portalsolar.com.br/calculo-solar/iframe" 
        className="frameSimulador">
        </iframe>
        {/* <p style="font-size:10px">Desenvolvido por <a target="_blank" href="https://www.portalsolar.com.br">Portal Solar</a></p> */}
      
              
        </div>

        <footer className="footer text-center">
          <div className="meioDeContato">
            <div className="row">
              <div className="col-lg-4 mb-30">
                <h4 className="text-uppercase mb-4">Localização</h4>
                <p className="lead mb-0">Avenida Francisco Lacerda de Aguiar,</p>
                <p className="lead mb-0"> 274, Ed Esmeralda, sala 101 (101,08 km),</p>
                <p className="lead mb-0">29303-381 Cachoeiro de Itapemirim</p>
              </div>

              <div className="col-lg-4 mb-30 ">
                <h4 className="text-uppercase mb-4">Siga-nos</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/geramaisengenharia">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/company/geramaisengenharia">
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/geramaisengenharia/">
                  <i className="fab fa-fw fa-instagram"></i>
                </a>
              </div>
              <div className="col-lg-4">
                  <div>
                    <a className="contatosTelEmail" href="https://bit.ly/2FNFTjM">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <span>(28) 99903-0449</span>
                  </div>

                  <div >
                    <a className="contatosTelEmail" href="https://bit.ly/2FNFTjM">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <span>(27) 99971-5445</span>
                  </div>
                  <div >
                    <a href="mailto:contato@geramaisengenharia.com.br" target="_self" data-content="contato@geramaisengenharia.com.br" data-type="mail">
                      <a className="contatosTelEmail">
                        <i className="fa fa-envelope"></i>
                      </a>
                      <span>contato@geramaisengenharia.com.br</span>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </footer>


        <section className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; 2021 geramaisengenharia - Todos direitos reservados </small>
          </div>
        </section>

        {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)  */}
        <div className="leftBotaoTopo scroll-to-top d-lg-none position-fixed">
          <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>
          </>
        );
    }

    
}

export default Simulador;