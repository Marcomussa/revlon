import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom"; 
//import axios from "axios";
import "animate.css";
import Button from "../assets/components/Button";

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
        navigate("/dashboard"); 
    } catch (error) {
      console.log(error);
      setErrorMessage("Correo o contraseña incorrectos"); 
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card p-4 shadow">
            <div className="card-body">
              <h2
                className="text-center mb-4"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                ¡HOLA!
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Correo Electrónico */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Contraseña */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña*
                  </label>
                  <input
                    type="password"
                    className="form-control"
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

              <h4>¿Es la primera vez que registrar un ticket?</h4>
              <div className="d-grid">
                <Button text="REGISTRARSE" route="/register"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
