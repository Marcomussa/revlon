import React from 'react'
import Adv from "../img/stamp-promo.png"
import Button from "../components/Button"

const Presentation = () => {
    return (
        <>
            <div className="container bg-red-pic pt-5">
                <div className="row pt-5 d-flex align-content-center flex-wrap">

                    <div className='col-12 col-lg-6 col-xl-6'>
                        <div className='text-center pt-3 mt-xl-5 pt-xl-5'>
                            <img src={Adv} alt="Advertising" className='img-stamp' />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-6 text-center pt-5 mt-xl-5 ">
                        <h2 className='text-center text-white primary-font title text-xl-start py-3 mt-xl-5 pt-xl-5'>MECÁNICA</h2>
                        <ol className='text-white primary-font text text-xl-start mb-3'>
                            <li>Compra un <b>mínimo de $599 MXN</b> en productos participantes REVLON en un solo ticket de compra.</li>
                            <li className='mt-3 mb-3'>Registra tu ticket, y calcula cuántos productos hay en las imagenes y si aciertas o te acercas sin pasarte.</li>
                            <li>¡Puedes ganar un viaje a la playa o uno de los kits especiales!</li>
                        </ol>
                        
                    </div>

                    <div className='col-12 mb-5 mt-3' style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div className='registerTicketBTNContainer'>
                            <Button text="REGISTRA TU TICKET" route='/user/login'></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Presentation