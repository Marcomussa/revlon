import '../styles/Nav.css'
import Logo from '../img/logo.png'
import Iconfb from '../img/ico_fb.png'
import Iconig from '../img/ico_ig.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='container-fluid-lg bg-black'>
        <div className='row'>
          <div className="mt-5 text-center col-md-12">
            <Link className="gap-4">
              <img src={Iconfb} width={34} alt="" />
              <img src={Iconig} width={34} alt="" />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-2 mb-3">
            <img src={Logo} alt="" width={100} />
          </div>
          <div className="col-md-12 text-center text-white-50">
            <p>REVLON© 2024. Todos los Derechos Reservados.
              Al registrar tu compra en esta pagina, aceptas que has leido y entendido los terminos y condiciones.
              La participacion esta sujeta a la verificacion de la validez del ticket y el cumplimiento de los requisitos establecidos. Verifica las Bases Legales para saber conocer los lineamientos legales que rigen nuestra dinamica.
            </p>
          </div>
          <div className="col-md-12 text-center text-white">
            <p> Este sorteo es exclusivo para mayores de 18 años.
              Los datos personales proporcionados seran tratados de cauerdo con nuestra Politica de Privacidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;