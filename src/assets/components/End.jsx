import Button from "../components/Button"

const End = () => {
    return (
        <>
            <div className="container bg-red-galaxy">
                <div className="row">
                    <div className="col-12 pdkop">
                        <h1 className=" text-center text-white primary-font title p-4 pdkop">¡NO ESPERES MÁS! COMPRA TUS PRODUCTOS REVLON HOY, PARTICIPA Y ¡GANA!
                        </h1>
                        <div className='mb-5 button'>
                         <Button text="REGISTRA TU TICKET" route='/user/login'></Button>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default End