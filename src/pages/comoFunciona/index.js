import React from 'react';
import funciona1 from './../../img/funcionamento/1.png';
import funciona2 from './../../img/funcionamento/2.png';
import funciona4 from './../../img/funcionamento/4.png';
import funciona5 from './../../img/funcionamento/5.png';
import funciona6 from './../../img/funcionamento/6.png';
import funciona7 from './../../img/funcionamento/7.png';

import './../../index.css'

function ComoFunciona() {
    return (
        <div className="container">
            <h3 className="text-center text-uppercase text-white">Como funciona</h3>
            <hr></hr>
            <div className="row">
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={funciona1} alt="" />
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={funciona2} alt="" />
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={funciona4} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={funciona5} alt="" />
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={funciona6} alt="" />
                </div>
                <div className="col-lg-4 ml-auto mt-5">
                    <img className="w-100" src={funciona7} alt="" />
                </div>
            </div>
        </div>
    );
}


export default ComoFunciona;