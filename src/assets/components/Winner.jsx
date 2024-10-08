import React from 'react'
import Reference from "../img/reference.png"

const Winner = () => {
  return (
    <>
    <div className="container bg-black-glitter p-4">
        <div className='row'>
          <div className='col-md-12 text-center mt-5'>
            <img className='rounded-circle' src={Reference} width="150px" alt="Ganadora"/>
            <h2 className='fw-bolder text-white mt-4 fs-1 primary-font'>¡FELICIDADES A LOS GANADORES DE ESTA SEMANA!</h2>
            {/* <p className='d-inline bg-white rounded p-3'>MARIA FERNANDA FERNANDEZ DE CORDOVA</p> */}
            <h3 className='fw-bolder text-white fs-2 mt-3 primary-font'>GANADORA DE:</h3>
            <p className='primary-font fw-bold text-white'>1 KIT Especial Party Revlon</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Winner