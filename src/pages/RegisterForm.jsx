import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import "animate.css";
import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    day: "",
    month: "",
    year: "",
    postalCode: "",
    source: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(null);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Para mostrar la alerta

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatch(
        formData.password === e.target.value ||
          formData.confirmPassword === e.target.value
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Peticion de Register hacia API
      setShowAlert(true);
      console.log(formData);
    } catch (error) {
      console.log(error);
      setMessage("Error en el registro. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <Navbar/>
      <div className="container bg-red pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="mt-5">
              <div className="card-body bg-red">
                <h3
                  className="text-center subtitle-h3 text-white primary-font"
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  INGRESA TUS DATOS PARA CREAR TU PERFIL
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* Nombre */}
                  <div className="my-3">
                    <label
                      htmlFor="firstName"
                      className="form-label text-white primary-font text-italic"
                    >
                      Nombre(s)*
                    </label>
                    <input
                      type="text"
                      className="form-control text-italic"
                      id="firstName"
                      name="firstName"
                      placeholder="Ingresa tu nombre"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Apellidos */}
                  <div className="my-3">
                    <label
                      htmlFor="lastName"
                      className="form-label text-white primary-font text-italic"
                    >
                      Apellidos*
                    </label>
                    <input
                      type="text"
                      className="form-control text-italic"
                      id="lastName"
                      name="lastName"
                      placeholder="Ingresa tus apellidos"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Correo Electrónico */}
                  <div className="my-3 ">
                    <label
                      htmlFor="email"
                      className="form-label text-white primary-font text-italic"
                    >
                      Correo electrónico*
                    </label>
                    <input
                      type="email"
                      className="form-control text-italic"
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
                    <label
                      htmlFor="password"
                      className="form-label text-white primary-font text-italic"
                    >
                      Contraseña*
                    </label>
                    <input
                      type="password"
                      className="form-control text-italic"
                      id="password"
                      name="password"
                      placeholder="Ingresa tu contraseña"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Confirmar Contraseña */}
                  <div className="my-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label text text-white primary-font text-italic"
                    >
                      Confirmar contraseña*
                    </label>
                    <input
                      type="password"
                      className="form-control text-italic"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirma tu contraseña"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Verificación de contraseñas */}
                  {passwordMatch === true && (
                    <div className="text-success mb-3">
                      Las contraseñas coinciden.
                    </div>
                  )}
                  {passwordMatch === false && (
                    <div className="text-danger mb-3">
                      Las contraseñas no coinciden.
                    </div>
                  )}

                  {/* Edad */}
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label text-white text-italic primary-font">
                      Edad*
                    </label>
                    <div className="d-flex justify-content-between">
                      <input
                        type="text"
                        className="form-control me-2 text-italic"
                        placeholder="DD"
                        maxLength={2}
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        style={{ width: "32%" }}
                        required
                      />
                      <input
                        type="text"
                        className="form-control me-2 text-italic"
                        placeholder="MM"
                        maxLength={2}
                        name="month"
                        value={formData.month}
                        onChange={handleChange}
                        style={{ width: "32%" }}
                        required
                      />
                      <input
                        type="text"
                        className="form-control text-italic"
                        placeholder="AAAA"
                        maxLength={4}
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        style={{ width: "32%" }}
                        required
                      />
                    </div>
                  </div>

                  {/* Código postal */}
                  <div className="my-3">
                    <label
                      htmlFor="postalCode"
                      className="form-label text-white primary-font text-italic"
                    >
                      Código postal*
                    </label>
                    <input
                      type="text"
                      className="form-control text-italic"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Ingresa tu código postal"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* ¿Cómo te enteraste? */}
                  <div className="my-3">
                    <label
                      htmlFor="source"
                      className="form-label text-white primary-font text-italic"
                    >
                      ¿Cómo te enteraste de ésta dinámica?*
                    </label>
                    <select
                      className="form-select"
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="internet">Internet</option>
                      <option value="amigos">Amigos</option>
                      <option value="redes">Redes Sociales</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  {message && <p className="text-danger">{message}</p>}

                  {showAlert && (
                    <div className="alert alert-success animate__animated animate__backInDown mt-4">
                      <h3 className="text-center">
                        <strong>FALTA POCO</strong>
                      </h3>
                      <p className="text-center">
                        Revisa tu correo, incluyendo tu bandeja de spam, y haz
                        clic en el enlace de confirmación que te enviamos para
                        que tengas listo tu perfil.
                      </p>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-dark"
                          onClick={() => {
                            setShowAlert(false); // Cierra la alerta
                            navigate("/login"); // Redirige a /login
                          }}
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="d-grid mb-5 pb-5">
                    <Button text="REGISTRARSE" type="submit"></Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RegisterForm;
