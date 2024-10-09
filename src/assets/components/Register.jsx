import React from 'react'
import Button from "../components/Button"

const Register = () => {
    return (
        <>
            <div className="container bg-red">
                <div className="row">
                    <h1>INGRESA TUS DATOS PARA CREAR TU PERFIL</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Nombre(s)*</p>
                        <input type="Ingresa tu nombre" name="" id="" />
                        <p>Apellidos*</p>
                        <input type="Ingresa tus Apellidos" name="" id="" />
                        <p>Correo electronico*</p>
                        <input type="Ingresa tu correo electronico" name="" id="" />
                        <p>Contraseña*</p>
                        <input type="Ingresa tu contraseña" name="" id="" />
                        <p>Confirmar contraseña*</p>
                        <input type="#" name="" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Edad</p>
                        <div className='d-flex'>
                            <input type="DD" />
                            <input type="MM" />
                            <input type="AA" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Codigo postal*</p>
                        <input type="Ingresa tu codigo postal" />
                        <p>Como te enteraste de esta dinamica?*</p>
                        <input type="Escribe el medio por el cual llego a ti" />
                        <Button text="REGISTRATE"></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register