import React, { Component }  from 'react';

import icone1 from './../../img/servicos/icone1.png';
import icone2 from './../../img/servicos/icone2.png';
import icone3 from './../../img/servicos/icone3.png';
import icone4 from './../../img/servicos/icone4.png';
import icone5 from './../../img/servicos/icone5.png';
import icone6 from './../../img/servicos/icone6.png';
import icone7 from './../../img/servicos/icone7.png';

import servico1 from './../../img/servicos/1.png';
import servico2 from './../../img/servicos/2.png';
import servico3 from './../../img/servicos/3.png';
import servico4 from './../../img/servicos/4.png';
import servico5 from './../../img/servicos/5.png';
import servico6 from './../../img/servicos/6.png';
import servico7 from './../../img/servicos/7.png';

import ModalServico from './../../pages/servico/modal';

import './../../index.css'

class Servico extends Component {

    constructor() {
        super();
        this.state = {modalShow: false, icone: 0};
    }
   
  render() {
    return (
        <div className="container">
            <h3 className="text-center text-uppercase text-secondary">Serviços</h3>
            <hr></hr>
            <div className="row">
               
                <div className="col-lg-3 ml-auto text-center">
                    <img className="icone" src={icone6} title="Click e saiba mais"  onClick={() => this.setState({modalShow: true , icone: servico6})}/>
                    <h3 className="fontSizeIconesServicos">Projetos elétricos</h3>
                    <hr></hr>
                </div>
                <div className="col-lg-3 ml-auto text-center">
                    <img className="icone" src={icone2} title="Click e saiba mais" onClick={() => this.setState({modalShow: true , icone: servico2})}/>
                    <h3 className="fontSizeIconesServicos">Consultoria</h3>
                    <hr></hr>
                </div>
                <div className="col-lg-3 ml-auto text-center">
                    <img className="icone" src={icone3} title="Click e saiba mais"  onClick={() => this.setState({modalShow: true , icone: servico3})}/>
                    <h3 className="fontSizeIconesServicos">Vistoria</h3>
                    <hr></hr>
                </div>
                
                <div className="col-lg-3 ml-auto text-center">
                    <img className="icone" src={icone7} title="Click e saiba mais"  onClick={() => this.setState({modalShow: true , icone: servico7})}/>
                    <h3 className="fontSizeIconesServicos">Energia solar</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 ml-auto text-center">
                    <img className="icone" src={icone5} title="Click e saiba mais"  onClick={() => this.setState({modalShow: true , icone: servico5})}/>
                    <h3 className="fontSizeIconesServicos">Laudos técnicos</h3>
                    <hr></hr>
                </div>
                <div className="col-lg-4 ml-auto text-center">
                    <img className="icone" src={icone1} title="Click e saiba mais"  onClick={() => this.setState({modalShow: true , icone: servico1})}/>
                    <h3 className="fontSizeIconesServicos">Projeto técnico SPDA</h3>
                    <hr></hr>
                </div>
                <div className="col-lg-5 ml-auto text-center">
                    <img className="icone" src={icone4} title="Click e saiba mais" onClick={() => this.setState({modalShow: true , icone: servico4})}/>
                    <h3 className="fontSizeIconesServicos">Otimização do consumo de energia </h3>
                    <hr></hr>
                </div>
            </div>
             <ModalServico icone={this.state.icone}
                show={this.state.modalShow}
                onHide={() => this.setState({modalShow:false})}
            />
        </div>
    );
  }
}

export default Servico;