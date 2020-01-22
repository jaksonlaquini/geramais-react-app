import React from 'react';
import servico1 from './../../img/servicos/1.png';
import servico2 from './../../img/servicos/2.png';
import servico3 from './../../img/servicos/3.png';
import servico4 from './../../img/servicos/4.png';
import servico5 from './../../img/servicos/5.png';
import servico6 from './../../img/servicos/6.png';
import servico7 from './../../img/servicos/7.png';
import servico8 from './../../img/servicos/8.png';

import './../../index.css'

function Servico() {
    return (
        <div className="container">
            <h3 className="text-center text-uppercase text-secondary">Serviços</h3>
            <hr></hr>
            <div className="row">
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico1} alt="" />
                    <hr></hr>
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico2} alt="" />
                    <hr></hr>
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico3} alt="" />
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico4} alt="" />
                    <hr></hr>
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico5} alt="" />
                    <hr></hr>
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico6} alt="" />
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico7} alt="" />
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={servico8} alt="" />
                </div>
            </div>
        </div>
    );
}


export default Servico;