import Button from "../components/Button"
import Dinamicask from "../img/dinamic_01.png"
import Dinamicase from "../img/dinamic_02.png"
import Dinamicgift from "../img/dinamic_03.png"

const Guide = () => {
    return (
        <>
            <div className="container bg-white-waves">
                <div className="row">

                    <div className="col-12">
                        <h2 className='text-center title title-red title-size mt-5 px-5 py-xl-5 mb-xl-5 '>
                            ¿QUE TIENES QUE HACER? ¡MUY FACIL!
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-sm-12 col-xl-5 ">
                        <img className='d-block mx-auto img-size' src={Dinamicask} alt="Ask" />
                    </div>
                    <div className="col-sm-12 col-xl-7">
                        <p className='text-center text-xl-start text-guide primary-font px-2'>Tu misión es calcular correctamente y sin pasarte cuántos productos REVLON hay en una imagen.</p>
                    </div>
                </div>

                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-sm-12 col-xl-5 ">
                        <img className='d-block mx-auto img-size' src={Dinamicase} alt="Case" />
                    </div>
                    <div className="col-sm-12 col-xl-7">
                        <p className='text-center text-xl-end text-guide primary-font px-2'>La imagen del gran premio será la misma durante toda la promoción.</p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-sm-12 col-xl-5">
                        <img className='d-block mx-auto img-size' src={Dinamicgift} alt="Gift" />
                     
                    </div>
                    <div className="col-sm-12 col-xl-7">
                        <p className='text-center text-xl-start text-guide primary-font px-4 '>Para los premios semanales, la imagen cambia cada semana, ¡así que tendrás nuevas oportunidades de acertar y ganar cada vez!</p>
                    </div>
                    <div className="col-12 button pb-5 mt-4 py-xl-5 mb-xl-5">
                        <Button text="REGISTRA TU TICKET" route='/user/login'></Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Guide