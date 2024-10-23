import React from 'react'
import Adv from "../img/stamp-promo.png"
import Button from "../components/Button"

const Presentation = () => {
    return (
        <>
        <div className="container bg-red-pic">
            <div className="row">
                <div className='col-12'>
                    <div className='text-center stamp-img position-absolute top-50 start-50 translate-middle pt-4'>
                        <img src={Adv} alt="Advertising" className='img-stamp' width={350}/>
                        <h2 className='text-center text-white primary-font title py-3'>MECÁNICA</h2>
                        <ol className='text-white primary-font  text mb-3'>
                            <li>Compra un <b>mínimo de $599 MXN</b> en productos participantes REVLON en un solo ticket de compra.</li>
                            <li>Registra tu ticket, y calcula cuántos productos hay en las imagenes y si aciertas o te acercas sin pasarte.</li>
                            <li>¡Puedes ganar un viaje a la playa o uno de los kits especiales!</li>
                        </ol>
                        <Button text="REGISTRA TU TICKET" route='/user/login'></Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Presentation