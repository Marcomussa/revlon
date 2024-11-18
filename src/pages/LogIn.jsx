/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useLogin from "../hooks/useLogin";
import "animate.css";
import SubmitButton from "../assets/components/Button";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Validated from "../assets/components/Validated";
import IconProfile from "../assets/img/icons/ico_profile.webp";

const LogInForm = () => {
  useEffect(() => {
    document.title = 'Dale ON a tu estilo | Log In';
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login: authLogin } = useAuth();
  const { login, loading, error } = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await login(formData.email, formData.password);

      if (token) {
        authLogin();
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Correo o contraseña incorrectos");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container bg-red pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="">
              <div className="card-body bg-red pt-5 mt-5 text-center">
                <img src={IconProfile} alt="Icon Profile" width={70} />
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
                  </div>

                  {error ? (
                    <div className="mb-3">
                      <Validated message={error} state={false}></Validated>
                    </div>
                  ) : (
                    ""
                  )}

                  {/* {errorMessage && <p className="text-danger">{errorMessage}</p>} */}

                  <div className="d-grid">
                    <SubmitButton
                      text={loading ? "Cargando..." : "INICIAR SESIÓN"}
                      type="submit"
                      disabled={loading}
                    />
                  </div>
                </form>

                <p className="my-3 text-white text-italic">
                  ¿Es la primera vez que registras un ticket?
                </p>
                <div className="d-grid pb-5">
                  <SubmitButton text="REGISTRATE" route="/user/register" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogInForm;
