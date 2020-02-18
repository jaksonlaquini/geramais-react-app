import React from 'react';
import {Modal} from 'react-bootstrap';
import './../../../index.css'
import ModalOrcamento from './../../../pages/orcamento'


function ModalServico(props) {
  var icone = props.icone;
  var servico = icone;
  const [modalOrcamentoShow, setModalOrcamentoShow] = React.useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter w-100">
          Serviço
          <hr className="w-100"></hr>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body  className="pt-0 p-40">
          <div className="container text-center">
            <div className="col-lg-12">
                <img className="w-100" src={servico}  />
                <button type="button"  onClick={() => setModalOrcamentoShow(true)} className="btn btn-outline-info btn-xl">Solicite um orçamento</button>
            </div>
          </div> 
      </Modal.Body>
      <Modal.Footer className="pt-0">
        <div class="text-center w-100">
          <button className="btn btn-danger" onClick={props.onHide} data-dismiss="modal">
            <i className="fas fa-times fa-fw"></i>
            Fechar
          </button>
          <ModalOrcamento servico={props.servico}
            show={modalOrcamentoShow}
            onHide={() => setModalOrcamentoShow(false)}
          />
        </div>
      </Modal.Footer>
    </Modal>

  );
}
export default ModalServico;