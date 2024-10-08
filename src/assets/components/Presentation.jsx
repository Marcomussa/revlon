import React from 'react'
import Adv from "../../img/stamp-promo.png"

const Presentation = () => {
    return (
        <>
        <div className="container bg-red-pic">
            <div className="row">
                <div className='col-12 text-center'>
                    <div className='stamp-img position-absolute top-50 start-50 translate-middle'>
                        <img src={Adv} alt="Advertising" width={350} />
                        <h2 className='text-white fw-bolder fs-1 mt-1'>¡COMPRA, PARTICIPA Y GANA CON REVLON!</h2>
                        <p className='text-white fw-bold txt-s1'>¡Es tu momento de brillar! Si amas los productos REVLON, tienes una razón más para comprarlos, ¡y ganar premios!</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Presentation