import { useState } from "react";
import axios from "axios";

const useRegisterTicket = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerTicket = async (ticketData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const userToken = localStorage.getItem("userToken");
      const response = await axios.post(
        "http://localhost:8080/tickets",
        ticketData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json"
          }
        }
      );

      setSuccess(true);
      console.log("Ticket registrado exitosamente:", response.data);
      return response.data;
    } catch (err) {
      setError(
        err.response ? err.response.data : "Error al registrar el ticket"
      );
      console.error("Error al registrar el ticket:", err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    registerTicket,
  };
};

export default useRegisterTicket;
