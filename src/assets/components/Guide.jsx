import Button from "../components/Button"
import Dinamicask from "../img/dinamic_01.webp"
import Dinamicase from "../img/dinamic_02.webp"
import Dinamicgift from "../img/dinamic_03.webp"

const Guide = () => {
    return (
        <>
            <div className="container bg-white-waves">
                <div className="row">

                    <div className="col-12">
                        <h2 className='text-center title title-red primary-font mt-5 px-3 pt-xl-5 mb-xl-5 '>
                            ¿QUÉ TIENES QUE HACER? ¡MUY FÁCIL!
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-sm-12 col-xl-4 px-xl-5">
                        <img className='d-block mx-auto img-size-guide' src={Dinamicask} alt="Ask" lazy="loading"/>
                        <p className='text-center text-guide text-gray primary-font px-2'>Tu misión es calcular, correctamente y sin pasarte, cuántos productos REVLON hay en una imagen. Cada vez que participas, tienes la oportunidad de acercarte más al Gran Premio.</p>
                    </div>
                    <div className="col-sm-12 col-xl-4 align-items-center">
                        <img className='d-block mx-auto img-size-guide' src={Dinamicase} alt="Case" lazy="loading"/>
                        <p className='text-center text-guide text-gray primary-font px-2'>La imagen del gran premio será la misma durante toda la promoción.</p>
                    </div>
                    <div className="col-sm-12 col-xl-4 align-items-center">
                        <img className='d-block mx-auto img-size-guide' src={Dinamicgift} alt="Gift" lazy="loading"/>
                        <p className='text-center text-guide text-gray primary-font px-4 '>Para los premios semanales, la imagen cambia cada semana, ¡así que tendrás nuevas oportunidades de acertar y ganar cada vez!</p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-12 pb-5 mt-4 pb-xl-4 mb-xl-5 mt-xl-0">
                        <div className="d-inline-flex p-2 bd-highlight">
                            <Button text="REGISTRA TU TICKET" route='/user/login'></Button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Guide