import { useState } from "react"
import Button from "../assets/components/Button";
import Input from "../assets/components/Input";
import ModalInfo from '../assets/components/ModalInfo'

const SpecialKitCalculateTotal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>KIT ESPECIAL PARTY ON</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>CUÁNTOS PRODUCTOS REVLON VES EN ESTA IMAGEN?</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>Puedes girar tu teléfono y hacer zoom a la imagen para hacer tu cálculo más preciso.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p style={{fontStyle: 'italic'}}>Escribe la respuesta de tu cálculo.</p>
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
  );
};

export default SpecialKitCalculateTotal;
