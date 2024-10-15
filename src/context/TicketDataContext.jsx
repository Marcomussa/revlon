/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

//todo: FUNCIONALIDAD DE QUE SI VUELVE HACIA ATRAS SE HAGA UN CLEAR
import { createContext, useState, useContext } from 'react';

const TicketDataContext = createContext();

export const useTicketData = () => useContext(TicketDataContext);

export const TicketDataProvider = ({ children }) => {
  const [ticketData, setTicketData] = useState(() => {
    const storedData = localStorage.getItem('ticketData');
    return storedData ? JSON.parse(storedData) : {};  // Inicializar desde localStorage o como un objeto vacío
  });

  const updateTicketData = (newData) => {
    setTicketData((prevData) => {
      const updatedData = { ...prevData, ...newData };  // Mantener el estado previo y actualizar con los nuevos datos
      localStorage.setItem('ticketData', JSON.stringify(updatedData));  // Guardar en localStorage
      return updatedData;
    });
  };

  const clearTicketData = () => {
    setTicketData({});  // Limpiar los datos de ticket
    localStorage.removeItem('ticketData');  // Remover de localStorage
  };

  return (
    <TicketDataContext.Provider value={{ ticketData, updateTicketData, clearTicketData }}>
      {children}
    </TicketDataContext.Provider>
  );
};

