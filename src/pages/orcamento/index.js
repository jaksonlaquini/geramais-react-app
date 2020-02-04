import React from 'react';
import { Modal } from 'react-bootstrap';
import './../../index.css'
import './../../vendor/fontawesome-free/css/all.min.css';
import './../../css/freelancer.min.css';

function ModalOrcamento(props) {
  return (
    <Modal
      {...props}
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
                  <form name="sentMessage" id="orcamentoForm" novalidate="novalidate">
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Nome</label>
                        <input className="form-control" id="name" type="text" placeholder="Nome" required="required" data-validation-required-message="Por favor, informe seu nome." />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email</label>
                        <input className="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Por favor, informe seu email." />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Telefone</label>
                        <input className="form-control" id="phone" type="tel" placeholder="Telefone" required="required" data-validation-required-message="Por favor, informe seu telefone." />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>

                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Endereço</label>
                        <input className="form-control" id="name" type="text" placeholder="Endereco" required="required" data-validation-required-message="Por favor, informe seu email." />
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
                    <div className="form-group text-align-center" >
                      <button type="submit" className="btn btn-primary btn-xl" id="sendOrcamentoButton">Enviar</button>
                    </div>
                  </form>
      
      </Modal.Body>
      {/* <Modal.Footer className="p-20">
        <div class="row justify-content-center w-100">
          <button className="btn btn-primary" onClick={props.onHide} data-dismiss="modal">
            <i className="fas fa-times fa-fw"></i>
            Fechar
          </button>
        </div>
      </Modal.Footer> */}
    </Modal>
  );
}
export default ModalOrcamento;