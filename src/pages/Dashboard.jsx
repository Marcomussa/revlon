import { useEffect, useState } from "react";
import Button from "../assets/components/Button";
import TicketDetailsCard from "../assets/components/TicketDetailsCard";
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"

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
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>¡HOLA, LOREM {userData ? <span>{userData.name}</span> : ""}!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
      </div>
      <div className="row">
        {/* Esto se modificara en funcion de que si existen tickets registrados o no. De momento se mantiene asi */}
        <div className="col-md-12 text-center">
          Parece que aún no has ingresado tus tickets
          <br />
          ¡Puedes empezar ahora!
        </div>
        <div className="col-md-12 text-center">
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
      <p><b>Tu historial de participaciones</b></p>
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
