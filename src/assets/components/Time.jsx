import React from 'react'
import Validity from "../img/clock.png"
import '../../styles/Backgrounds.css'

const Time = () => {
    return (
        <>
            <div className="container bg-black-glitter-time">
                <div className="row align-items-center">
                    <div className="col-4 col-xl-5 text-xl-end text-md-end">
                        <img src={Validity} className='img-clock' alt="Vigencia" />
                    </div>
                    <div className="col-8 col-xl-7 ps-4">
                        <p className='text-white mt-4 mb-0 subtitle subtitle-time'>Vigencia de promoción: </p>
                        <p className='text-white subtitle subtitle-time'>01 de noviembre al 15 de diciembre de 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Time