import { useNavigate } from 'react-router-dom';
import '../../styles/Button.css'; 

// eslint-disable-next-line react/prop-types
const Button = ({ text, type = 'button', route = '', onClick, disabled = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) { 
      if (onClick) {
        onClick(); 
      }
      if (route) {
        navigate(route); 
      }
    }
  };

  return (
    <button 
      type={type} 
      className={`${disabled ? 'disabled-button' : 'custom-button'} w-100 mb-1`}  // Cambia la clase según si está habilitado o no
      onClick={handleClick} 
      disabled={disabled}  
    >
      {text}
    </button>
  );
};

export default Button;
