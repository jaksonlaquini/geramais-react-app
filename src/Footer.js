import React from 'react';

const Footer = () =>{
    return (
        <footer className="footer text-center">
        <div className="meioDeContato">
          <div className="row">
            <div className="col-lg-4 mb-30">
              <h4 className="text-uppercase mb-4">Localização</h4>
              <p className="lead mb-0">Avenida Francisco Lacerda de Aguiar,</p>
              <p className="lead mb-0"> 274, Ed Esmeralda, sala 101 (101,08 km),</p>
              <p className="lead mb-0">29303-381 Cachoeiro de Itapemirim</p>
            </div>

            <div className="col-lg-4 mb-30 ">
              <h4 className="text-uppercase mb-4">Siga-nos</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/geramaisengenharia">
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/company/geramaisengenharia">
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/geramaisengenharia/">
                <i className="fab fa-fw fa-instagram"></i>
              </a>
            </div>
            <div className="col-lg-4">
                <div>
                  <a className="contatosTelEmail" href="https://bit.ly/2FNFTjM">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <span>(28) 99903-0449</span>
                </div>

                <div >
                  <a className="contatosTelEmail" href="https://bit.ly/2FNFTjM">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <span>(27) 99971-5445</span>
                </div>
                <div >
                  <a href="mailto:contato@geramaisengenharia.com.br" target="_self" data-content="contato@geramaisengenharia.com.br" data-type="mail">
                    <a className="contatosTelEmail">
                      <i className="fa fa-envelope"></i>
                    </a>
                    <span>contato@geramaisengenharia.com.br</span>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
