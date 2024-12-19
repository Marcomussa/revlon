import React from 'react'/* 
import Reference from "../img/reference.png" */
import Slider from "./SliderNames.jsx"

const Winner = () => {
  const winners = [
    'Anabel Cornelio (Tabasco)',
    'Hazel Paredes (Estado de México)',
    'Marlene Montemayor (Nuevo León)',
    'Cinthya Salazar (Sonora)',
    'Martha	Gil (Nuevo León)',
    'Jesús Nuñez (CDMX)',
    'Mayra Trejo (Tabasco)',
    'Diana Carmona (Nuevo León)',
    'María Pachicano (Nuevo León)',
    'Ilse Martínez (Nuevo León)',
    'Sandra Duran (Estado de México)',
    'Abril Pérez (CDMX)',
    'Mariana Gutiérrez (Estado de México)',
    'Luz Palma (Tabasco)',
    'Diana Flores (Jalisco)'
  ]
  return (
    <>
    <div className="container bg-black-glitter p-4 px-xl-5">
        <div className='row px-xl-5'>{/* 
          <div className='col-12 col-md-4 col-xl-4 text-center text-xl-end mt-5 py-xl-5 m-xl-0'>
            <img className='rounded-circle' src={Reference} width="150px" alt="Ganadora"/>
          </div> */}
          <div className="col-12 text-center pe-xl-5">
            <h2 className='text-white primary-font title mt-4 mt-xl-5 '>¡FELICIDADES A LOS GANADORES DE ESTA SEMANA!</h2>
            <div className="name-container bg-white rounded-3 p-3 my-4">
              <Slider names={winners}></Slider>
            </div>
            <p className='primary-font subtitle text-white mb-5'>1 KIT Especial Party Revlon</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Winner