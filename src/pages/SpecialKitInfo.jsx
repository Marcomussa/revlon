import { useEffect } from "react";
import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Premio2 from "../assets/img/premio_02.webp"

const SpecialKitInfo = () => {
  useEffect(() => {
    document.title = "Dale ON a tu estilo | Special Kit Info";
  }, []);

  return (
    <>
    <Navbar></Navbar>
      <div className="container bg-disco">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <img src={Premio2} alt="Premio2" className="img-size-md py-xl-5" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="title-red title primary-font px-5 py-3 title-size">PARTICIPA POR UN KIT ESPECIAL PARTY ON</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center primary-font">
            <p className='text'>Te mostraremos una imagen que estará repleta de productos <b>REVLON</b>, mírala con cuidado y calcula cuántos productos hay en ella.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center primary-font subtitle">
            <p className='text'><b>Tómate tu tiempo antes de escribír una respuesta final.</b></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center button mb-xl-5">
            <Button text="CONTINUAR" route="/user/ticket/kit/calculate-total"></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  );
};

export default SpecialKitInfo;
