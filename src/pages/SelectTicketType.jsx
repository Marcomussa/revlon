import { useEffect } from "react";
import { useTicketData } from "../context/TicketDataContext";
import useClearOnBackNavigation from '../hooks/useClearOnBackNavigation';
import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Compra from "../assets/img/compra.png";

const SelectTicketType = () => {
  const { ticketData, updateTicketData } = useTicketData(); 
  useClearOnBackNavigation(); 

  const handleButtonClick = (buttonType) => {
    updateTicketData({ purchaseType: buttonType }); 
  };

  useEffect(() => {
    console.log("Datos actuales de ticket:", ticketData);
  }, [ticketData]);  // Esto se ejecuta cuando ticketData cambia

  return (
    <>
      <Navbar></Navbar>
      <div className="container bg-red pt-5">
        <div className="row mt-0 pt-lg-0">
          <div className="col-md-12 text-center">
            <img src={Compra} alt="" width={350} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center title text-white ">
            ¿EN DÓNDE REALIZASTE TU COMPRA?
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <Button
              text="TIENDA FISICA"
              onClick={() => handleButtonClick("COMPRA FISICA")}
              route="/user/ticket/physical"
            ></Button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 mb-5">
            <Button
              text="COMPRA ONLINE"
              onClick={() => handleButtonClick("COMPRA ONLINE")}
              route="/user/ticket/online"
            ></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SelectTicketType;
