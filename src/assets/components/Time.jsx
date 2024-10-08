import React from 'react'
import Validity from "../img/clock.png"
import '../../styles/Backgrounds.css'

const Time = () => {
    return (
        <>
            <div className="container bg-black-glitter-time">
                <div className="row">
                    <div className="col-4">
                        <img src={Validity}  width="100%" alt="Vigencia" />
                    </div>
                    <div className="col-8">
                        <p className='text-white fw-bolder mt-4 subtitle'>Vigencia de promoción: 01 de noviembre al 15 de diciembre de 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Time