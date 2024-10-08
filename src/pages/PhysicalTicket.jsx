import ImageUpload from "../assets/components/ImageUpload";
import InputWithModal from "../assets/components/InputWithModal";
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
    <div className="container">
      <div className="row text-center">
        <div className="col-md-12">
          <h3>COMPRA FÍSICA</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-12">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-12">
          <h5>INGRESA LOS DATOS DE TU TICKET Y PRODUCTO:</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>¿A qué tienda acudiste?</p>
        </div>
        <Select 
          options={storeOptions}
          name="physicalTicketStore"/>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>Ingresá tu número de ticket</p>
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
          <p>Ingresá el número del código de barras</p>
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
            <p>Para participar es indispensable que cargues tu ticket de compra. Debe ser visible el producto de Revlon que ordenaste y el número de tu pedido.</p>
            <br/>
            <p>Asegúrate que tu foto no tenga un peso mayor a 2MB</p>
        </div>
      </div>
      <div className="row">
        <ImageUpload />
      </div>
      <div className="row">
        <div className="col-md-12">
            <Button text="CONTINUAR" route="/user/ticket/trip"/>
        </div>
      </div>
    </div>
  );
};

export default PhysicalTicket;