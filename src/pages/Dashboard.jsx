import { useEffect, useState } from "react";
import Button from "../assets/components/Button";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>
            ¡HOLA, LOREM {userData ? <span>{userData.name}</span> : ""}!
          </h3>
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
          Parece que aún no has ingresado tus tickets,
          <br/>
          ¡Puedes empezar ahora!
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Button text="REGISTRA TU TICKET" route="/user/ticket/select-type"></Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
