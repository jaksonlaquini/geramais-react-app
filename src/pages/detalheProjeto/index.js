import React, { Component } from 'react';
import './../../index.css'
import './../../vendor/fontawesome-free/css/all.min.css';
import './../../css/freelancer.min.css';
import logo from './../../img/logo.png';

// Rural
import projeto1 from './../../img/nossoProjetos/rural/1.JPG';
import projeto2 from './../../img/nossoProjetos/rural/2.JPG';
import projeto3 from './../../img/nossoProjetos/rural/3.JPG';
import projeto4 from './../../img/nossoProjetos/rural/4.JPG';

import projeto5 from './../../img/nossoProjetos/rural/1AV.JPG';
import projeto6 from './../../img/nossoProjetos/rural/2AV.JPG';
import projeto7 from './../../img/nossoProjetos/rural/3AV.JPG';
import projeto8 from './../../img/nossoProjetos/rural/4AV.JPG';
import projeto9 from './../../img/nossoProjetos/rural/5AV.JPG';
import projeto10 from './../../img/nossoProjetos/rural/6AV.JPG';
import projeto11 from './../../img/nossoProjetos/rural/7AV.JPG';

// Residencial
import projeto12 from './../../img/nossoProjetos/residencial/1CI.jpg';
import projeto13 from './../../img/nossoProjetos/residencial/2CI.jpg';

import projeto14 from './../../img/nossoProjetos/residencial/1VA.JPG';
import projeto15 from './../../img/nossoProjetos/residencial/2VA.JPG';
import projeto16 from './../../img/nossoProjetos/residencial/3VA.JPG';
import projeto17 from './../../img/nossoProjetos/residencial/4VA.JPG';
import projeto18 from './../../img/nossoProjetos/residencial/5VA.JPG';

import projeto19 from './../../img/nossoProjetos/residencial/1P.JPG';
import projeto20 from './../../img/nossoProjetos/residencial/2P.JPG';
import projeto21 from './../../img/nossoProjetos/residencial/3P.JPG';
import projeto22 from './../../img/nossoProjetos/residencial/4P.JPG';

import guarapari1 from './../../img/nossoProjetos/residencial/1G.JPG';
import guarapari2 from './../../img/nossoProjetos/residencial/2G.JPG';
import guarapari3 from './../../img/nossoProjetos/residencial/3G.JPG';

import cachoeiro4 from './../../img/nossoProjetos/residencial/4C.JPG';
import cachoeiro5 from './../../img/nossoProjetos/residencial/5C.JPG';
import cachoeiro6 from './../../img/nossoProjetos/residencial/6C.JPG';

import cachoeiro7 from './../../img/nossoProjetos/residencial/7C.JPG';
import cachoeiro8 from './../../img/nossoProjetos/residencial/8C.JPG';
import cachoeiro9 from './../../img/nossoProjetos/residencial/9C.JPG';

// Comercial
import projeto23 from './../../img/nossoProjetos/comercial/1C.JPG';
import projeto24 from './../../img/nossoProjetos/comercial/2C.JPG';
import projeto25 from './../../img/nossoProjetos/comercial/3C.JPG';
import projeto26 from './../../img/nossoProjetos/comercial/4C.JPG';
import projeto27 from './../../img/nossoProjetos/comercial/5C.JPG';

import projeto28 from './../../img/nossoProjetos/comercial/1VV.JPG';
import projeto29 from './../../img/nossoProjetos/comercial/2VV.JPG';
import projeto30 from './../../img/nossoProjetos/comercial/3VV.JPG';
import projeto31 from './../../img/nossoProjetos/comercial/4VV.JPG';

import ModalFotoAmpla from './../../pages/detalheProjeto/modal';

import './../../index.css'

class DetalheProjetos extends Component {
    constructor() {
        super();
        this.state = {modalShow: false, icone: 0, exibirTodos: false, tipo:0};
        this.onValueChange = this.onValueChange.bind(this);
    }

    componentWillMount(){
        this.setState({tipo: this.props.match.params.tipo});
    }

    onValueChange(event) {
      this.setState({
        tipo: event.target.value
      });
    }

    render() {

        var tipo = this.state.tipo;

        if(!tipo) {
            tipo = 0;
            this.setState({
              tipo: 0
            });
        }
       
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
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#servico">Serviços</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#comoFunciona">Como Funciona</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#contato">Contato</a>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <div className="ctas-button">
                      <a href="/simulador">
                        <button className="btn primary cta">Simulador</button>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </nav>

        <div id="projetos" className="section-margin">
          <section className="pt-60" >
            <div className="container">
              <div className="row text-center" >
                <div className="col-lg-3">
                  <label className="font-weight-bold"> <input type="radio" value='0' checked={this.state.tipo == 0} onChange={this.onValueChange}/> Todos os projetos</label>
                </div>
                <div className="col-lg-3 ">
                  <label className="font-weight-bold"> <input type="radio" value="1" checked={this.state.tipo == 1} onChange={this.onValueChange}/> Rural</label>
                </div>
                <div className="col-lg-3 ">
                  <label className="font-weight-bold"> <input type="radio" value="2" checked={this.state.tipo == 2} onChange={this.onValueChange}/> Residencial</label>
                </div>
                <div className="col-lg-3 ">
                  <label className="font-weight-bold"> <input type="radio" value="3" checked={this.state.tipo == 3} onChange={this.onValueChange}/> Comercial</label>
                </div>
              </div> 
            </div>
          </section>  
         { tipo == 1 || tipo == 0 ?
            <section className="p-3rem" >
                <h3 className="text-center text-uppercase text-secondary">Projetos Rurais</h3>
                <hr></hr>

                <div className="container">
                    <span>Instalação Rural - 3,2 KWP - <b>Alfredo Chaves - ES</b> </span>
                    <div className="row " >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto1} onClick={() => this.setState({modalShow: true , icone: projeto1})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto2} onClick={() => this.setState({modalShow: true , icone: projeto2})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto3} onClick={() => this.setState({modalShow: true , icone: projeto3})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto4} onClick={() => this.setState({modalShow: true , icone: projeto4})}/>
                        </div>
                    </div>

                    <hr></hr>

                    <span className="mt-3">Instalação Rural - 24,09 KWP - <b>Atílio Vivácqua - ES</b> </span>
                    <div className="row" >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto5} onClick={() => this.setState({modalShow: true , icone: projeto5})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto6} onClick={() => this.setState({modalShow: true , icone: projeto6})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto7} onClick={() => this.setState({modalShow: true , icone: projeto7})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto8} onClick={() => this.setState({modalShow: true , icone: projeto8})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto9} onClick={() => this.setState({modalShow: true , icone: projeto9})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto10} onClick={() => this.setState({modalShow: true , icone: projeto10})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto11} onClick={() => this.setState({modalShow: true , icone: projeto11})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                    </div>
                </div>
               
            </section> : ''}

            { tipo == 2 || tipo == 0 ?
                <section className="p-3rem" >
                <h3 className="text-center text-uppercase text-secondary">Projetos Residenciais</h3>
                <hr></hr>

                <div className="container">
                    <span>Instalação Residencial - 4,2 KWP - <b> Cachoeiro de Itapemirim - ES</b> </span>
                    <div className="row " >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto12} onClick={() => this.setState({modalShow: true , icone: projeto12})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto13} onClick={() => this.setState({modalShow: true , icone: projeto13})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                    </div>

                    <hr></hr>

                    <span>Instalação Residencial - 6,56 KWP - <b> Cachoeiro de Itapemirim - ES</b> </span>
                    <div className="row " >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={cachoeiro4} onClick={() => this.setState({modalShow: true , icone: cachoeiro4})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={cachoeiro5} onClick={() => this.setState({modalShow: true , icone: cachoeiro5})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={cachoeiro6} onClick={() => this.setState({modalShow: true , icone: cachoeiro6})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                    </div>

                    <hr></hr>

                    <span>Instalação Residencial - 3,28 KWP - <b> Cachoeiro de Itapemirim - ES</b> </span>
                    <div className="row " >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={cachoeiro7} onClick={() => this.setState({modalShow: true , icone: cachoeiro7})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={cachoeiro8} onClick={() => this.setState({modalShow: true , icone: cachoeiro8})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={cachoeiro9} onClick={() => this.setState({modalShow: true , icone: cachoeiro9})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                    </div>

                    <hr></hr>

                    <span className="mt-3">Instalação Residencial - 4,2 KWP - <b> Vargem Alta - ES</b> </span>
                    <div className="row" >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto14} onClick={() => this.setState({modalShow: true , icone: projeto14})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto15} onClick={() => this.setState({modalShow: true , icone: projeto15})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto16} onClick={() => this.setState({modalShow: true , icone: projeto16})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto17} onClick={() => this.setState({modalShow: true , icone: projeto17})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto18} onClick={() => this.setState({modalShow: true , icone: projeto18})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                    </div>

                    <hr></hr>

                    <span className="mt-3">Instalação Residencial - 5,02 KWP - <b> Piúma - ES</b> </span>
                    <div className="row" >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto19} onClick={() => this.setState({modalShow: true , icone: projeto19})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto20} onClick={() => this.setState({modalShow: true , icone: projeto20})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto21} onClick={() => this.setState({modalShow: true , icone: projeto21})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto22} onClick={() => this.setState({modalShow: true , icone: projeto22})}/>
                        </div>
                    </div>

                    <hr></hr>

                    <span className="mt-3">Instalação Residencial - 5,5 KWP - <b> Guarapari - ES</b> </span>
                    <div className="row" >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={guarapari1} onClick={() => this.setState({modalShow: true , icone: guarapari1})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={guarapari2} onClick={() => this.setState({modalShow: true , icone: guarapari2})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={guarapari3} onClick={() => this.setState({modalShow: true , icone: guarapari3})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                    </div>

                </div>
               
            </section> : ''}

            { tipo == 3 || tipo == 0 ?
                <section className="p-3rem" >
                <h3 className="text-center text-uppercase text-secondary">Projetos Comerciais</h3>
                <hr></hr>

                <div className="container">
                    <span>Instalação Comercial - 28,98 KWP - <b> Castelo - ES</b> </span>
                    <div className="row " >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto23} onClick={() => this.setState({modalShow: true , icone: projeto23})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto24} onClick={() => this.setState({modalShow: true , icone: projeto24})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto25} onClick={() => this.setState({modalShow: true , icone: projeto25})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto26} onClick={() => this.setState({modalShow: true , icone: projeto26})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto27} onClick={() => this.setState({modalShow: true , icone: projeto27})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                        </div>
                    </div>

                    <hr></hr>

                    <span className="mt-3">Instalação Comercial - 36,57 KWP - <b> Vila Velha - ES</b> </span>
                    <div className="row" >
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto28} onClick={() => this.setState({modalShow: true , icone: projeto28})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto29} onClick={() => this.setState({modalShow: true , icone: projeto29})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto30} onClick={() => this.setState({modalShow: true , icone: projeto30})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-2">
                            <img className="w-100" src={projeto31} onClick={() => this.setState({modalShow: true , icone: projeto31})}/>
                        </div>
                    </div>
                    
                </div>
               
            </section> : ''}

            {tipo != 0 && tipo != 1 && tipo != 2 && tipo != 3 ?
               <div className="container text-center pb-3">
                <hr></hr>
                <span>Selecione um tipo de projeto para visualizar as imagens.</span>
              </div>
            : '' }

            <ModalFotoAmpla icone={this.state.icone}
            show={this.state.modalShow}
            onHide={() => this.setState({modalShow:false})}/>
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

export default DetalheProjetos;