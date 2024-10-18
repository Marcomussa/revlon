import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL= import.meta.env.VITE_BACKEND_URL;

const useGetTickets = () => {
  const [tickets, setTickets] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);     

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    const getTickets = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/tickets`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        const ticketData = response.data;
        setTickets(ticketData);  
        localStorage.setItem("tickets", JSON.stringify(ticketData)); 
      } catch (err) {
        setError(err.message);   
      } finally {
        setLoading(false);      
      }
    };

    if (userToken) {
      getTickets();  
    } else {
      setLoading(false);
    }
  }, []); 

  return { tickets, loading, error };
};

export default useGetTickets;
