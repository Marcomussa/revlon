import { useNavigate } from 'react-router-dom';
import '../../styles/Button.css'; // Importamos el archivo de estilos CSS

// eslint-disable-next-line react/prop-types
const Button = ({ text, type = 'button', route = '', onClick, disabled = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {  // Solo ejecuta el click si el botón no está deshabilitado
      if (route) {
        navigate(route);
      } else if (onClick) {
        onClick(); // Aseguramos que onClick se ejecute si está definido
      }
    }
  };

  return (
    <button 
      type={type} 
      className={`${disabled ? 'disabled-button' : 'custom-button'} w-100 mb-1`}  // Cambia la clase según si está habilitado o no
      onClick={handleClick} 
      disabled={disabled}  // Añadimos la prop disabled
    >
      {text}
    </button>
  );
};

export default Button;
