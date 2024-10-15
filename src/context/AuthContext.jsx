/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth === 'true';  
  });
  const [tickets, setTickets] = useState([]); 

  const login = (token, ticketsData) => {
    setIsAuthenticated(true);
    setTickets(ticketsData  || []);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userToken', token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setTickets([]);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, tickets }}>
      {children}
    </AuthContext.Provider>
  );
};
