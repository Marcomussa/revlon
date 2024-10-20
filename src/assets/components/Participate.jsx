import Registro from "../img/ticket.png"
import Carousel from "../components/Carousel"

const Participate = () => {
    return (
        <>
            <div className="container bg-white-waves mt-5">

                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center primary-font title title-red title-size pb-xl-5'>¿Cómo participar?</h1>
                        <p className='text-center text primary-font px-2 px-xl-4 text-guide'><b>¡Es facilísimo! Compara productos REVLON participantes por $599 MXN o más:</b> Adquiere cualquiera de los productos participantes, puedes consultarlos aquí, ya sea en tiendas físicas o en línea en los comercios participantes.</p>
                    </div>
                </div>

                <div className="row">
                    {/* Carrousel Inicio*/}
                    <Carousel></Carousel>
                    {/* Carrousel Final */}
                </div>

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={Registro} alt="Registro" className='d-block mx-auto img-size' />
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="text-center mt-5 primary-font text mb-0 text-end">
                            <b>¡1 compra, 1 oportunidad!:</b></p>
                        <p className="text-center primary-font text px-2">
                            <b>
                                Cada ticket de compra con productos REVLON por $599 MXN o más te da UNA oportunidad. ¡Así es, con una compra ya estás participando!</b>
                        </p>
                        <p className='text-center text primary-font'>(No importa si compras más de un producto, un ticket equivale a una participación).</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 pdkop">
                        <h2 className='text-center primary-font title-red subtitle-h3 mb-4 px-4 '>
                            DOS DINÁMICAS, DOS FORMAS DE GANAR:
                        </h2>
                        <p className='text-center text primary-font mb-5'>Cada ticket registrado te da la oportunidad de probar tus habilidades de calculo en dos dinámicas:</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Participate