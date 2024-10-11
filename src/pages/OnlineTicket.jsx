import Select from "../assets/components/Select";
import InputWithModal from "../assets/components/InputWithModal";
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import ImageUpload from "../assets/components/ImageUpload";
import Caja from "../assets/img/caja.png"
import Button from "../assets/components/Button";

const OnlineTicket = () => {
  const storeOptions = [
    { value: "walmart", label: "Walmart" },
    { value: "target", label: "Target" },
    { value: "costco", label: "Costco" },
    { value: "amazon", label: "Amazon" },
  ];

  return (
    <>
    <Navbar></Navbar>
      <div className="container bg-red pt-5">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h3 className="text-white primary-font fw-bold title">
              <b>COMPRA ONLINE</b>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center my-2">
            <img src={Caja} alt="Caja" width={250} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h5 className="text-white primary-font fw-bold px-5 mb-4">
              <b>INGRESA LOS DATOS DE TU PEDIDO:</b>
            </h5>
          </div>
        </div>

        <div className="row mx-1">
          <div className="col-md-12">
            <p className="text-white">¿En cuál tienda participante ordenaste?</p>
            <Select options={storeOptions} name="physicalTicketStore" />
          </div>
        </div>
        <div className="row mx-1">
          <div className="col-md-12">
            <p className="text-white mt-3">Ingresa tu número de pedido.</p>
            <InputWithModal
              modalImageSrc={"https://placehold.co/250x250"}
              modalText={"Ve a la sección de Detalles del pedido de tu tienda participante e identifica este número.La longitud y formato variará según la tienda."}
              placeholder="#"
              name="onlineTicketNum"
            />
          </div>
        </div>
        <div className="row mx-1 my-5">
          <div className="col-md-12">
            <p className="text-white mt-3">Ingresa tu codigo de producto.</p>
            <InputWithModal
              modalImageSrc={"https://placehold.co/250x250"}
              modalText={"Ve a la sección...[INSTRUCCIONES GENERALES PARA LOCALIZAR EL CÓDIGO DE PEDIDO] La longitud y formato variará según la tienda."}
              placeholder="#"
              name="onlineTicketCode"
            />
          </div>
        </div>

        <div className="row mb-3 mx-1">
          <label htmlFor="age" className="form-label text-white my-3">
            Ingresa tu fecha de compra
          </label>
          <div className="d-flex justify-content-between">
            <input
              type="text"
              className="form-control me-2"
              placeholder="DD"
              maxLength={2}
              name="day"
              style={{ width: "32%" }}
              required
            />
            <input
              type="text"
              className="form-control me-2"
              placeholder="MM"
              maxLength={2}
              name="month"
              style={{ width: "32%" }}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="AAAA"
              maxLength={4}
              name="year"
              style={{ width: "32%" }}
              required
            />
          </div>
          <div>
            <p className="text-white text-center mt-4">Para participar es indispensable que cargues una captura de pantalla de tu pedido. Debe ser visible el producto Revlon que ordenaste y el número de tu pedido.</p>
            <p className="text-white text-center mt-4">Asegurate que tu foto no tenga un peso mayor a [PESO RECOMENDADO] MB</p>
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

export default OnlineTicket;
