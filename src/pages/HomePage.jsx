import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Bienvenido a la página de inicio</h1>
      <p>Haz clic en el siguiente enlace para registrarte.</p>
      <Link to="/user/register" className="btn btn-primary">Registrarse</Link>
    </div>
  );
};

export default HomePage;
