import React, { Component } from 'react';
import Loading from './../../pages/loading';
import './../../vendor/fontawesome-free/css/all.min.css';
import './../../css/freelancer.min.css';
import $ from 'jquery';

class Contato extends Component {

    constructor() {
        super();
        this.state ={nome: '', email: '', telefone: '', mensagem: '', loading: false}
        this.setState = this.setState.bind(this);
        this.enviarForm = this.enviarForm.bind(this);
        this.setNome =  this.setNome.bind(this);
        this.setEmail =  this.setEmail.bind(this);
        this.setTelefone =  this.setTelefone.bind(this);
        this.setMensagem =  this.setMensagem.bind(this);
    }

    enviarForm(evento) {
        evento.preventDefault();
        if(this.setState && this.state.email && this.state.nome && this.state.telefone && this.state.mensagem) {
            this.setState({loading : true});
            $.ajax({
                url:'https://geramaisengenhariaapi.herokuapp.com/email/enviar',
                headers:"{'Access-Control-Allow-Origin', '*'}",
                contentType:'application/json',
                dataType: 'json',
                type: 'post', 
                data: JSON.stringify({nome: this.state.nome, email: this.state.email, telefone: this.state.telefone, mensagem: this.state.mensagem}),
                success: function (resposta) {
                    this.setState({nome: '', email: '', telefone: '', mensagem: '', loading: false});
                    console.log("enviado com sucesso");
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Email enviado com sucesso! </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    $('#contactForm').trigger("reset");
                }.bind(this),
                error: function (resposta) {
                    this.setState({loading : false});

                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Desculpe " + this.state.nome + ", seu email não pode ser enviado. Por favor tente mais tarde!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                }.bind(this)
                })
        }
      
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

    render() {
        return (
            <>
        <Loading
          show={this.state.loading} />
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