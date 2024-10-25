/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { estados } from "../../data"; // Asegúrate de usar la ruta correcta
import "animate.css";
import useSignup from "../hooks/useSignup";
import SubmitButton from "../assets/components/Button";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Validated from "../assets/components/Validated";
import Select from "../assets/components/Select";

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
    state: "",
    //municipality: "",
  });

  const [validations, setValidations] = useState({
    firstNameValid: null,
    lastNameValid: null,
    emailValid: null,
    passwordValid: null,
    birthdateValid: null,
    zipCodeValid: null,
    stateValid: null,
    //municipalityValid: null,
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("REGISTRARSE");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.length >= 3;
      case "lastName":
        return value.length >= 3;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      case "password":
        return value.length >= 8;
      case "birthdate":
        const birthdate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear();
        return age >= 18;
      case "zipCode":
        return value.length === 5;
      case "state":
        return value !== "";
      // case "municipality":
      //   return value !== "";
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));

    setValidations((prevState) => ({
      ...prevState,
      [`${name}Valid`]: validateField(name, value),
    }));

    // Limpiar el mensaje de error si cambia algo en el formulario
    setMessage("");
  };

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      //municipality: "",
    }));

    setValidations((prevState) => ({
      ...prevState,
      stateValid: validateField(name, value),
      //municipalityValid: null,
    }));
  };

  const handleMunicipalityChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setValidations((prevState) => ({
      ...prevState,
      //municipalityValid: validateField(name, value),
    }));
  };

  // Dentro de handleChange o como una función aparte
  const handlePrivacyChange = (e) => {
    setIsPrivacyAccepted(e.target.checked);
  };

  // Agregar esta validación en el useEffect que habilita/deshabilita el botón
  useEffect(() => {
    const allValid = Object.values(validations).every((v) => v === true);
    setIsDisabled(!(allValid && isPrivacyAccepted)); // También requiere que el checkbox esté seleccionado
  }, [validations, isPrivacyAccepted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isDisabled) {
      try {
        setButtonText("Registrando...");
        const formDataToSend = { ...formData };
        delete formDataToSend.confirmPassword;
        const result = await signup(formDataToSend);

        if (result) {
          console.log("Registro exitoso. Por favor, verifica tu cuenta.");
          setShowAlert(true);
        } else {
          setMessage("Error en el registro. Inténtalo de nuevo.");
        }
      } catch (error) {
        setMessage(error.message);
        console.log("Error en el registro. Inténtalo de nuevo.");
      } finally {
        setButtonText("REGISTRARSE");
      }
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
                    {validations.firstNameValid === false && (
                      <Validated
                        message="El nombre debe tener al menos 3 caracteres"
                        state={false}
                      />
                    )}
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
                    {validations.lastNameValid === false && (
                      <Validated
                        message="El apellido debe tener al menos 3 caracteres"
                        state={false}
                      />
                    )}
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
                    {validations.emailValid === false && (
                      <Validated
                        message="El correo electrónico no es válido"
                        state={false}
                      />
                    )}
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
                          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </span>
                    </div>
                    {validations.passwordValid === false && (
                      <Validated
                        message="La contraseña debe tener al menos 8 caracteres"
                        state={false}
                      />
                    )}
                  </div>

                  {/* Confirmar Contraseña */}
                  {/* <div className="my-3">
                    <label htmlFor="confirmPassword" className="form-label text text-white primary-font text-italic">
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
                        <Button variant="link" onClick={togglePasswordVisibility} className="p-0">
                          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </span>
                    </div>
                    {validations.passwordMatch === false && (
                      <Validated message="Las contraseñas no coinciden" state={false} />
                    )}
                  </div> */}

                  {/* Edad */}
                  <div className="my-3">
                    <label
                      htmlFor="birthdate"
                      className="form-label text-white text-italic primary-font"
                    >
                      Fecha de Nacimiento*
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
                    {validations.birthdateValid === false && (
                      <div className="mt-1">
                        <Validated
                          message="Debes tener al menos 18 años para registrarte"
                          state={false}
                        />
                      </div>
                    )}
                  </div>

                  <div className="my-3">
                    <label
                      htmlFor="state"
                      className="form-label text-white text-italic primary-font"
                    >
                      Seleccione un Estado*
                    </label>
                    <Select
                      options={estados}
                      name="state"
                      onChange={handleStateChange}
                    />
                    {validations.stateValid === false && (
                      <Validated
                        message="Debes seleccionar un estado"
                        state={false}
                      />
                    )}

                    {/* <div className="mt-2">
                      {formData.state && (
                        <Select
                          options={municipios[formData.state] || []} 
                          name="locality"
                          onChange={handleMunicipalityChange}
                        />
                      )}
                      {validations.municipalityValid === false && (
                        <Validated
                          message="Debes seleccionar un municipio"
                          state={false}
                        />
                      )}
                    </div> */}
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
                      type="number"
                      className="p-2 form-control text-italic shadow p-2 bg-body rounded"
                      id="zipCode"
                      name="zipCode"
                      placeholder="Ingresa tu código postal"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                    {validations.zipCodeValid === false && (
                      <Validated
                        message="El código postal debe tener 5 caracteres"
                        state={false}
                      />
                    )}
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

                  {message && (
                    <div className="mb-3">
                      <Validated message={message} state={false} />
                    </div>
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
                            setShowAlert(false);
                            navigate("/user/login");
                          }}
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="form-check mt-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="privacyCheck"
                      checked={isPrivacyAccepted}
                      onChange={handlePrivacyChange}
                      required
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="privacyCheck"
                    >
                      Al hacer click en {"Registrarse"} estas aceptando las{" "}
                      <a
                        href="/legal-bases"
                        target="_blank"
                        className="text-white"
                        style={{ fontStyle: "italic" }}
                      >
                        Bases Legales
                      </a>{" "}
                      y la{" "}
                      <a
                        href="/privacy-notice"
                        target="_blank"
                        className="text-white"
                        style={{ fontStyle: "italic" }}
                      >
                        Política de Privacidad
                      </a>
                      .
                    </label>
                  </div>
                  <div className="d-grid mb-5 pb-5">
                    <SubmitButton
                      text={buttonText}
                      type="submit"
                      disabled={isDisabled}
                    />
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
