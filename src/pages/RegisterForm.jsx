/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup"; // Asegúrate de que la ruta es correcta
import "animate.css";
import Button from "../assets/components/Button";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Validated from "../assets/components/Validated";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { signup, loading, error } = useSignup();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birth: "",
    postalCode: "",
    source: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(null); // Estado inicial como null
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Para mostrar la alerta

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedFormData = { ...prevState, [name]: value };

      if (updatedFormData.password && updatedFormData.confirmPassword) {
        setPasswordMatch(
          updatedFormData.password === updatedFormData.confirmPassword
        );
      } else {
        setPasswordMatch(null);
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch) {
      setMessage("Las contraseñas no coinciden");
      return; // Evitar envío si las contraseñas no coinciden
    }

    try {
      const result = await signup(formData);

      if (result) {
        console.log("Registro exitoso. Por favor, verifica tu cuenta.");
      } else {
        console.log("Error en el registro. Inténtalo de nuevo.");
      }

      setShowAlert(true);
    } catch (error) {
      console.log(error);
      console.log("Error en el registro. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <Navbar />
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
                      className="p-2 form-control text-italic"
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
                      className="p-2 form-control text-italic"
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
                      className="p-2 form-control text-italic"
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
                      className="p-2 form-control text-italic"
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
                      className="p-2 form-control text-italic"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirma tu contraseña"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Verificación de contraseñas */}
                  {passwordMatch === null ? null : passwordMatch ? (
                    <div className="mb-3">
                      <Validated
                        message="Las contraseñas coinciden"
                        state={true}
                      />
                    </div>
                  ) : (
                    <div className="mb-3">
                      <Validated
                        message="Las contraseñas NO coinciden"
                        state={false}
                      />
                    </div>
                  )}

                  {/* Edad */}
                  <div className="mb-3">
                    <label
                      htmlFor="age"
                      className="form-label text-white text-italic primary-font"
                    >
                      Edad*
                    </label>
                    <input
                      type="date"
                      id="birth"
                      name="birth"
                      className="p-2 form-control me-2 text-italic"
                      onChange={handleChange}
                      value={formData.birth}
                      required
                    />
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
                      className="p-2 form-control text-italic"
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
                      className="form-select p-2"
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
      <Footer />
    </>
  );
};

export default RegisterForm;
