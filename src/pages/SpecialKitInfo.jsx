import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Premio2 from "../assets/img/premio_02.png"

const SpecialKitInfo = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="container bg-disco">
        <div className="row">
          <div className="col-md-12 text-center mt-5 pt-5">
            <img src={Premio2} alt="Premio2" width={350} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold title-red">PARTICIPA POR UN KIT ESPECIAL PARTY ON</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Te mostraremos una imagen que estará repleta de productos <b>REVLON</b>, mírala con cuidado y calcula cuántos productos hay en ella.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p><b>Tómate tu tiempo antes de escribír una respuesta final.</b></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Button text="CONTINUAR" route="/user/ticket/kit/calculate-total"></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  );
};

export default SpecialKitInfo;
