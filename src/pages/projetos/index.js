import React, { Component } from 'react';
import projeto1 from './../../img/projetos/1.jpeg';
import projeto2 from './../../img/projetos/2.jpeg';
import projeto3 from './../../img/projetos/3.jpeg';
import projeto4 from './../../img/projetos/4.jpeg';
import projeto5 from './../../img/projetos/5.jpeg';
import projeto6 from './../../img/projetos/6.jpeg';
import projeto7 from './../../img/projetos/7.jpg';
import projeto8 from './../../img/projetos/8.jpeg';
import projeto9 from './../../img/projetos/9.jpeg';
import projeto10 from './../../img/projetos/10.jpg';
import projeto11 from './../../img/projetos/11.jpeg';
import projeto12 from './../../img/projetos/12.jpeg';

import './../../index.css'

class Projetos extends Component {
    render() {
        return (
            <div className="container">
            <h3 className="text-center text-uppercase text-secondary">Projetos</h3>
            <hr></hr>
                <div className="row">
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto1} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto4} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto8} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100 projetoImg4" src={projeto2} alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto5} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto6} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100 projetoImg7" src={projeto7} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto3} alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto9} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100 projetoImg7" src={projeto10} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto11} alt="" />
                    </div>
                    <div className="col-lg-3 ml-auto mt-5">
                        <img className="w-100" src={projeto12} alt="" />
                    </div>
                </div>
          </div>   
        );
    }
}

export default Projetos;