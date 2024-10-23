import Carousel from "react-bootstrap/Carousel";
import Alaciadora from "../img/slider/Alaciadora.png";
import CepilloR from "../img/slider/Cepillo-redondo.png";
import CepilloT from "../img/slider/Cepillo-termico.png";
import ComboE from "../img/slider/Combo Estilizador Control de Frizz Secadora y Alaciadora.png";
import SecadorR from "../img/slider/Secador y Voluminizador R.png";
import SecadorT from "../img/slider/Secador y Voluminizador T.png";
import Secador from "../img/slider/Secador y Voluminizador.png";
import SecadoraMx from "../img/slider/Secadora mx.png";
import Secadora from "../img/slider/Secadora.png";

function UncontrolledExample() {
  return (
    <Carousel
      prevIcon={
        <span className="carousel-control-prev-icon custom-carousel-control" />
      }
      nextIcon={
        <span className="carousel-control-next-icon custom-carousel-control" />
      }
    >
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={Alaciadora}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>Alaciadora 2 en 1 con Triple Infusión de Aceites Naturales.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={CepilloR}
            alt="First slide"
          />
          <Carousel.Caption className="text-black mt-5">
            <p className='text-black'>Cepillo redondo calefactor de 1” (254 cm) con infusión de aceite de coco.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={CepilloT}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>
              Cepillo Térmico Alaciador de 11.4cm con infusión de aceite de coco.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={ComboE}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>
              Combo Estilizador Control de Frizz Secadora y Alaciadora.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={SecadorR}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>
              One-Step™ Secador y Voluminizador Removible con Cabezal Intercambiable.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={SecadorT}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>
              Salon ONE-STEP Secador y Voluminizador Titanio.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={Secador}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>
              One-Step™ Secador y Voluminizador con Cabezal Intercambiable.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={SecadoraMx}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>
              Secadora Potencia Maxima.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={Secadora}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='text-black'>
              Secadora De Cabello Perfect Match.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
