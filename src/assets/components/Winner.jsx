import React from 'react'/* 
import Reference from "../img/reference.png" */
import Slider from "./SliderNames.jsx"

const Winner = () => {
  const winners = [
    { boldText: "GANADORA DEL VIAJE: ", normalText: "Jessica Moreno (Querétaro)" },
    { boldText: "", normalText: "Anabel Cornelio (Tabasco)" },
    { boldText: "", normalText: "Hazel Paredes (Estado de México)" },
    { boldText: "", normalText: "Marlen Montemayor (Nuevo León)" },
    { boldText: "", normalText: "Cinthya Salazar (Sonora)" },
    { boldText: "", normalText: "Martha Gil (Nuevo León)" },
    { boldText: "", normalText: "Jesús Nuñez (CDMX)" },
    { boldText: "", normalText: "Mayra Trejo (Tabasco)" },
    { boldText: "", normalText: "Diana Carmona (Nuevo León)" },
    { boldText: "", normalText: "María Pachicano (Nuevo León)" },
    { boldText: "", normalText: "Ilse Martínez (Nuevo León)" },
    { boldText: "", normalText: "Sandra Duran (Estado de México)" },
    { boldText: "", normalText: "Abril Pérez (CDMX)" },
    { boldText: "", normalText: "Mariana Gutiérrez (Estado de México)" },
    { boldText: "", normalText: "Luz Palma (Tabasco)" },
    { boldText: "", normalText: "Diana Flores (Jalisco)" },
  ];
  return (
    <>
      <div className="container bg-black-glitter p-4 px-xl-5">
        <div className='row px-xl-5'>{/* 
          <div className='col-12 col-md-4 col-xl-4 text-center text-xl-end mt-5 py-xl-5 m-xl-0'>
            <img className='rounded-circle' src={Reference} width="150px" alt="Ganadora"/>
          </div> */}
          <div className="col-12 text-center pe-xl-5">
            <h2 className='text-white primary-font title mt-4 mt-xl-5'>¡FELICIDADES A LOS GANADORES DE ESTA SEMANA!</h2>
            <div className="name-container bg-white rounded-3 p-lg-5 p-5 my-4">
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