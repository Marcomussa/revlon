import ImageUpload from "../assets/components/ImageUpload";
import InputWithModal from "../assets/components/InputWithModal";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Ticket from "../assets/img/ticket-fisico.png"
import Button from "../assets/components/Button";
import Select from "../assets/components/Select";

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
        <div className="row text-center">
          <div className="col-md-12 mt-5">
            <h3 className="text-white fw-bold primary-font title">COMPRA FÍSICA</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <img src={Ticket} alt="" width={200}/>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <h3 className="text-white fw-bold primary-font mt-3 px-4">INGRESA LOS DATOS DE TU TICKET Y PRODUCTO:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text">¿A qué tienda acudiste?</p>
          </div>
          <Select
            options={storeOptions}
            name="physicalTicketStore" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text">Ingresá tu número de ticket</p>
          </div>
          <div className="col-md-12">
            <InputWithModal
              modalImageSrc="https://placehold.co/250x250"
              modalText="lorem ipsum"
              placeholder="123"
              name="physicalTicketNumber"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-white text">Ingresá el número del código de barras</p>
          </div>
          <div className="col-md-12">
            <InputWithModal
              modalImageSrc="https://placehold.co/250x250"
              modalText="lorem ipsum dolor"
              placeholder="123"
              name="physicalTicketCode"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white text">Para participar es indispensable que cargues tu ticket de compra. Debe ser visible el producto de Revlon que ordenaste y el número de tu pedido.</p>
            <br />
            <p className="text-white text">Asegúrate que tu foto no tenga un peso mayor a 2MB</p>
          </div>
        </div>
        <div className="row">
          <ImageUpload />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Button text="CONTINUAR" route="/user/ticket/trip" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
    
  );
};

export default PhysicalTicket;
