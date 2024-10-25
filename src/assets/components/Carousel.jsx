import Carousel from "react-bootstrap/Carousel";
import Alaciador from "../img/slider/Alaciador-2-en-1.png"
import SecadoryVoluminazadorR from "../img/slider/Secador-y-Voluminizador-Removible.png"
import CepilloRedondo from "../img/slider/Cepillo-redondo.png"
import CepilloTermino from "../img/slider/Cepillo-termico-Alaciador.png"
import CombEstilizador from "../img/slider/Combo-Estilizador.png"
import SecadoryVoluminizadorC from "../img/slider/Secador-y-Voluminizador-con-cabezal.png"
import SecadoryVoluminizador from "../img/slider/Secador-y-Voluminizador.png"
import Secadora from "../img/slider/Secadora-de-maxima-potencia.png"
import SecadoraMatch from "../img/slider/Secadora-Perfect-Match.png"

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
            src={SecadoryVoluminazadorR}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={CepilloRedondo}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={CepilloTermino}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={CombEstilizador}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={Alaciador}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={SecadoryVoluminizadorC}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={SecadoraMatch}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={SecadoryVoluminizador}
            alt="First slide"
          />
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
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
