/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Button from "../assets/components/Button";
import TicketDetailsCard from "../assets/components/TicketDetailsCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import IconProfile from "../assets/img/icons/ico_profile.webp";
import IconQuestion from "../assets/img/icons/ico_questionmark.webp";
import useGetTickets from "../hooks/useGetTickets";

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dale ON a tu estilo | Dashboard';
  }, []);

  const [userData, setUserData] = useState(null);
  const { tickets, loading, error } = useGetTickets();

  useEffect(() => {
    const storedUser = localStorage.getItem("userFirstName");
    const tickets = localStorage.getItem("tickets");
    setUserData(storedUser);
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

        {/* Mostrar los tickets obtenidos */}
        {Array.isArray(tickets) && tickets.length > 0 ? (
          <>
            <h5 className="text-white primary-font pt-4 text-center">
              ¡Recuerda que cada compra registrada es una participacion más!
            </h5>
            <div className="row">
              <div className="col-md-12 text-center mt-2 button">
                <Button
                  text="REGISTRA TU TICKET"
                  route="/user/ticket/select-type"
                ></Button>
              </div>
            </div>
            {tickets.map((ticket, index) => (
              <div key={index}>
                <TicketDetailsCard
                  num={ticket.number}
                  registerDate={ticket.createdAt.slice(0, 10)}
                  principalAnswer={ticket.guesses[0].guess}
                  weeklyAnswer={ticket.guesses[1].guess}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-md-12 text-center mt-3 mb-2">
                <img src={IconQuestion} alt="Icon Profile" width={70} />
              </div>
            </div>
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
            <div className="row">
              <div className="col-md-12 text-center mt-2 button">
                <Button
                  text="REGISTRA TU TICKET"
                  route="/user/ticket/select-type"
                ></Button>
              </div>
            </div>
          </>
        )}

      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
