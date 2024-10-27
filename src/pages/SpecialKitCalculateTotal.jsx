import { useState, useEffect } from "react";
import { useTicketData } from "../context/TicketDataContext";
import useRegisterTicket from '../hooks/useRegisterTicket';
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../assets/components/Button";
import Input from "../assets/components/Input";
import ModalInfo from "../assets/components/ModalInfo";
import ContestImage from "../assets/components/ContestImage";
import PromoSemanaUno from "../assets/img/semana1_promo_daleOn.jpg"

const KIT_ID = import.meta.env.VITE_KIT_ID;

const SpecialKitCalculateTotal = () => {
  const { ticketData, updateTicketData, clearTicketData } = useTicketData(); //! Contexto
  const { registerTicket } = useRegisterTicket();

  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [buttonText, setButtonText] = useState("FINALIZAR");
  const [modalError, setModalError] = useState(false); 

  const handleSubmitTicket = async (data) => {
    try {
      setIsLoading(true); 
      setButtonText("Subiendo participacion..."); 
      setModalError(false); 
      const response = await registerTicket(data);  
      console.log(response);
      setButtonText("Ir a dashboard");
      return true; 
    } catch (err) {
      setButtonText("Error"); 
      console.error('Error al registrar el ticket:', err.response.data.message);
      setModalError(true); 
      return false;
    } finally {
      setIsLoading(false);  
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
  
      const isSuccess = await handleSubmitTicket(updatedTicketData); 
  
      handleShow(); 
      
      if (isSuccess) {
        clearTicketData(); 
      }
    }
  };

  // ver el estado actualizado de ticketData
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
          <div className="col-md-12" style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <ContestImage imageSrc={PromoSemanaUno} background={'red'}/>
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
          <div className="col-md-12 text-center d-flex input-w-trip mt-xl-3">
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
          <div className="col-md-12 text-center mt-3 button">
            <Button
              text={buttonText} 
              onClick={handleButtonClick}
              disabled={!isInputValid || isLoading}  
            ></Button>
          </div>
        </div>

        <ModalInfo
          show={showModal}
          handleClose={handleClose}
          modalTitle={modalError ? "Error al registrar" : "Registro exitoso"}
          modalText={
            modalError 
              ? "Hubo un problema al registrar tu participación. Por favor, intenta nuevamente." 
              : "Tu participación en el concurso semanal se ha subido a tu perfil. ¡Mantente al tanto(a) de nuestras redes, podrías ser el siguiente ganador!" 
          }
          route={modalError ? null : "/user/dashboard"} 
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default SpecialKitCalculateTotal;
