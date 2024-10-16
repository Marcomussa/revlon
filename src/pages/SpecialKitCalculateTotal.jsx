import { useState, useEffect } from "react";
import { useTicketData } from "../context/TicketDataContext";
import useRegisterTicket from '../hooks/useRegisterTicket';
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../assets/components/Button";
import Input from "../assets/components/Input";
import ModalInfo from "../assets/components/ModalInfo";

const KIT_ID = import.meta.env.VITE_KIT_ID

const SpecialKitCalculateTotal = () => {
  const { ticketData, updateTicketData, clearTicketData } = useTicketData(); //! Contexto
  const { registerTicket } = useRegisterTicket();

  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmitTicket = async (data) => {
    try {
      const response = await registerTicket(data);  
      console.log(response)
    } catch (err) {
      console.error('Error al registrar el ticket:', err);
    }
  };

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

  const handleButtonClick = async () => {
    const previousGuesses = ticketData.guesses || [];
    const updatedTicketData = {
      ...ticketData,
      guesses: [
        ...previousGuesses,
        {
          contest: KIT_ID,
          guess: Number(inputValue),
        },
      ],
    };
  
    if (isInputValid) {
      updateTicketData(updatedTicketData);
  
      await handleSubmitTicket(updatedTicketData);
  
      clearTicketData();
  
      handleShow();
    }
  };
  

  // Usar useEffect para ver el estado actualizado de ticketData
  useEffect(() => {
    console.log("Datos actualizados en el contexto:", ticketData);
  }, [ticketData]); // Se ejecuta cuando ticketData cambia

  return (
    <>
      <Navbar></Navbar>
      <div className="container pb-5 my-5">
        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <h2 className="title-red my-3 primary-font title px-5">
              KIT ESPECIAL PARTY ON
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="primary-font px-5 subtitle-h3 text-black py-2">
              ¿CUÁNTOS PRODUCTOS REVLON VES EN ESTA IMAGEN?
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="https://placehold.co/250x250" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="primary-font my-3 text-black text">
              Puedes girar tu teléfono y hacer zoom a la imagen para hacer tu
              cálculo más preciso.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p
              className="primary-font text-italic text"
              style={{ fontStyle: "italic" }}
            >
              Escribe la respuesta de tu cálculo.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center d-flex shadow">
            <Input
              type="number"
              name="specialKitCalculateTotal"
              placeholder="100"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-3">
            <Button
              text="CONTINUAR"
              onClick={handleButtonClick}
              disabled={!isInputValid}
            ></Button>
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
