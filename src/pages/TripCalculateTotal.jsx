import { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../assets/components/Button";
import Input from "../assets/components/Input";
import ModalInfo from '../assets/components/ModalInfo';

const TripCalculateTotal = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState(""); 
  const [isInputValid, setIsInputValid] = useState(false); 

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value !== "") {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container bg-campari">
        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <h2 className="text-white mt-5 title primary-font">VIAJE A CANCÚN</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-white px-3 py-3 primary-font subtitle-h3">¿CUÁNTOS PRODUCTOS REVLON VES EN ESTA IMAGEN?</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="https://placehold.co/250x250" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font my-4 text">Puedes girar tu teléfono y hacer zoom a la imagen para hacer tu cálculo más preciso.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font text-italic" style={{ fontStyle: 'italic' }}>Escribe la respuesta de tu cálculo.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center d-flex justify-content-center">
            <Input
              type="number"
              name="tripCalculateTotal"
              placeholder="Ingresa tu respuesta"
              value={inputValue}
              onChange={handleInputChange} 
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-3">
            <Button text="CONTINUAR" onClick={handleShow} disabled={!isInputValid}></Button> 
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
