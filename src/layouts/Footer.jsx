import '../styles/Nav.css'
import Logo from '../assets/img/logo.png'
import Iconfb from '../assets/img/ico_fb.png'
import Iconig from '../assets/img/ico_ig.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='container bg-black'>
        <div className='row'>
          <div className="mt-5 text-center col-md-12">
            <Link>
              <img src={Iconfb} width={34} alt="Facebook" className='m-2'/>
              <img src={Iconig} width={34} alt="Instagram"
              className='m-2' />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-2 mb-3">
            <img src={Logo} alt="Logo" width={100} />
          </div>
          <div className="col-md-12 px-4">
            <p className='text text-center text-white-50'>REVLON© 2024. Todos los Derechos Reservados.
              Al registrar tu compra en esta pagina, aceptas que has leido y entendido los terminos y condiciones.
              La participacion esta sujeta a la verificacion de la validez del ticket y el cumplimiento de los requisitos establecidos. Verifica las Bases Legales para saber conocer los lineamientos legales que rigen nuestra dinamica.
            </p>
          </div>
          <div className="col-md-12 px-4 mb-5">
            <p className='text text-center text-white'> Este sorteo es exclusivo para mayores de 18 años.
              Los datos personales proporcionados seran tratados de cauerdo con nuestra Politica de Privacidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
