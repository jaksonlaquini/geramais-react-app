import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Loading from './../../pages/loading';
import './../../index.css'
import './../../vendor/fontawesome-free/css/all.min.css';
import './../../css/freelancer.min.css';
import $ from 'jquery';

class ModalOrcamento extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: '', email: '', telefone: '', endereco: '', mensagem: '', servico: 'Não Informado', anexo: null, loading: false }
    this.setState = this.setState.bind(this);
    this.enviarForm = this.enviarForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setTelefone = this.setTelefone.bind(this);
    this.setEndereco = this.setEndereco.bind(this);
    this.setMensagem = this.setMensagem.bind(this);
    this.setServico = this.setServico.bind(this);
    this.setLimpar = this.setLimpar.bind(this);
    this.setAnexo = this.setAnexo.bind(this);
  }

  componentDidMount() {
    if (this.props.servico) {
      this.setState({ servico: this.props.servico });
    }
  }

  enviarForm(evento) {
     evento.preventDefault();
    if (this.setState && this.state.email && this.state.nome && this.state.telefone && this.state.endereco && this.state.mensagem) {
      this.setState({ loading: true });
        
      const formData = new FormData();   
      formData.append('servico', this.state.servico);
      formData.append('nome', this.state.nome);
      formData.append('email', this.state.email);
      formData.append('telefone', this.state.telefone);
      formData.append('endereco', this.state.endereco);
      formData.append('mensagem', this.state.mensagem);
      formData.append('anexo', this.state.anexo);

      $.ajax({
        url: 'https://geramaisengenhariaapi.herokuapp.com/email/enviarorcamento',
        headers: "{'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin', '*'}",
        type : "POST",
      data : formData,
      processData : false,
      contentType : false,
      cache : false,
      timeout : 600000,
        success: function (data) {
          this.setState({ nome: '', email: '', telefone: '', endereco: '', mensagem: '', servico: "Não Informado", loading: false , anexo: ''});
          $('#mensagemOrcamento').html("<div class='alert alert-success'>");
          $('#mensagemOrcamento > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#mensagemOrcamento > .alert-success')
            .append("<strong>Email enviado com sucesso! </strong>");
          $('#mensagemOrcamento > .alert-success')
            .append('</div>');

          $('#orcamentoForm').trigger("reset");
        }.bind(this),
        error: function (data) {
          this.setState({ loading: false });

          $('#mensagemOrcamento').html("<div class='alert alert-danger'>");
          $('#mensagemOrcamento > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#mensagemOrcamento > .alert-danger').append($("<strong>").text("Desculpe " + this.state.nome + ", seu email não pode ser enviado. Por favor tente mais tarde!"));
          $('#mensagemOrcamento > .alert-danger').append('</div>');
          $('#orcamentoForm').trigger("reset");
        }.bind(this)
      });
    } else {

      $('#mensagemOrcamento').html("<div class='alert alert-danger'>");
      $('#mensagemOrcamento > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#mensagemOrcamento > .alert-danger').append($("<strong>").text("Informe todos os campos obrigatórios! (*)"));
      $('#mensagemOrcamento > .alert-danger').append('</div>');
    }
  }

  setNome(evento) {
    this.setState({ nome: evento.target.value });
  }

  setEmail(evento) {
    this.setState({ email: evento.target.value });
  }

  setTelefone(evento) {
    this.setState({ telefone: evento.target.value });
  }

  setEndereco(evento) {
    this.setState({ endereco: evento.target.value });
  }

  setMensagem(evento) {
    this.setState({ mensagem: evento.target.value });
  }

  setServico(evento) {
    this.setState({ servico: evento.target.value });
  }

  setAnexo(arquivo) {
    this.setState({ anexo: arquivo[0]});
  }

  setLimpar() {
    this.setState({ nome: '', email: '', telefone: '', endereco: '', mensagem: '', servico: "Não Informado", loading: false , anexo:''});
  }

  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Orçamento
          <hr className="w-100"></hr>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0 p-40">
            <Loading
              show={this.state.loading} />
            <form name="sentMessageOrcamento" id="orcamentoForm"  method="post" onSubmit={this.enviarForm} >
              <div className="control-group">
                <div className="form-group mb-0 pb-2">
                  <label>Informe o serviço que deseja solicitar.</label>
                  <select title="Serviço" onChange={this.setServico} value={this.state.servico} className="form-control fontSizeIconesServicos" id="sel1">
                    <option className="controls" value="Não Informado">Selecione um serviço</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Energia Solar">Energia Solar</option>
                    <option value="Laudos técnicos">Laudos técnicos</option>
                    <option value="Otimização do consumo de energi">Otimização do consumo de energia</option>
                    <option value="Projetos elétricos">Projetos elétricos</option>
                    <option value="Projeto técnico SPDA">Projeto técnico SPDA</option>
                    <option value="Vistoria">Vistoria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Nome*</label>
                  <input className="form-control" id="name" type="text" placeholder="Nome*" required="required" data-validation-required-message="Por favor, informe seu nome."
                    value={this.state.nome} onChange={this.setNome} />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email</label>
                  <input className="form-control" id="email" type="email" placeholder="Email*" required="required" data-validation-required-message="Por favor, informe seu email."
                    value={this.state.email} onChange={this.setEmail} />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Telefone</label>
                  <input className="form-control" id="phone" type="tel" placeholder="Telefone*" required="required" data-validation-required-message="Por favor, informe seu telefone."
                    value={this.state.telefone} onChange={this.setTelefone} />
                </div>
              </div>

              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Endereço</label>
                  <input className="form-control" id="name" type="text" placeholder="Endereco*" required="required" data-validation-required-message="Por favor, informe seu email."
                    value={this.state.endereco} onChange={this.setEndereco} />
                </div>
              </div>
              
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Mensagem</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Mensagem*" required="required" data-validation-required-message="Por favor, informe uma mensagem"
                    value={this.state.mensagem} onChange={this.setMensagem}></textarea>
                </div>
              </div>
              <div className="control-group">
                <div class="form-group">
                  <label for="exampleFormControlFile1"><b>Anexe uma cópia da sua conta de luz.</b></label>
                  <input type="file" className="form-control-file" onChange={ (e) => this.setAnexo(e.target.files) } id="exampleFormControlFile1"></input>
                </div>
              </div>
              <br></br>
              <div id="mensagemOrcamento"></div>
              <div className="form-group text-align-center" >
                <button type="submit" className="btn btn-primary btn-xl mr-10" >Enviar</button>
                <button type="button" className="btn btn-light btn-xl" onClick={this.setLimpar}>Limpar</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalOrcamento;