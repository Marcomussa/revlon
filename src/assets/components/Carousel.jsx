import Carousel from "react-bootstrap/Carousel";
import Alaciador from "../img/slider/Alaciador-2-en-1.webp"
import SecadoryVoluminazadorR from "../img/slider/Secador-y-Voluminizador-Removible.webp"
import CepilloRedondo from "../img/slider/Cepillo-redondo.webp"
import CepilloTermino from "../img/slider/Cepillo-termico-Alaciador.webp"
import CombEstilizador from "../img/slider/Combo-Estilizador.webp"
import SecadoryVoluminizadorC from "../img/slider/Secador-y-Voluminizador-con-cabezal.webp"
import SecadoryVoluminizador from "../img/slider/Secador-y-Voluminizador.webp"
import Secadora from "../img/slider/Secadora-de-maxima-potencia.webp"
import SecadoraMatch from "../img/slider/Secadora-Perfect-Match.webp"

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
            src={SecadoryVoluminizadorC}
            alt="First slide"
            lazy="loading"
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
            lazy="loading"
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
            lazy="loading"
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
            lazy="loading"
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
            lazy="loading"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            width={350}
            src={SecadoryVoluminazadorR}
            alt="First slide"
            lazy="loading"
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
            lazy="loading"
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
            lazy="loading"
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
            lazy="loading"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
