import { useState } from "react"
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Button from "../assets/components/Button";
import Input from "../assets/components/Input";
import ModalInfo from '../assets/components/ModalInfo'

const TripCalculateTotal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
    <Navbar></Navbar>
      <div className="container bg-campari">
        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <h3 className="text-white mt-5 fw-bold title primary-font"><b>VIAJE A CANCÚN</b></h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h5 className="text-white fw-bold px-3 py-3 primary-font"><b>¿CUÁNTOS PRODUCTOS REVLON VES EN ESTA IMAGEN?</b></h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="https://placehold.co/250x250" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font mt-4">Puedes girar tu teléfono y hacer zoom a la imagen para hacer tu cálculo más preciso.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font" style={{ fontStyle: 'italic' }}>Escribe la respuesta de tu cálculo.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center d-flex">
            <Input
              placeholder="100"
              name="tripCalculateTotal"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-3">
            <Button text="CONTINUAR" onClick={handleShow}></Button>
          </div>
        </div>

        <ModalInfo
          show={showModal}
          handleClose={handleClose}
          modalTitle="Título del Modal"
          modalText="Este es el texto dentro del modal"
          route="/user/ticket/kit/info"
        />
      </div>
      <Footer></Footer>
    </>

  );
};

export default TripCalculateTotal;
