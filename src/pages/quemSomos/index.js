import React, { Component } from 'react';
import visao from './../../img/quemSomos/visao.png';
import missao from './../../img/quemSomos/missao.png';
import valores from './../../img/quemSomos/valores.png';
import './../../index.css'

class QuemSomos extends Component {
    render() {
        return (
            <div className="container">
            <h3 className="text-center text-uppercase text-white">Quem somos nós?</h3>
            <hr></hr>
            <div className="row">
              <div className="col-lg-12 ml-auto">
                <p className="lead text-justify font-negrito">Somos a Gera + Engenharia. Atuamos com soluções especializadas em engenharia elétrica. Fundada em 2020, mas idealizada e sonhada há muito mais tempo. Apesar de nova no mercado, temos uma equipe  qualificada de profissionais prontos para atender sua residência ou empresa. Estamos sempre buscando as melhores tecnologias do setor de energia elétrica para levar até nossos clientes. A nossa alma é a energia solar, por ela lutamos e através dela acreditamos ser possível transformar nossos hábitos e provar que todos são capazes de gerar a energia que consomem.</p>
              </div>
            </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto mt-5">
                        <img className="w-100" src={visao} alt="" />
                    </div>
                    <div className="col-lg-4 ml-auto mt-5">
                        <img className="w-100" src={missao} alt="" />
                    </div>
                    <div className="col-lg-4 ml-auto mt-5">
                        <img className="w-100" src={valores} alt="" />
                    </div>
                </div>
          </div>   
        );
    }
}

export default QuemSomos;