import { useNavigate } from 'react-router-dom';
import '../../styles/Button.css'; // Importamos el archivo de estilos CSS

// eslint-disable-next-line react/prop-types
const Button = ({ text, type = 'button', route = '', onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    } else if (onClick) {
      onClick(); // Aseguramos que onClick se ejecute si está definido
    }
  };

  return (
    <button type={type} className="custom-button w-100 mb-1" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
