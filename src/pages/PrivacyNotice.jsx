import { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const PrivacyNotice = () => {
  useEffect(() => {
    document.title = "Dale ON a tu estilo | Terminos y Condiciones";
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5 justify-text">
        <div className="row py-4 text">
          <div className="col-md-12 mt-4">
            <h5 className="subtitle-h3">
              AVISO DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES.
            </h5>
            <p>
              El Organizador pone a disposición de los consumidores y
              participantes de{" "}
              <b>LA PROMOCIÓN “DALE ON A TU ESTILO Y GANA UN VIAJE”,</b> su
              aviso de privacidad: IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO con
              motivo del cumplimiento de la Ley Federal de Protección de Datos
              Personales en Posesión de los Particulares (en adelante “LFPDPPP”)
              y su reglamento, <b>ESTUDIO DELIRIO S.C.,</b> (en adelante{" "}
              <b>“ESTUDIO DELIRIO”</b>), será la responsable de la obtención,
              resguardo, tratamiento y/o en su caso de la remisión y/o
              transferencia de sus datos personales (en adelante <b>“DATOS”</b>
              ), con domicilio en: Luz Saviñón 214, Int. 5A, Col. Del Valle,
              Benito Juárez, Ciudad de México, México, C.P. 03100.
            </p>
            <p>
              {" "}
              <b>
                OBTENCIÓN Y FINALIDADES DEL TRATAMIENTO DE LA INFORMACIÓN.
              </b>{" "}
              Los <b>“DATOS”</b> serán obtenidos de usted, a través de los
              registros de participación y/o por cualquier medio electrónico,
              óptico, sonoro, físico, visual u otra tecnología regulada por la
              LFPDPPP. Los “DATOS” que se recabarán serán los siguientes: <br />
              (i) Datos de identificación. <br />
              (ii) Datos de contacto.
            </p>
            <p>
              <b>“ESTUDIO DELIRIO”</b> utilizará sus <b>“DATOS”</b> para llevar
              a cabo la administración de su participación en La Promoción{" "}
              <b>“DALE ON A TU ESTILO Y GANA UN VIAJE”.“ESTUDIO DELIRIO”</b>{" "}
              tratará sus <b>“DATOS”</b> con las debidas medidas de seguridad
              administrativas, técnicas y físicas suficientes y/o necesarias
              para cumplir con las obligaciones establecidas en la LFPDPPP y su
              reglamento.
            </p>
            <p>
              <b>TRANSFERENCIA Y/O REMISIÓN DE DATOS PERSONALES.</b> Con motivo
              de La Promoción, <b>“ESTUDIO DELIRIO”</b> podrá transferir y/o
              remitir sus <b>“DATOS”</b> al Patrocinador, filiales, subsidiarias
              y/o terceros nacionales o extranjeros, ya sean personas físicas o
              morales con las que sostenga una relación jurídica, comercial y/o
              contractual, señalando que no se requerirá de su consentimiento
              para realizar la(s) transferencia(s) y/o remisión(es)
              necesaria(s), cuando se presente alguno de los supuestos
              establecidos en los artículos 14 y 37 de la LFPDPPP, los datos
              obtenidos únicamente se podrán utilizar con el propósito de
              ejecutar la actividad promocional.{" "}
            </p>
            <p>
              <b>EJERCICIO DE SUS DERECHOS ARCO.</b> Usted puede solicitar a{" "}
              <b>“ESTUDIO DELIRIO”</b> en cualquier momento, el Acceso,
              Rectificación, Cancelación u Oposición (DERECHOS ARCO), respecto
              de sus <b>“DATOS”</b>, así como revocar su consentimiento para el
              tratamiento de dichos <b>“DATOS”</b>, por medio de un correo
              electrónico a la dirección: administracion@estudiodelirio.com. Así
              mismo, usted podrá limitar el uso y/o divulgación de sus{" "}
              <b>“DATOS”</b> a través del medio antes señalado.{" "}
            </p>
            <p>
              <b>CAMBIOS AL AVISO DE PRIVACIDAD.</b> Cualquier cambio, por
              disposición legal, regulatoria y/o corporativa de{" "}
              <b>“ESTUDIO DELIRIO”</b> que se realice a este aviso de
              privacidad, será dado a conocer vía correo electrónico a los
              titulares de los <b>“DATOS”.</b>{" "}
            </p>
            <p>
              <b>AUTORIDAD REGULADORA:</b> El Instituto Nacional de
              Transparencia, Acceso a la Información y Protección de Datos
              Personales (INAI), es la autoridad competente para garantizar el
              acceso y protección de sus DATOS. Se le informa que, de ser
              necesario, puede acudir ante el INAI para hacer efectivos sus
              derechos.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PrivacyNotice;
