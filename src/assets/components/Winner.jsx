import React from 'react'
import Reference from "../img/reference.png"

const Winner = () => {
  return (
    <>
    <div className="container bg-black-glitter p-4 px-xl-5">
        <div className='row px-xl-5'>
          <div className='col-12 col-xl-4 text-center mt-5 text-xl-end py-xl-5 m-xl-0'>
            <img className='rounded-circle' src={Reference} width="150px" alt="Ganadora"/>
          </div>
          <div className="col-12 col-xl-8 text-center text-xl-start pe-xl-5">
            <h2 className='text-white primary-font title mt-4 mt-xl-5 '>¡FELICIDADES A LOS GANADORES DE ESTA SEMANA!</h2>
            <div className='bg-white rounded-3 mx-5 text-xl-start'>
              <p className='fs-5 mt-4 px-3 py-2'>MARIA FERNANDA FERNANDEZ DE CORDOVA</p>
            </div>
            <p className='primary-font subtitle text-white mb-5'>1 KIT Especial Party Revlon</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Winner