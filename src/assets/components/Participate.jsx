import React from 'react'
import Registro from "../../img/ticket.png"
import Carousel from "../components/Carousel"

const Participate = () => {
    return (
        <>
            <div className="container-fluid-lg bg-white-waves">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
                <div className="row">
                    {/* Carrousel Inicio*/}
                    <Carousel></Carousel>
                    {/* Carrouse Final */}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img src={Registro} alt="Registro" width={250} className='d-block mx-auto' />
                        <h3 className="text-center fs-6 fw-bold mt-5">¡1 compra, 1 oportunidad!:
                            Cada ticket de compra con productos REVLON por $599 MXN o más te da UNA oportunidad. ¡Así es, con una compra ya estás participando!</h3>
                        <p className='text-center txt-s1'>(No importa si compras más de un producto, un ticket equivale a una participación).</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-center text-danger fw-bold mt-5 fs-2'>
                            DOS DINAMICAS, DOS FORMAS DE GANAR:
                        </h3>
                        <p className='text-center mb-5 txt-s1'>Cada ticket registrado te da la oportunidad de probar tus habilidades de calculo en dos dinámicas:</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Participate