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
          {/* <Carousel.Caption>
            <p className='text-black'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
