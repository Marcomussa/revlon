import { useEffect } from "react";
import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Premio1 from "../assets/img/premio_01.webp"

const TripInfo = () => {
  useEffect(() => {
    document.title = "Dale ON a tu estilo | Trip Info";
  }, []);

  return (

    <>
    <Navbar></Navbar>
      <div className="container bg-beach">
        <div className="row pt-2">
          <div className="col-md-12 text-center mt-5">
            <img src={Premio1} alt="Premio" className="img-size-md py-xl-5"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="text-white primary-font title px-4">PARTICIPA POR UN VIAJE TODO PAGADO A CANCÚN</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-xl-4">
            <p className="text-white primary-font text">Te mostraremos una imagen que estará repleta de productos <b>REVLON</b>, mírala con cuidado y calcula cuántos productos hay en ella.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font subtitle">Tómate tu tiempo antes de escribír una respuesta final.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center button mb-xl-5">
            <Button text="CONTINUAR" route="/user/ticket/trip/calculate-total"></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  );
};

export default TripInfo;
