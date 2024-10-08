import Carousel from 'react-bootstrap/Carousel';
import Alaciadora from "../../img/Alaciadora.png"
import Cepill from "../../img/Cepillo-redondo.png"
import Cepillo from "../../img/Cepillo-termico.png"

function UncontrolledExample() {
  return (
    <>
    {/* 
    <div>
      <h2 className='text-center'>Como participar?</h2>
      <p>¡Es facilísimo! Compara productos REVLON participantes por $599 MXN o más:Adquiere cualquiera de los productos participantes, puedes consultarlos aquí, ya sea en tiendas físicas o en línea en los comercios participantes.</p>
    </div> */}

    <Carousel>
      <Carousel.Item>
        <div className='d-flex justify-content-center'>
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
        <div className='d-flex justify-content-center'>
          <img
            className="d-block"
            width={350}
            src={Cepill}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>  */}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <img
            className="d-block"
            width={350}
            src={Cepillo}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </div>

      </Carousel.Item>
    </Carousel>
    </>

  );
}

export default UncontrolledExample;