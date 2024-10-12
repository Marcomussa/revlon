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
                        <img src={Adv} alt="Advertising" width={350} />
                        <h2 className='text-white primary-font text-center pt-3 title'>¡COMPRA, PARTICIPA Y GANA CON REVLON!</h2>
                        <p className='text-white primary-font text-center mb-3 subtitle'>¡Es tu momento de brillar! Si amas los productos REVLON, tienes una razón más para comprarlos, ¡y ganar premios!</p>
                        <Button text="REGISTRA TU TICKET" route='/user/login'></Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Presentation