import { useState } from "react"
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Button from "../assets/components/Button";
import Input from "../assets/components/Input";
import ModalInfo from '../assets/components/ModalInfo'
import Validated from "../assets/components/Validated"


const SpecialKitCalculateTotal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
    <Navbar></Navbar>
      <div className="container pb-5 my-5">
        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <h1 className="title-red pt-5 my-3 primary-font title px-5">KIT ESPECIAL PARTY ON</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="fw-bold primary-font px-5 subtitle-h3">¿CUÁNTOS PRODUCTOS REVLON VES EN ESTA IMAGEN?</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="https://placehold.co/250x250" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="primary-font my-3">Puedes girar tu teléfono y hacer zoom a la imagen para hacer tu cálculo más preciso.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="primary-font" style={{ fontStyle: 'italic' }}>Escribe la respuesta de tu cálculo.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center d-flex">
            <Input
              placeholder="100"
              name="specialKitCalculateTotal"
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
          modalText="Tu participación en el concurso semanal se ha subido a tu perfil. Mantente al tanto(a) a nuestras redes,
        Podrias ser el siguiente ganador!"
          route="/user/dashboard"
        />
      </div>
      <Footer></Footer>
    </>
    
  );
};

export default SpecialKitCalculateTotal;
