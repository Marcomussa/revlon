import React from 'react'
import Registro from "../img/ticket.png"
import Carousel from "../components/Carousel"

const Participate = () => {
    return (
        <>
            <div className="container bg-white-waves">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 className='text-center primary-font title title-red'>¿Cómo participar?</h1>
                        <p className='text-center px-4 text primary-font'><b c>¡Es facilísimo! Compara productos REVLON participantes por $599 MXN o más:</b> Adquiere cualquiera de los productos participantes, puedes consultarlos aquí, ya sea en tiendas físicas o en línea en los comercios participantes.</p>
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
                        <p className="text-center mt-5 primary-font text mb-0">
                        <b>¡1 compra, 1 oportunidad!:</b></p>
                        <p className="text-center primary-font text">
                        <b>
                            Cada ticket de compra con productos REVLON por $599 MXN o más te da UNA oportunidad. ¡Así es, con una compra ya estás participando!</b>
                        </p>
                        <p className='text-center text primary-font'>(No importa si compras más de un producto, un ticket equivale a una participación).</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-center mt-5 primary-font title-red subtitle-h3 px-4'>
                            DOS DINÁMICAS, DOS FORMAS DE GANAR:
                        </h3>
                        <p className='text-center mb-5 text primary-font'>Cada ticket registrado te da la oportunidad de probar tus habilidades de calculo en dos dinámicas:</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Participate