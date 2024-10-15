import { useEffect, useState } from "react";
import Button from "../assets/components/Button";
import TicketDetailsCard from "../assets/components/TicketDetailsCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import IconProfile from "../assets/img/icons/ico_profile.png";
import IconQuestion from "../assets/img/icons/ico_questionmark.png";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const { tickets } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("userFirstName");
    console.log(storedUser)
    setUserData(storedUser)
  }, []);

  return (
    <>
      <Navbar />
      <div className="container pt-5 bg-red pb-5">
        <div className="row">
          <div className="col-md-12 text-center mt-5 pt-5">
            <img src={IconProfile} alt="Icon Profile" width={70} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="subtitle-h3 text-white primary-font my-3">
              ¡HOLA, {userData ? <span>{userData}</span> : ""}!
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-5 py-3">
            <img src={IconQuestion} alt="Icon Profile" width={70} />
          </div>
        </div>

        {/* Mostrar los tickets obtenidos */}
        {Array.isArray(tickets) && tickets.length > 0 ? (
          <ul>
            {tickets.map((ticket, index) => (
              <>
                <p className="subtitle text-white primary-font pt-4">
                  Tu historial de participaciones
                </p>
                <TicketDetailsCard
                  key={index}
                  num={1}
                  registerDate={1}
                  principalAnswer={1}
                  weeklyAnswer={1}
                />
              </>
            ))}
          </ul>
        ) : (
          <div className="row">
            <div className="col-md-12 text-center text-white text-italic primary-font py-2">
              Parece que aún no has ingresado tus tickets
              <br />
              ¡Puedes empezar ahora!
            </div>
            <div className="col-md-12 text-center text text-white primary-font py-4">
              ¡Recuerda que cada compra registrada es una participacion más!
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-md-12 text-center">
            <Button
              text="REGISTRA TU TICKET"
              route="/user/ticket/select-type"
            ></Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
