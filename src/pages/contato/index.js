import React, { Component } from 'react';
import './../../vendor/fontawesome-free/css/all.min.css';
import './../../css/freelancer.min.css';
import $ from 'jquery';

class Contato extends Component {

    constructor() {
        super();
        this.state ={nome: '', email: '', telefone: '', mensagem: ''}
        this.enviarForm = this.enviarForm.bind(this);
        this.setNome =  this.setNome.bind(this);
        this.setEmail =  this.setEmail.bind(this);
        this.setTelefone =  this.setTelefone.bind(this);
        this.setMensagem =  this.setMensagem.bind(this);
    }

    enviarForm(evento) {
        evento.preventDefault();
        $.ajax({
            url:'',
            contentType:'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({nome: this.state.nome, email: this.state.email, telefone: this.state.telefone, mensagem: this.state.mensagem}),
            success: function(resposta) {
                console.log("enviado com sucesso");
            } , 
            error: function(resposta) {
                console.log("error");
            }
        });

    }

    setNome(evento) {
        this.setState({nome: evento.target.value});
    }

    setEmail(evento) {
        this.setState({email: evento.target.value});
    }

    setTelefone(evento) {
        this.setState({telefone: evento.target.value});
    }

    setMensagem(evento) {
        this.setState({mensagem: evento.target.value});
    }

    // componentDidMount() {
    //     $.ajax({
    //         url:"",
    //         dataType: 'json',
    //         success: 
    //     });
    // }

    render() {
        return (
            <>
            <div className="container">

                <h3 className="text-center text-uppercase text-secondary">Contato</h3>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={this.enviarForm} method="post">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Nome</label>
                                    <input className="form-control" id="name" type="text" placeholder="Nome" required="required" value={this.state.nome} data-validation-required-message="Por favor, informe seu nome." onChange={this.setNome}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email</label>
                                    <input className="form-control" id="email" type="email" placeholder="Email" required="required" value={this.state.email} data-validation-required-message="Por favor, informe seu email." onChange={this.setEmail}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Telefone</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Telefone" required="required" value={this.state.telefone} data-validation-required-message="Por favor, informe seu telefone." onChange={this.setTelefone}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Mensagem</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Mensagem" required="required" value={this.state.mensagem} data-validation-required-message="Por favor, informe uma mensagem" onChange={this.setMensagem}></textarea>
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