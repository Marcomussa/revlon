import ImageUpload from "../assets/components/ImageUpload";
import InputWithModal from "../assets/components/InputWithModal";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Ticket from "../assets/img/ticket-fisico.png"
import TicketEj from "../assets/img/ticket_ejemplo.png"
import Code from "../assets/img/code_ejemplo.png"
import Button from "../assets/components/Button";
import Select from "../assets/components/Select";
import Validated from "../assets/components/Validated";

const PhysicalTicket = () => {
  const storeOptions = [
    { value: 'walmart', label: 'Walmart' },
    { value: 'target', label: 'Target' },
    { value: 'costco', label: 'Costco' },
    { value: 'amazon', label: 'Amazon' },
  ];

  return (
    <>
    <Navbar></Navbar>
      <div className="container bg-red pt-5">
        <div className="row">
          <div className="col-md-12  text-center mt-5">
            <h2 className="text-white primary-font title">COMPRA FÍSICA</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={Ticket} alt="Ticket" width={150}/>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <h3 className="text-white fw-bold primary-font mt-3 px-4">INGRESA LOS DATOS DE TU TICKET Y PRODUCTO:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text-italic my-3 primary-font">¿A qué tienda acudiste?</p>
          </div>
          <Select
            options={storeOptions}
            name="physicalTicketStore" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text-italic my-3 primary-font">Ingresá tu número de ticket</p>
          </div>
          <div className="col-md-12">
            <InputWithModal
              modalImageSrc={TicketEj}
              modalText="Ingresa el número junto al código de barras de la parte inferior de tu ticket"
              placeholder="#"
              name="physicalTicketNumber"
            />
          </div>
        </div>
        <div className="row py-4 my-5">
          <div className="col-md-12">
            <p className="text-white text-italic primary-font">Ingresá el número del código de barras</p>
          </div>
          <div className="col-md-12">
            <InputWithModal
              modalImageSrc={Code}
              modalText="Ingresa sin espacios el número que se encuentra debajo del código de barras ubicado en la caja de tu producto."
              placeholder="#"
              name="physicalTicketCode"
            />
          </div>
        </div>
        <div className="row px-3">
          <div className="col-md-12 text-center">
            <p className="text-white text-italic primary-font">Para participar es indispensable que cargues tu ticket de compra. Debe ser visible el producto de Revlon que ordenaste y el número de tu pedido.</p>
            <br />
            <p className="text-white primary-font text-italic">Asegúrate que tu foto no tenga un peso mayor a 2MB</p>
          </div>
        </div>
        <div className="row">
          <ImageUpload />
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <Button text="CONTINUAR" route="/user/ticket/trip" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
    
  );
};

export default PhysicalTicket;
