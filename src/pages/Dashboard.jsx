import { useEffect, useState } from "react";
import Button from "../assets/components/Button";
import TicketDetailsCard from "../assets/components/TicketDetailsCard";
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"
import IconProfile from "../assets/img/icons/ico_profile.png"
import IconQuestion from "../assets/img/icons/ico_questionmark.png"


const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container pt-5 bg-red pb-5">
      <div className="row">
        <div className="col-md-12 text-center mt-5 pt-5">
        <img src={IconProfile} alt="Icon Profile" width={70}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="subtitle-h3 text-white primary-font my-3">¡HOLA, LOREM {userData ? <span>{userData.name}</span> : ""}!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center mt-5 py-3">
        <img src={IconQuestion} alt="Icon Profile" width={70}/>
        </div>
      </div>
      <div className="row">
        {/* Esto se modificara en funcion de que si existen tickets registrados o no. De momento se mantiene asi */}
        <div className="col-md-12 text-center text-white text-italic primary-font py-2">
          Parece que aún no has ingresado tus tickets
          <br />
          ¡Puedes empezar ahora!
        </div>
        <div className="col-md-12 text-center text text-white primary-font py-4">
          ¡Recuerda que cada compra registrada es una participacion más!
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Button
            text="REGISTRA TU TICKET"
            route="/user/ticket/select-type"
          ></Button>
        </div>
      </div>
      <p className="subtitle text-white primary-font pt-4">Tu historial de participaciones</p>
      <TicketDetailsCard
        num={1}
        registerDate={1}
        principalAnswer={1}
        weeklyAnswer={1}
      />
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
