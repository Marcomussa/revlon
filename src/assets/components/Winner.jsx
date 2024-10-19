import React from 'react'
import Reference from "../img/reference.png"

const Winner = () => {
  return (
    <>
    <div className="container bg-black-glitter p-4">
        <div className='row'>
          <div className='col-md-12 text-center mt-5'>
            <img className='rounded-circle' src={Reference} width="150px" alt="Ganadora"/>
            <h2 className='text-white mt-4 primary-font title'>¡FELICIDADES A LOS GANADORES DE ESTA SEMANA!</h2>
            <div className='bg-white rounded-3 mx-5 '>
              <p className='fs-5 mt-4 px-3 py-2 p-xl-5'>MARIA FERNANDA FERNANDEZ DE CORDOVA</p>
            </div>
            <h3 className='text-white subtitle-h3 primary-font mb-0'>GANADORA DE:</h3>
            <p className='primary-font subtitle text-white mb-5'>1 KIT Especial Party Revlon</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Winner