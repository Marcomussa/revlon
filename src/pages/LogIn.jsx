import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import "animate.css";
import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import IconProfile from "../assets/img/icons/ico_profile.png"

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   const response = await axios.post("http://api", {
      //     email: formData.email,
      //     password: formData.password,
      //   });

      //   if (response.status === 200) {
      //     login();
      //     navigate("/profile");
      //   }
      login();
      navigate("/user/dashboard");
    } catch (error) {
      console.log(error);
      setErrorMessage("Correo o contraseña incorrectos");
    }
  };

  return (
    <>
      <Navbar/>
      <div className="container bg-red pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="">
              <div className="card-body bg-red pt-5 mt-5 text-center">
                <img src={IconProfile} alt="Icon Profile" width={70}/>
                <h3
                  className="text-center title text-white primary-font"
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  ¡HOLA!
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* Correo Electrónico */}
                  <div className="my-3">
                    <input
                      type="email"
                      className="form-control text-italic p-2 shadow p-2 bg-body rounded " 
                      id="email"
                      name="email"
                      placeholder="Ingresa tu correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Contraseña */}
                  <div className="my-3">
                    <input
                      type="password"
                      className="form-control text-italic p-2 shadow p-2 bg-body rounded"
                      id="password"
                      name="password"
                      placeholder="Ingresa tu contraseña"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}

                  <div className="d-grid">
                    <Button text="INICIAR SESION" type="submit"></Button>
                  </div>
                </form>

                <p className="my-3 text-white text-italic">
                  ¿Es la primera vez que registras un ticket?
                </p>
                <div className="d-grid pb-5">
                  <Button text="REGISTRARSE" route="/user/register"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LogInForm;
