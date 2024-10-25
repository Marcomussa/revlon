/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useTicketData } from "../context/TicketDataContext";
import ProductsData from "../../products.json";
import Select from "../assets/components/Select";
import InputWithModalOrderNum from "../assets/components/InputWithModalOrderNum";
import InputWithModalProductCode from "../assets/components/InputWithModalProductCode";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ImageUpload from "../assets/components/ImageUpload";
import Caja from "../assets/img/caja.png";
import Pedido from "../assets/img/pedido_ejemplo.png";
import Button from "../assets/components/Button";
import Validated from "../assets/components/Validated";

const OnlineTicket = () => {
  const storeOptions = [
    { value: "Seleccionar Opcion", label: "Seleccionar Opción" },
    { value: "COPPEL", label: "Coppel" },
    { value: "DELSOL", label: "Delsol" },
    { value: "WALMART", label: "Walmart" },
    { value: "HEB", label: "Heb" },
    { value: "WOOLWORTH", label: "Woolmorth" },
  ];

  const { ticketData, updateTicketData } = useTicketData(); //! Contexto
  const [isUploading, setIsUploading] = useState(false);
  const [store, setStore] = useState("");
  const [orderNum, setOrderNum] = useState("");
  const [productCode, setProductCode] = useState("");
  const [date, setDate] = useState("");
  const [isOrderNumValid, setIsOrderNumValid] = useState(false);
  const [isProductCodeValid, setIsProductCodeValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isImageValid, setIsImageValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isStoreValid, setIsStoreValid] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [hasInteractedWithDate, setHasInteractedWithDate] = useState(false);

  const imageUploadRef = useRef(null);

  const handleClick = async () => {
    if (imageUploadRef.current) {
      setIsUploading(true);
      await imageUploadRef.current.uploadImage();
      setIsUploading(false);
      console.log(ticketData);
    }
  };

  const handleStoreChange = (e) => {
    const value = e.target.value || "";
    setStore(value);
    updateTicketData({ store: value });

    if (value && value !== "Seleccionar Opcion") {
      setIsStoreValid(true);
    } else {
      setIsStoreValid(false);
    }

    validateForm(orderNum, productCode, date, isImageValid);
  };

  const handleOrderNumChange = (e) => {
    const value = e.target.value || "";
    setOrderNum(value);
    updateTicketData({ number: value });

    validateOrderNum(value);

    validateForm(value, productCode, date, isImageValid);
  };

  const validateOrderNum = (orderNum) => {
    setIsOrderNumValid(orderNum.length === 21);
  };

  const handleProductCodeChange = (e) => {
    const value = e.target.value || "";
    setProductCode(value);
    updateTicketData({ barCode: value }); // Actualizar el contexto
    validateCode(value);
    validateForm(orderNum, value, date, isImageValid);
  };

  const options = [
    {
      value: "Seleccionar Opcion",
      label: "Seleccionar opción",
      disabled: true,
    },
    ...ProductsData.map((item) => ({
      value: item.barCode,
      label: item.name,
    })),
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedName(value);
    setProductCode(value);
    updateTicketData({ barCode: value });
    validateCode(value);
    validateForm(orderNum, value, date, isImageValid);
  };

  const validateCode = (code) => {
    setIsProductCodeValid(code.length === 14);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    updateTicketData({ date: value });
    setHasInteractedWithDate(true); 

    validateDate(value);
    console.log(validateDate(value))
    validateForm(orderNum, productCode, value, isImageValid);
  };

  const validateDate = (date) => {
    const selectedDate = new Date(date);
    const selectedMonth = selectedDate.getMonth();
    const isValid = selectedMonth === 10 || selectedMonth === 11; // Meses 10 y 11 = Noviembre y Diciembre
    setIsDateValid(isValid);
    return isValid
  };

  const handleImageValidation = (isImageValid) => {
    setIsImageValid(isImageValid);
    validateForm(orderNum, productCode, date, isImageValid);
  };

  const validateForm = (orderNum, productCode, date, image) => {
    console.log(isStoreValid)
    console.log(orderNum.length === 21)
    console.log(productCode)
    console.log(isDateValid)
    console.log(image)
    console.log('--- --- ---')
    const isValid =
      isStoreValid &&
      orderNum.length === 21 &&
      productCode &&
      isDateValid &&
      image;
    setIsFormValid(isValid);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container bg-red pt-5">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h2 className="text-white primary-font title">COMPRA ONLINE</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center my-2 mt-3">
            <img src={Caja} alt="Caja" className="img-size-md" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-white primary-font subtitle-h3 mb-4">
              <b>INGRESA LOS DATOS DE TU PEDIDO:</b>
            </h3>
          </div>
        </div>

        <div className="row my-xl-3">
          <div className="col-md-12 input-w">
            <p className="text-white text-italic primary-font mb-2">
              ¿En cuál tienda participante ordenaste?
            </p>
            <Select
              options={storeOptions}
              name="physicalTicketStore"
              onChange={handleStoreChange}
            />
          </div>
        </div>
        <div className="row my-xl-3">
          <div className="col-md-12 input-w">
            <p className="text-white text-italic primary-font mt-4 mb-2">
              Ingresa tu número de pedido.
            </p>
            <InputWithModalOrderNum
              modalImageSrc={"https://placehold.co/250x250"}
              modalText={
                "Ve a la sección de Detalles del pedido de tu tienda participante e identifica este número. La longitud y formato variará según la tienda."
              }
              placeholder="#"
              name="onlineTicketNum"
              value={orderNum}
              onChange={handleOrderNumChange}
            />
            {isOrderNumValid ? (
              <div className="mt-2">
                <Validated message="Ticket válido" state={true} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row my-xl-3">
          <div className="col-md-12 input-w">
            <p className="text-white text-italic primary-font mt-4 mb-2">
              Selecciona tu producto.
            </p>
            <Select
              options={options}
              name="productName"
              onChange={handleSelectChange}
            />
            {/* <InputWithModalProductCode
              modalImageSrc={"https://placehold.co/250x250"}
              modalText={
                "Ve a la sección...[INSTRUCCIONES GENERALES PARA LOCALIZAR EL CÓDIGO DE PEDIDO]. La longitud y formato variará según la tienda."
              }
              placeholder="#"
              name="onlineTicketCode"
              value={productCode}
              onChange={handleProductCodeChange}
            />
            {isProductCodeValid ? (
              <div className="mt-2">
                <Validated message="Código válido" state={true} />
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>

        <div className="row my-xl-3">
          <div className="col-md-12 input-w">
            <label
              htmlFor="date"
              className="form-label text-white mt-4 mb-2 text-italic primary-font"
            >
              Ingresa tu fecha de compra
            </label>
            <input
              type="date"
              className="form-control shadow p-2 bg-body rounded"
              name="onlineDate"
              onChange={handleDateChange}
              value={date}
              style={{
                padding: "10px",
              }}
              required
            />
            {hasInteractedWithDate && !isDateValid && (
              <div className="mt-2">
                <Validated
                  message="La fecha debe estar entre noviembre y diciembre"
                  state={false}
                />
              </div>
            )}
            {isDateValid && (
              <div className="mt-2">
                <Validated
                  message="La fecha ingresada es correcta"
                  state={true}
                />
              </div>
            )}
          </div>
          <div>
            <p className="text-white text-center my-4 text-italic primary-font">
              Para participar es indispensable que cargues una captura de
              pantalla de tu pedido. Debe ser visible el producto Revlon que
              ordenaste y el número de tu pedido.
            </p>
            <p className="text-white text-center my-4 text-italic primary-font">
              Asegúrate que tu foto no tenga un peso mayor a 5 MB.
            </p>
          </div>
        </div>

        <div className="row button">
          <ImageUpload
            ref={imageUploadRef}
            onImageChange={handleImageValidation}
          />
        </div>

        <div className="row">
          <div className="col-md-12 mb-5 button">
            <Button
              text={isUploading ? "Cargando..." : "CONTINUAR"}
              onClick={handleClick}
              route="/user/ticket/trip"
              disabled={!isFormValid || isUploading}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OnlineTicket;
