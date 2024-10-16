/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useTicketData } from "../context/TicketDataContext";
import ImageUpload from "../assets/components/ImageUpload";
import InputWithModalTicketNum from "../assets/components/InputWithModalTicketNum";
import InputWithModalBarCode from "../assets/components/InputWithModalBarCode";
import Validated from "../assets/components/Validated";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Ticket from "../assets/img/ticket-fisico.png";
import TicketEj from "../assets/img/ticket_ejemplo.png";
import Code from "../assets/img/code_ejemplo.png";
import Button from "../assets/components/Button";
import Select from "../assets/components/Select";
import "animate.css";

const PhysicalTicket = () => {
  const storeOptions = [
    { value: "WALMART", label: "Walmart" },
    { value: "DELSOL", label: "Delsol" },
    { value: "COPPEL", label: "Coppel" },
    { value: "HEB", label: "Heb" },
    { value: "CHEDRAUI", label: "Chedraui" },
    { value: "DAX", label: "Dax" },
    { value: "LIVERPOOL", label: "Liverpool" },
    { value: "SANBORNS", label: "Sanborns" },
    { value: "SEARS", label: "Sears" },
    { value: "SORIANA", label: "Soriana" },
  ];

  const { ticketData, updateTicketData } = useTicketData(); //! Contexto
  const [store, setStore] = useState("");
  const [ticketNum, setTicketNum] = useState("");
  const [barCode, setBarCode] = useState("");
  const [isTicketValid, setIsTicketValid] = useState(false);
  const [isBarCodeValid, setIsBarCodeValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isImageValid, setIsImageValid] = useState(false);

  const handleClick = () => {
    console.log(ticketData);
  };

  const handleTicketNumChange = (e) => {
    const value = e.target.value || "";
    setTicketNum(value);
    updateTicketData({ number: value }); // Actualizar el contexto
    validateTicketNum(value);
    validateForm(value, barCode, isImageValid);
  };

  const handleStoreChange = (e) => {
    const value = e.target.value || "";
    setStore(value);
    updateTicketData({ store: value }); // Actualizar el contexto
  };

  const handleBarCodeChange = (e) => {
    const value = e.target.value || "";
    setBarCode(value);
    updateTicketData({ barCode: value }); // Actualizar el contexto
    validateBarCode(value);
    validateForm(ticketNum, value, isImageValid);
  };

  const handleImageValidation = (isValid) => {
    setIsImageValid(isValid);
    validateForm(ticketNum, barCode, isValid);
  };

  const validateTicketNum = (ticket) => {
    if (ticket.length === 21) {
      setIsTicketValid(true);
    } else {
      setIsTicketValid(false);
    }
  };

  const validateBarCode = (barCode) => {
    if (barCode.length === 14) {
      setIsBarCodeValid(true);
    } else {
      setIsBarCodeValid(false);
    }
  };

  const validateForm = (ticket, barCode, image) => {
    if (ticket.length === 21 && barCode.length === 14 && image) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container bg-red pt-5">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h3 className="text-white primary-font title">COMPRA FÍSICA</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center my-2 mt-3">
            <img src={Ticket} alt="Ticket" width={150} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-white primary-font subtitle-h3 mb-4 mt-4">
              INGRESA LOS DATOS DE TU TICKET Y PRODUCTO:
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text-italic primary-font mb-2">
              ¿A qué tienda acudiste?
            </p>
          </div>
          <Select
            options={storeOptions}
            name="physicalTicketStore"
            onChange={handleStoreChange}
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text-italic primary-font mt-4 mb-2">
              Ingresá tu número de ticket
            </p>
          </div>
          <div className="col-md-12">
            <InputWithModalTicketNum
              modalImageSrc={TicketEj}
              modalText="Ingresa el número junto al código de barras de la parte inferior de tu ticket"
              placeholder="#"
              name="physicalTicketNumber"
              value={ticketNum}
              onChange={handleTicketNumChange}
            />
            {isTicketValid ? (
              <div className="mt-2 ">
                <Validated message="Ticket válido" state={true} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text-italic primary-font mt-4 mb-2">
              Ingresá el número del código de barras
            </p>
          </div>
          <div className="col-md-12">
            <InputWithModalBarCode
              modalImageSrc={Code}
              modalText="Ingresa sin espacios el número que se encuentra debajo del código de barras ubicado en la caja de tu producto."
              placeholder="#"
              name="physicalTicketCode"
              value={barCode}
              onChange={handleBarCodeChange}
            />
            {isBarCodeValid ? (
              <div className="mt-2 ">
                <Validated message="Código válido" state={true} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="text-white text-italic primary-font">
              Para participar es indispensable que cargues tu ticket de compra.
              Debe ser visible el producto de Revlon que ordenaste y el número
              de tu pedido.
            </p>
            <br />
            <p className="text-white text-italic primary-font">
              Asegúrate que tu foto no tenga un peso mayor a 2MB
            </p>
          </div>
        </div>
        <div className="row">
          <ImageUpload onImageChange={handleImageValidation} />
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <Button
              text="CONTINUAR"
              onClick={handleClick} // Función para ver los datos al hacer clic
              route="/user/ticket/trip"
              disabled={!isFormValid}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhysicalTicket;
