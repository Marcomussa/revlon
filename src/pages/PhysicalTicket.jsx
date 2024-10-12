import { useState } from "react";
import ImageUpload from "../assets/components/ImageUpload";
import InputWithModalTicketNum from "../assets/components/InputWithModalTicketNum";
import InputWithModalBarCode from "../assets/components/InputWithModalBarCode";
import Validated from "../assets/components/Validated";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Ticket from "../assets/img/ticket-fisico.png";
import Button from "../assets/components/Button";
import Select from "../assets/components/Select";

const PhysicalTicket = () => {
  const storeOptions = [
    { value: "walmart", label: "Walmart" },
    { value: "target", label: "Target" },
    { value: "costco", label: "Costco" },
    { value: "amazon", label: "Amazon" },
  ];

  const [ticketNum, setTicketNum] = useState("");
  const [barCode, setBarCode] = useState("");
  const [isTicketValid, setIsTicketValid] = useState(false);
  const [isBarCodeValid, setIsBarCodeValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isImageValid, setIsImageValid] = useState(false);

  const handleTicketNumChange = (e) => {
    const value = e.target.value || "";
    setTicketNum(value);
    validateTicketNum(value);
    validateForm(value, barCode, isImageValid);
  };

  const handleBarCodeChange = (e) => {
    const value = e.target.value || "";
    setBarCode(value);
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
    if (barCode.length === 9) {
      setIsBarCodeValid(true);
    } else {
      setIsBarCodeValid(false);
    }
  };

  const validateForm = (ticket, barCode, image) => {
    if (ticket.length === 21 && barCode.length === 9 && image) {
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
          <div className="col-md-12  text-center mt-5">
            <h3 className="text-white primary-font title">
              COMPRA FÍSICA
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center my-2 mt-3">
            <img src={Ticket} alt="Ticket" width={150} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-white primary-font subtitle-h3 mb-4">
              INGRESA LOS DATOS DE TU TICKET Y PRODUCTO:
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text-italic primary-font">¿A qué tienda acudiste?</p>
          </div>
          <Select options={storeOptions} name="physicalTicketStore" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text-italic primary-font mt-4 mb-2">
              Ingresá tu número de ticket
            </p>
          </div>
          <div className="col-md-12">
            <InputWithModalTicketNum
              modalImageSrc="https://placehold.co/250x250"
              modalText="Ingresa el número junto al código de barras de la parte inferior de tu ticket"
              placeholder="#"
              name="physicalTicketNumber"
              value={ticketNum}
              onChange={handleTicketNumChange}
            />
            {isTicketValid ? (
              <Validated message="Ticket válido" state={true} />
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
              modalImageSrc="https://placehold.co/250x250"
              modalText="Ingresa sin espacios el número que se encuentra debajo del código de barras ubicado en la caja de tu producto."
              placeholder="#"
              name="physicalTicketCode"
              value={barCode}
              onChange={handleBarCodeChange}
            />
            {isBarCodeValid ? (
              <Validated message="Código válido" state={true} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row mt-5">
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
          <div className="col-md-12 mb-5">
            <Button
              text="CONTINUAR"
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
