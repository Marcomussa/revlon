import React from 'react'
import Button from "../components/Button"

const End = () => {
    return (
        <>
            <div className="container bg-red-galaxy">
                <div className="row">
                    <div className="col-12">
                        <h1 className="p-4 mt-5 text-center text-white primary-font title">¡NO ESPERES MÁS! COMPRA TUS PRODUCTOS REVLON HOY, PARTICIPA Y ¡GANA!
                        </h1>
                        <div className='mb-5 pb-5'>
                         <Button text="REGISTRA TU TICKET" route='/user/login'></Button>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default End