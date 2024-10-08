import React from 'react'
import Premio1 from "../img/premio_01.png"
import Premio2 from "../img/premio_02.png"


const Award = () => {
    return (
        <>
            <div className="container bg-red-sunset">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <p className='text-center text-white mt-5 mb-1 text'>La semanal, donde podrás uno de los</p>
                        <h2 className='text-center fw-bold text-white px-5 title'>KITS ESPECIALES PARTY ON.</h2>
                        <img className='d-block mx-auto' src={Premio2} alt="Premio2" width={250} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-center text-white text mb-1'>El gran premio, ¡donde podrás  llevarte un</p>
                        <h2 className='text-center fw-bold text-white px-5 title'>VIAJE A CANCUN PARA TI Y UN ACOMPAÑANTE!</h2>
                        <img className='d-block mx-auto my-5' src={Premio1} alt="Premio1" width={250} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Award