import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const email = searchParams.get("email");
    const token = searchParams.get("t");

    const verifyAccount = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth/verify-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, t: token }),
        });

        if (!response.ok) {
          throw new Error("Error en la verificación de la cuenta");
        }

        const data = await response.json();
        console.log(data);

        setSuccess(true); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    verifyAccount();
  }, [searchParams]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (success) {
    return <p>Cuenta verificada con éxito.</p>;
  }

  return null;
};

export default VerifyAccount;
