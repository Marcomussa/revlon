import Button from "../components/Button"

const End = () => {
    return (
        <>
            <div className="container bg-red-galaxy p-xl-5">
                <div className="row p-xl-3 px-xl-5">
                    <div className="col-12 col-xl-7 ps-xl-5">
                        <h1 className=" text-center text-white primary-font title p-4">¡NO ESPERES MÁS! COMPRA TUS PRODUCTOS REVLON HOY, PARTICIPA Y ¡GANA!
                        </h1>
                    </div>
                    <div className="col-12 col-xl-5">
                        <div className='mb-5 pt-xl-5 ps-xl-0'>
                            <Button text="REGISTRA TU TICKET" route='/user/login'></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default End