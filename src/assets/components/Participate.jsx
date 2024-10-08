import React from 'react'
import Registro from "../img/ticket.png"
import Carousel from "../components/Carousel"

const Participate = () => {
    return (
        <>
            <div className="container bg-white-waves">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
                <div className="row">
                    {/* Carrousel Inicio*/}
                    <Carousel></Carousel>
                    {/* Carrouse Final */}
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <img src={Registro} alt="Registro" width={250} className='d-block mx-auto' />
                        <h3 className="text-center fs-6 fw-bold mt-5 primary-font">¡1 compra, 1 oportunidad!:</h3>
                            <h3 className="text-center fs-6 fw-bold primary-font">
                            Cada ticket de compra con productos REVLON por $599 MXN o más te da UNA oportunidad. ¡Así es, con una compra ya estás participando!
                            </h3>
                        <p className='text-center txt-s1 primary-font'>(No importa si compras más de un producto, un ticket equivale a una participación).</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-center fw-bold mt-5 fs-2 primary-font'>
                            DOS DINAMICAS, DOS FORMAS DE GANAR:
                        </h3>
                        <p className='text-center mb-5 txt-s1 primary-font'>Cada ticket registrado te da la oportunidad de probar tus habilidades de calculo en dos dinámicas:</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Participate