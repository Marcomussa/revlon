import React from 'react'
import Premio1 from "../img/premio_01.png"
import Premio2 from "../img/premio_02.png"


const Award = () => {
    return (
        <>
            <div className="container bg-red-sunset">
                <div className="row">
                    <div className="col-12  col-xl-6 mt-4">
                        <p className='text-center text-white mt-5 mb-1 primary-font text'>Donde podrás ganar uno de los</p>
                        <h2 className='text-center text-white px-5 title primary-font'>KITS ESPECIALES PARTY ON.</h2>
                        <img className='d-block mx-auto img-size' src={Premio2} alt="Premio2"/>
                    </div>
                    <div className="col-12 col-xl-6">
                        <p className='text-center text-white primary-font text mb-1 pt-xl-5 mt-xl-4 '>El gran premio, donde podrás llevarte</p>
                        <h2 className='text-center text-white title primary-font px-5'>¡ UN VIAJE A CANCÚN PARA TI Y UN ACOMPAÑANTE!</h2>
                        <img className='d-block mx-auto img-size' src={Premio1} alt="Premio1"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Award