import { useNavigate } from 'react-router-dom';
import '../../styles/Button.css'; // Importamos el archivo de estilos CSS

// eslint-disable-next-line react/prop-types
const Button = ({ text, type = 'button', route = '', onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === 'submit') {
      if (onClick) onClick(); 
    } else if (route) {
      navigate(route);
    }
  };

  return (
    <button type={type} className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
