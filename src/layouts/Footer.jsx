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
            <Link to="https://www.facebook.com/revlonhairtools?locale=es_LA">
              {/* Ícono de Facebook */}
              <FaFacebookF size={34} className="m-2" style={{ color: 'white' }} />
            </Link>
            <Link to="https://www.instagram.com/revlonhairtoolslatam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
              {/* Ícono de Instagram */}
              <FaInstagram size={34} className="m-2" style={{ color: 'white' }} />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-2 mb-4">
            <img src={Logo} alt="Logo" width={110} />
          </div>
          <div className="col-md-12 px-4">
            <p className="footer-text secondari text-center border-top border-white pt-4 padding-footer">
              REVLON© 2024. Todos los Derechos Reservados. Al registrar tu
              compra en esta página, aceptas que has leído y entendido los
              términos y condiciones. La participación está sujeta a la
              verificación de la validez del ticket y el cumplimiento de los
              requisitos establecidos. Verifica las <a href="/legal-bases" style={{
                textDecoration: 'none'
              }}><b className="text-white text-decoration-underline">Bases Legales</b></a> y la <a href="/privacy-notice" style={{
                textDecoration: 'none'
              }}><b className="text-white text-decoration-underline">Politica de Privacidad</b></a> para
              conocer los lineamientos legales que rigen nuestra dinámica.
            </p>
          </div>
          <div className="col-md-12 px-2 mb-5">
            <p className="footer-text text-center text-white subtitle pt-4 padding-footer">
              {" "}
              Este concurso es exclusivo para mayores de 18 años. Los datos
              personales proporcionados serán tratados de acuerdo con nuestra
              Política de Privacidad.
            </p>
          </div>
          <div className="col-md-12 px-2 mb-5">
              <p className="text-center secondari">¿Dudas? ¿Problemas para registrar tu ticket? Escribenos a <span style={{
                textDecoration: 'underline',
                fontWeight: '700',
              }}>soporte@daleonatuestilo.com</span></p>
          </div>s
        </div>
      </div>
    </>
  );
};

export default Footer;
