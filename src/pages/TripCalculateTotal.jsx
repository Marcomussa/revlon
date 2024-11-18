import { useState, useEffect } from "react";
import { useTicketData } from "../context/TicketDataContext";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../assets/components/Button";
import Input from "../assets/components/Input";
import ModalInfo from "../assets/components/ModalInfo";
import ContestImage from "../assets/components/ContestImage";
import PromoPrincipal from "../assets/img/volumizer_Imagen-principal_promo_daleOn.webp";

const TRIP_ID = import.meta.env.VITE_TRIP_ID;

const TripCalculateTotal = () => {
  useEffect(() => {
    document.title = "Dale ON a tu estilo | Calcular";
  }, []);
  const { ticketData, updateTicketData } = useTicketData(); //! Contexto

  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInputValid(value !== "");
  };

  const handleButtonClick = () => {
    if (isInputValid) {
      updateTicketData({
        guesses: [
          {
            contest: TRIP_ID,
            guess: Number(inputValue),
          },
        ],
      });
      handleShow();
      setResetTimer(true);
      setTimeout(() => setResetTimer(false), 0);
    }
  };

  // Usar useEffect para ver el estado actualizado de ticketData
  // useEffect(() => {
  //   console.log("Datos actualizados en el contexto:", ticketData);
  // }, [ticketData]); // Se ejecuta cuando ticketData cambia

  return (
    <>
      <Navbar />
      <div className="container bg-campari pb-xl-5">
        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <h2 className="text-white mt-5 title primary-font">
              VIAJE A CANCÚN
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-white px-3 py-3 primary-font subtitle-h3">
              ¿CUÁNTOS PRODUCTOS REVLON VES EN ESTA IMAGEN?
            </h3>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ContestImage
              imageSrc={PromoPrincipal}
              background={"white"}
              resetTimer={resetTimer}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white primary-font my-4 text">
              Puedes girar tu teléfono y hacer zoom a la imagen para hacer tu
              cálculo más preciso.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p
              className="text-white primary-font text-italic"
              style={{ fontStyle: "italic" }}
            >
              Escribe la respuesta de tu cálculo.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center d-flex justify-content-center input-w-trip">
            <Input
              type="number"
              name="tripCalculateTotal"
              placeholder="Ingresa tu respuesta"
              value={inputValue}
              onChange={handleInputChange} // Actualiza el inputValue y valida
              style={{boxShadow: '7px 12px 25px -15px rgba(31,31,31,0.75)'}}
              min="0"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-3 button">
            <Button
              text="CONTINUAR"
              onClick={handleButtonClick} // Actualiza el contexto al hacer clic
              disabled={!isInputValid} // Deshabilitar botón si el input es inválido
            />
          </div>
        </div>

        <ModalInfo
          show={showModal}
          handleClose={handleClose}
          modalTitle="EXITO"
          modalText="Tu participación en el concurso principal se ha subido a tu perfil. Ahora puedes participar en el concurso semanal."
          route="/user/ticket/kit/info"
        />
      </div>
      <Footer />
    </>
  );
};

export default TripCalculateTotal;
