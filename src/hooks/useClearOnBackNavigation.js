import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTicketData } from '../context/TicketDataContext';

const useClearOnBackNavigation = () => {
  const { clearTicketData } = useTicketData();
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      clearTicketData();
      navigate('/dashboard');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [clearTicketData, navigate]);
};

export default useClearOnBackNavigation;
