import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login: authLogin } = useAuth();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const loginResponse = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginResponse.json();
      
      if (!loginResponse.ok) {
        throw new Error(loginData.message || "Error en el inicio de sesión");
      }

      const userToken = loginData.token;
      const userFirstName = loginData.firstName
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("userFirstName", JSON.stringify(userFirstName)); // Convertir a JSON

      const ticketResponse = await fetch("http://localhost:8080/tickets", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      const ticketData = await ticketResponse.json();

      if (!ticketResponse.ok) {
        throw new Error(ticketData.message || "Error al obtener los tickets");
      }

      authLogin(userToken, ticketData);
      setLoading(false);

      return userToken;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;