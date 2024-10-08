import React from 'react'
import Dinamicask from "../img/dinamic_01.png"
import Dinamicase from "../img/dinamic_02.png"
import Dinamicgift from "../img/dinamic_03.png"

const Guide = () => {
    return (
        <>
            <div className="container bg-white-waves">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-center fw-bold text-danger mt-5'>
                            ¿QUE TIENES QUE HACER? ¡MUY FACIL!
                        </h2>
                        <img className='d-block mx-auto' src={Dinamicask} alt="Ask" width={250}/>
                        <p className='text-center txt-s1'>Tu misión es calcular correctamente y sin pasarte cuántos productos REVLON hay en una imagen.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img className='d-block mx-auto' src={Dinamicase} alt="Case" width={250}/>
                        <p className='text-center txt-s1'>La imagen del gran premio será la misma durante toda la promoción.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img className='d-block mx-auto' src={Dinamicgift} alt="Gift" width={250}/>
                        <p className='text-center txt-s1'>Para los premios semanales, la imagen cambia cada semana, ¡así que tendrás nuevas oportunidades de acertar y ganar cada vez!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guide