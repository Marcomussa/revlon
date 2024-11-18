import Registro from "../img/ticket.webp";
import Carousel from "../components/Carousel";

const Participate = () => {
  return (
    <>
      <div className="container bg-white-waves mt-5">
        <div className="row px-xl-5">
          <div className="col-12 col-xl-7 p-xl-5">
            <h1 className="text-center primary-font title-red title-size py-xl-4 mt-xl-5">
              ¿CÓMO PARTICIPAR?
            </h1>
            <p className="text-center text primary-font text-gray px-2 px-xl-4 text-guide">
              <b>¡Es facilísimo! </b> Adquiere $599 MXN de compra de cualquiera
              de los productos participantes (puedes consultarlos aquí) ya sea
              en tiendas fisicas o en linea en los comercios participantes.
            </p>
          </div>
          <div className="col-12 col-xl-5">
            <div className="row py-5">
              <Carousel></Carousel>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center desktop-pd">
          <div className="col-12 col-md-4">
            <img
              src={Registro}
              alt="Registro"
              className="d-block mx-auto img-size-p"
              lazy="loading"
            />
          </div>

          <div className="col-12 col-md-8 pe-xl-5">
            <div className="px-xl-5 ">
              <p className="text-center primary-font text text-guide text-gray mb-0 mt-5">
                <b>¡1 compra, 1 oportunidad!:</b>
              </p>
              <p className="text-center primary-font text text-guide text-gray">
                <b>
                  Cada ticket de compra con valor de $599 MXN o más por
                  productos REVLON te da UNA oportunidad. ¡Así es, con una
                  compra* ya estás participando!
                </b>
              </p>
            </div>

            <p className="text-center text-guide primary-font text-gray px-xl-4">
              *No importa si compras más de un producto, cada ticket equivale a
              una participación.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 pt-xl-5 pt-5">
            <h2 className="text-center primary-font title-red title-size mb-3 px-3">
              DOS FORMAS DE GANAR:
            </h2>
            <p className="text-center text-guide primary-font text-gray mb-5 px-3 pb-xl-5">
              Cada ticket registrado te da la oportunidad de probar tus
              habilidades de cálculo en dos dinámicas:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Participate;
