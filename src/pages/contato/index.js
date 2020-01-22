import React, { Component } from 'react';
import './../../vendor/fontawesome-free/css/all.min.css';
import './../../css/freelancer.min.css';

class Contato extends Component {
    render() {
        return (
            <>
            <div className="container">
                <h3 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contato</h3>
                {/* <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Nome</label>
                                    <input className="form-control" id="name" type="text" placeholder="Nome" required="required" data-validation-required-message="Por favor, informe seu nome."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email</label>
                                    <input className="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Por favor, informe seu email."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Telefone</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Telefone" required="required" data-validation-required-message="Por favor, informe seu telefone."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Mensagem</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Mensagem" required="required" data-validation-required-message="Por favor, informe uma mensagem"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br></br>
                            <div id="success"></div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>  
            </>
        );
    }
}
                    
export default Contato;