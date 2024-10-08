import React from 'react'
import Validity from "../../img/clock.png"
import '../../styles/Backgrounds.css'

const Time = () => {
    return (
        <>
            <div className="container-fluid bg-black-glitter">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-4">
                        <img src={Validity} width="40%" alt="Vigencia" />
                    </div>
                    <div className="col-md-8" >
                        <h3 className='text-white text-center'>Vigencia de promoción: 01 de noviembre al 15 de diciembre de 2024</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Time