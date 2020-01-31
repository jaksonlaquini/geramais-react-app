import React from 'react';
import {Modal} from 'react-bootstrap';
import fundador from './../../img/fundador.png';
import './../../index.css'
function ModalFundador(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter w-100">
          Ceo e Fundador
          <hr className="w-100"></hr>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body  className="pt-0 p-40">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="mb-3 text-justify">Engenheiro eletricista, formado pela Universidade Federal do Espírito Santo, atua no setor de instalações residências ,industriais e projetos/execuções de obras de micro e minigeracão , com fonte solar fotovoltaica.</p>
                <p className="mb-3 text-justify">Tem mais de 1 MW de experiência de campo neste tipo de obra como engenheiro eletricista de campo e responsável técnico atuando pela Renew Energias Renováveis.</p>
                <p className="mb-3 text-justify">Para assumir o desafio de fundar uma nova empresa, Philipe vem se especializando continuamente. Participou em 2019 de feiras nacionais e internacionais como o Seminário do Estado da Baviera, na Alemanha , sobre energias renováveis. Lá ele se atualizou sobre novas tecnologias e realizou alguns cursos de especialização em energia fotovoltaica. </p>
              </div>
              <div className="col-lg-4">
                    <img className="logoFundador" src={fundador} title="CEO E FUNCADOR" />
              </div>
              <div className="col-lg-12">
              <p className="mb-3 text-justify">Mais recentemente concluiu o curso de “Projetos avançados de usinas solares para geração distribuída’’ na Unicamp, oferecido pelo Canal Solar.</p>
              </div>
            </div>
          </div>
   
      </Modal.Body>
      <Modal.Footer className="pt-0">
        <div class="row justify-content-center w-100">
          <button className="btn btn-primary" onClick={props.onHide} data-dismiss="modal">
            <i className="fas fa-times fa-fw"></i>
            Fechar
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalFundador;