import React from 'react';
import {Modal} from 'react-bootstrap';
import './../../../index.css'


function ModalFotoAmpla(props) {
  var icone = props.icone;
  return (
    <Modal
      {...props}
      centered
    >
    
      <Modal.Body  className="p-0">
          <div className="container text-center p-0">
            <div className="col-lg-12 p-0">
                <img className="w-100 borderRadius-10" src={icone}  />
            </div>
          </div> 
      </Modal.Body>
    </Modal>

  );
}
export default ModalFotoAmpla;