import Carousel from 'react-bootstrap/Carousel';
import Alaciadora from "../img/slider/Alaciadora.png"
import Cepill from "../img/slider/Cepillo-redondo.png"
import Cepillo from "../img/slider/Cepillo-termico.png"

function UncontrolledExample() {
  return (
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
          <Carousel.Caption className='text-black mt-5'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> 
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