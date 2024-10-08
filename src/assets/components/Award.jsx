import React from 'react'
import Premio1 from "../../img/img_premio_01.png"
import Premio2 from "../../img/img_premio_02.png"


const Award = () => {
    return (
        <>
            <div className="container bg-red-sunset">
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-center text-white'>La semanal, donde podrás uno de los</p>
                        <h2 className='text-center fw-bold text-white'>KITS ESPECIALES PARTY ON.</h2>
                        <img className='d-block mx-auto' src={Premio2} alt="Premio2" width={250} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-center text-white'>El gran premio, ¡donde podrás  llevarte un</p>
                        <h2 className='text-center fw-bold text-white'>VIAJE A CANCUN PARA TI Y UN ACOMPAÑANTE!</h2>
                        <img className='d-block mx-auto' src={Premio1} alt="Premio1" width={250} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Award