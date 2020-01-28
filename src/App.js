import React from 'react';
import './index.css'
import './vendor/fontawesome-free/css/all.min.css';
import './css/freelancer.min.css';
import logo from './img/logo.png';
import Contato from './pages/contato';
import QuemSomos from './pages/quemSomos';
import Servico from './pages/servico'
import ComoFunciona from './pages/comoFunciona'
import ControlledCarousel from './pages/carousel'
// import Slider from './pages/slide'

import Projeto from './pages/projetos'

import { Button } from 'react-bootstrap';
import ModalFundador from './pages/modal';
import ModalOrcamento from './pages/orcamento'

function App() {
  
  const [modalShow, setModalShow] = React.useState(false);
  const [modalOrcamentoShow, setModalOrcamentoShow] = React.useState(false);
  
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
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              <img className="logo" src={logo} alt="" href="" />
            </a>

            <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#projetos">Projetos</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#quemsomos">Quem somos</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#servico">Serviços</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#comoFunciona">Como Funciona</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => setModalOrcamentoShow(true)}>Orçamento</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contato">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div id="page-top" className="mtBanner mbBanner">
        <section className="page-section">
        <ControlledCarousel />
        </section>
      </div>
      <div id="projetos" className="section-margin">
        <section className="page-section" >
          <Projeto />
        </section>
      </div>
        <div id="quemsomos" className="section-margin">
          <section className="page-section bg-primary text-white" >
            < QuemSomos />
            <div className="text-center mt-4">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                <a className="btn btn-xl borderBtnFundador">
                  CEO E FUNDADOR
              </a>
              </Button>
            </div>


          </section>
        </div>
        {/* <div id="servico" className="section-margin"> 
        <section className="page-section" >
          <div className="container">
            <h3 className="text-center text-uppercase text-secondary">Serviços</h3>
            <hr></hr>
            </div>
            <Slider />
        
        </section>
      </div> */}
      <div id="servico" className="section-margin"> 
        <section className="page-section" >
          <Servico />
        </section>
      </div>
      <div id="comoFunciona" className="section-margin">
        <section className="page-section bg-primary text-white" >
          <ComoFunciona />
        </section>
      </div>
      <div id="contato" className="section-margin">
        <section className="page-section">
          <Contato />
        </section>
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
                <div className="ml-35">
                  <div className="row">
                    <a className="contatosTelEmail" href="https://bit.ly/2FNFTjM">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <span>(28) 99903-0449</span>
                  </div>

                  <div className="row">
                    <a className="contatosTelEmail" href="https://bit.ly/2FNFTjM">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <span>(27) 99971-5445</span>
                  </div>

                  <div className="row">
                    <a href="mailto:jaksonslaquini@gmail.com" target="_self" data-content="jaksonslaquini@gmail.com" data-type="mail">
                      <a className="contatosTelEmail">
                        <i className="fa fa-envelope"></i>
                      </a>
                      <span>contato@geramaisengenharia.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>


        <section className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy;  geramaisengenharia 2020</small>
          </div>
        </section>

        {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)  */}
        <div className="scroll-to-top d-lg-none position-fixed ">
          <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>
        <ModalFundador
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
         <ModalOrcamento
          show={modalOrcamentoShow}
          onHide={() => setModalOrcamentoShow(false)}
        />
        {/* Modal */}
        {/* <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  <i className="fas fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">

                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>

                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>

                      <img className="img-fluid rounded mb-5" src="img/portfolio/cabin.png" alt="" />

                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#" data-dismiss="modal">
                        <i className="fas fa-times fa-fw"></i>
                        Close Window
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default App;
