import React, { Component } from 'react';

import './../../index.css'
class NossosProjetos extends Component {
    render() {
        return (
            <div className="container">
            <h3 className="text-center text-uppercase text-secondary">Projetos</h3>
            <hr></hr>
                <div className="row min-h-100" >
                    <div className="w-100 col-lg-4 ml-auto d-flex align-items-center justify-content-center rural">
                        <div>
                            <p className="tituloCardsNossosProjetos">Rural</p>
                            <br></br>
                            <p><a className="but_st1 medium blue textbutton" href="/projetos/1">Clique Aqui</a></p>
                        </div>
                    </div>

                    <div className="w-100 col-lg-4 ml-auto d-flex align-items-center justify-content-center residencial">
                        <div>
                            <p className="tituloCardsNossosProjetos">Residencial</p>
                            <br></br>
                            <p><a className="but_st1 medium blue textbutton" href="/projetos/2">Clique Aqui</a></p>
                        </div>
                    </div>


                    <div className="w-100 col-lg-4 ml-auto d-flex align-items-center justify-content-center comercial">
                        <div>
                            <p className="tituloCardsNossosProjetos">Comercial</p>
                            <br></br>
                            <p><a className="but_st1 medium blue textbutton" href="/projetos/3">Clique Aqui</a></p>
                        </div>
                    </div> 
                </div>
            </div>   
        );
    }
}

export default NossosProjetos;