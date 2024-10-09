import React from 'react'
import Button from "../components/Button"

const RegisterTicket = () => {
  return (
    <>
    <div className="container bg-red">
        <div className="row">
            <div className="col-12">
                <img src="" alt="User" />
                <h2>HOLA LORENA!</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <img src="" alt="?" />
                <p>Parece que aun no has ingresado tus tickets. Puedes empezar ahora!</p>
                <Button text="REGISTRA TU TICKET"></Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterTicket