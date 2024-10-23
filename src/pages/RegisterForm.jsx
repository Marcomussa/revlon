/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "animate.css";
import useSignup from "../hooks/useSignup";
import SubmitButton from "../assets/components/Button";
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
    birthdate: "",
    zipCode: "",
    via: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(null);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("REGISTRARSE");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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

      setMessage("");

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch) {
      return; // Evitar envío si las contraseñas no coinciden
    }

    try {
      setButtonText("Registrando...");
      const formDataToSend = { ...formData };
      delete formDataToSend.confirmPassword;
      const result = await signup(formDataToSend);

      if (result) {
        console.log("Registro exitoso. Por favor, verifica tu cuenta.");
        setShowAlert(true);
        setIsDisabled(true);
      } else {
        setMessage("Error en el registro. Inténtalo de nuevo.");
      }
    } catch (error) {
      setMessage(error.message);
      console.log("Error en el registro. Inténtalo de nuevo 2.");
    } finally {
      setButtonText("REGISTRARSE");
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
                      className="p-2 form-control text-italic shadow p-2 bg-body rounded"
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
                      className="p-2 form-control text-italic shadow p-2 bg-body rounded"
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
                      className="p-2 form-control text-italic shadow p-2 bg-body rounded"
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

                    <div className="input-group">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="p-2 form-control text-italic shadow p-2 bg-body"
                        id="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <span className="input-group-text">
                        <Button
                          variant="link"
                          onClick={togglePasswordVisibility}
                          className="p-0"
                        >
                          {passwordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
                          {/* Ícono del ojo */}
                        </Button>
                      </span>
                    </div>
                  </div>

                  {/* Confirmar Contraseña */}
                  <div className="my-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label text text-white primary-font text-italic"
                    >
                      Confirmar contraseña*
                    </label>
                    <div className="input-group">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="p-2 form-control text-italic shadow p-2 bg-body"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirma tu contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <span className="input-group-text">
                        <Button
                          variant="link"
                          onClick={togglePasswordVisibility}
                          className="p-0"
                        >
                          {passwordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
                          {/* Ícono del ojo */}
                        </Button>
                      </span>
                    </div>
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
                      id="birthdate"
                      name="birthdate"
                      className="p-2 form-control me-2 text-italic shadow p-2 bg-body rounded"
                      onChange={handleChange}
                      value={formData.birthdate}
                      required
                    />
                  </div>

                  {/* Código postal */}
                  <div className="my-3">
                    <label
                      htmlFor="zipCode"
                      className="form-label text-white primary-font text-italic"
                    >
                      Código postal*
                    </label>
                    <input
                      type="text"
                      className="p-2 form-control text-italic shadow p-2 bg-body rounded"
                      id="zipCode"
                      name="zipCode"
                      placeholder="Ingresa tu código postal"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* ¿Cómo te enteraste? */}
                  <div className="my-3">
                    <label
                      htmlFor="via"
                      className="form-label text-white primary-font text-italic"
                    >
                      ¿Cómo te enteraste de ésta dinámica?*
                    </label>
                    <select
                      className="form-select p-2 shadow p-2 bg-body rounded"
                      id="via"
                      name="via"
                      value={formData.via}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="INSTAGRAM">Instagram</option>
                      <option value="FACEBOOK">Facebook</option>
                      <option value="ONLINE_BANNER">Online</option>
                      <option value="GOOGLE">Google</option>
                      <option value="PHYSICAL_STORE">Tienda Física</option>
                    </select>
                  </div>

                  {message ? (
                    <div className="mb-3">
                      <Validated message={message} state={false} />
                    </div>
                  ) : (
                    ""
                  )}

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
                            navigate("/user/login"); // Redirige a /login
                          }}
                        >
                          Iniciar Sesion
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="d-grid mb-5 pb-5">
                    <SubmitButton
                      text={buttonText}
                      type="submit"
                      disabled={isDisabled}
                    ></SubmitButton>
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
