import React from 'react'
import Premio1 from "../img/premio_01.png"
import Premio2 from "../img/premio_02.png"


const Award = () => {
    return (
        <>
            <div className="container bg-red-sunset">
                <div className="row">
                    <div className="col-12 mt-4 col-md-6">
                        <p className='text-center text-white mt-5 mb-1 primary-font text'>La semanal, donde podrás uno de los</p>
                        <h2 className='text-center text-white px-5 title primary-font'>KITS ESPECIALES PARTY ON.</h2>
                        <img className='d-block mx-auto img-size' src={Premio2} alt="Premio2"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className='text-center text-white mb-1 primary-font margint text'>El gran premio, ¡donde podrás  llevarte un</p>
                        <h2 className='text-center text-white px-5 title primary-font'>VIAJE A CANCUN PARA TI Y UN ACOMPAÑANTE!</h2>
                        <img className='d-block mx-auto img-size' src={Premio1} alt="Premio1"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Award