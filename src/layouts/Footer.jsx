import "../styles/Nav.css";
import Logo from "../assets/img/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container bg-black">
        <div className="row">
          <div className="mt-5 text-center col-md-12">
            <Link to="#">
              {/* Ícono de Facebook */}
              <FaFacebookF size={34} className="m-2" style={{color: 'white'}}/>
            </Link>
            <Link to="#">
              {/* Ícono de Instagram */}
              <FaInstagram size={34} className="m-2" style={{color: 'white'}}/>
            </Link>
          </div>
          <div className="col-md-12 text-center mt-2 mb-4">
            <img src={Logo} alt="Logo" width={110} />
          </div>
          <div className="col-md-12 px-4">
            <p className="text secondari text-center border-top border-white pt-4">
              REVLON© 2024. Todos los Derechos Reservados. Al registrar tu
              compra en esta pagina, aceptas que has leido y entendido los
              terminos y condiciones. La participacion esta sujeta a la
              verificacion de la validez del ticket y el cumplimiento de los
              requisitos establecidos. Verifica las Bases Legales para saber
              conocer los lineamientos legales que rigen nuestra dinamica.
            </p>
          </div>
          <div className="col-md-12 px-2 mb-5">
            <p className="text text-center text-white subtitle px-4 mb-5 ">
              {" "}
              Este sorteo es exclusivo para mayores de 18 años. Los datos
              personales proporcionados seran tratados de cauerdo con nuestra
              Politica de Privacidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
