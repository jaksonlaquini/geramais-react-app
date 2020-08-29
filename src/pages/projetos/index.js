import React, { Component } from 'react';
import projeto1 from './../../img/projetos/1.png';
import projeto2 from './../../img/projetos/2.png';
import projeto3 from './../../img/projetos/3.png';
import projeto4 from './../../img/projetos/4.png';
import projeto5 from './../../img/projetos/5.png';
import projeto6 from './../../img/projetos/6.png';
import projeto7 from './../../img/projetos/7.png';
import projeto8 from './../../img/projetos/8.png';
import projeto9 from './../../img/projetos/9.png';
import projeto10 from './../../img/projetos/10.png';
import projeto11 from './../../img/projetos/11.png';
import projeto12 from './../../img/projetos/12.png';
import projeto13 from './../../img/projetos/13.png';
import projeto14 from './../../img/projetos/14.png';
import projeto15 from './../../img/projetos/15.png';
import projeto16 from './../../img/projetos/16.png';
import projeto17 from './../../img/projetos/17.png';

import { Button } from 'react-bootstrap';
import ModalFotoAmpla from './../../pages/projetos/modal';

import './../../index.css'

class Projetos extends Component {
    constructor() {
        super();
        this.state = {modalShow: false, icone: 0, exibirTodos: false};
    }
    render() {
        return (
            <div className="container">
            <h3 className="text-center text-uppercase text-secondary">Projetos</h3>
            <hr></hr>
                <div className="row" >
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto15} onClick={() => this.setState({modalShow: true , icone: projeto15})}/>
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto16} onClick={() => this.setState({modalShow: true , icone: projeto16})}/>
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto17} onClick={() => this.setState({modalShow: true , icone: projeto17})}/>
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto11} onClick={() => this.setState({modalShow: true , icone: projeto11})}/>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto14} onClick={() => this.setState({modalShow: true , icone: projeto14})}/>
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto9} onClick={() => this.setState({modalShow: true , icone: projeto9})}/>
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto10} onClick={() => this.setState({modalShow: true , icone: projeto10})} />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto8} onClick={() => this.setState({modalShow: true , icone: projeto8})}/>
                    </div>
                </div>

                { this.state.exibirTodos ?
                    <div className="row">
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto13} onClick={() => this.setState({modalShow: true , icone: projeto13})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto5} onClick={() => this.setState({modalShow: true , icone: projeto5})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto6} onClick={() => this.setState({modalShow: true , icone: projeto6})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto7} onClick={() => this.setState({modalShow: true , icone: projeto7})}/>
                        </div>
                    </div>
               : ''}

               { this.state.exibirTodos ?
                    <div className="row">
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto1} onClick={() => this.setState({modalShow: true , icone: projeto1})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto2} onClick={() => this.setState({modalShow: true , icone: projeto2})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto3} onClick={() => this.setState({modalShow: true , icone: projeto3})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-5">
                            <img className="w-100" src={projeto4} onClick={() => this.setState({modalShow: true , icone: projeto4})}/>
                        </div>
                    </div>
                : ''}

                { this.state.exibirTodos ?
                  <div className="row">
                        <div className="col-lg-3 ml-auto mt-5 text-center">
                            <img className="w-100" src={projeto12} onClick={() => this.setState({modalShow: true , icone: projeto12})}/>
                        </div>
                        <div className="col-lg-3 ml-auto mt-5 text-center">
                        </div>
                        <div className="col-lg-3 ml-auto mt-5 text-center">
                        </div>
                        <div className="col-lg-3 ml-auto mt-5 text-center">
                        </div>
                    </div>
                : ''}

                { this.state.exibirTodos ?
                    <div className="w-100 text-center pt-25">
                        <Button variant="light" onClick={() => this.setState({exibirTodos:false})}>mostrar menos</Button> 
                    </div> 
                :
                    <div className="w-100 text-center pt-25">
                        <Button variant="light" onClick={() => this.setState({exibirTodos:true})}>mostrar mais</Button> 
                    </div> 
                }
                
                <ModalFotoAmpla icone={this.state.icone}
                show={this.state.modalShow}
                onHide={() => this.setState({modalShow:false})}
            />
          </div>   
        );
    }
}

export default Projetos;