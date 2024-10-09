import React from 'react'
import Button from "../components/Button"

const LogIn = () => {
  return (
    <>
    <div className="container bg-red">
        <div className="row">
            <img src="" alt="User" />
            <h1>HOLA!</h1>
        </div>
        <div className="row">
            <input type="Ingresa tu correo" />
            <input type="Ingresa tu contraseña" />
        </div>
        <div className="row">
            <Button text="INICIAR SESION"></Button>
            Es la primera vez que registras un ticket?
            <Button text="REGISTRATE"></Button>
        </div>
    </div>
    </>
  )
}

export default LogIn