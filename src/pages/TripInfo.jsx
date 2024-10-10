import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Premio1 from "../assets/img/premio_01.png"

const TripInfo = () => {
  return (

    <>
    <Navbar></Navbar>
      <div className="container bg-beach">
        <div className="row pt-5">
          <div className="col-md-12 text-center mt-5 pt-5">
            <img src={Premio1} alt="" width={350} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-white fw-bold primary-font title px-4">PARTICIPA POR UN VIAJE TODO PAGADO A CANCÚN</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white">Te mostraremos una imagen que estará repleta de productos <b>REVLON</b>, mírala con cuidado y calcula cuántos productos hay en ella.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white"><b>Tómate tu tiempo antes de escribír una respuesta final.</b></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Button text="CONTINUAR" route="/user/ticket/trip/calculate-total"></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  );
};

export default TripInfo;
