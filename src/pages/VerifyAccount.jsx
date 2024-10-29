import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../assets/components/Button";
const BACKEND_URL= import.meta.env.VITE_BACKEND_URL

const VerifyAccount = () => {
  useEffect(() => {
    document.title = "Dale ON a tu estilo | Verificar Cuenta";
  }, []);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const token = searchParams.get("t");
    const email = searchParams.get("email");

    const verifyAccount = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/auth/verify-account?t=${token}&email=${email}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          const errorMessage = data.message || "Error en la verificación de la cuenta";
          throw new Error(errorMessage);
        }

        setSuccess(true);
      } catch (err) {
        setError(err.message); // Mostrar el mensaje de error del backend
      } finally {
        setLoading(false);
      }
    };

    verifyAccount();
  }, [searchParams]);

  const handleNavigateToLogin = () => {
    navigate("/user/login");
  };

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5 pt-5">
        {loading && (
          <>
            <div>
              <div className="spinner-border" role="status"></div>
            </div>
            <span className="sr-only">Cargando...</span>
            <p className="mt-3">Verificando cuenta, por favor espera...</p>
          </>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">¡Error!</h4>
            <p>{error}</p>
            <Button
              text="Volver al inicio"
              onClick={() => navigate("/")}
            ></Button>
          </div>
        )}

        {success && (
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">¡Éxito!</h4>
            <p>Tu cuenta ha sido verificada con éxito.</p>
            <Button
              text="Iniciar sesión"
              onClick={handleNavigateToLogin}
            ></Button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default VerifyAccount;
