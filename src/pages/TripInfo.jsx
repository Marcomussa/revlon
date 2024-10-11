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
            <h2 className="text-white primary-font title px-4">PARTICIPA POR UN VIAJE TODO PAGADO A CANCÚN</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font">Te mostraremos una imagen que estará repleta de productos <b>REVLON</b>, mírala con cuidado y calcula cuántos productos hay en ella.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font subtitle"><b>Tómate tu tiempo antes de escribír una respuesta final.</b></p>
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
