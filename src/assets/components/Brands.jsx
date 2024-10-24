import Walmart from "../img/brands/walmart.png";
import Coppel from "../img/brands/coppel.png";
import Woolworth from "../img/brands/woolworth.png";
import Chedraui from "../img/brands/chedraui.png";
import Soriana from "../img/brands/soriana.png";
import Fresko from "../img/brands/fresko.png";
import Suburbia from "../img/brands/suburbia.png";
import Liverpool from "../img/brands/liverpool.png";
import Sansborns from "../img/brands/sanborns.png";
import DelSol from "../img/brands/delsol.png";
import Dax from "../img/brands/dax.png";
import Heb from "../img/brands/heb.png";
import Sears from "../img/brands/sears.png";

const Brands = () => {
  return (
    <>
      <div className="container bg-red-glitter p-5 ">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-white mt-4 text-center primary-font title">
              TIENDAS PARTICIPANTES
            </h1>
            <p className="text-white primary-font text-center subtitle sub-brands mb-xl-5">
              COMPRA EN TIENDA FÍSICA
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center gap-3 mt-4 gap-xl-5">
            <img src={Walmart} alt="Walmart" className="brands-size" />
            <img src={Coppel} alt="Coppel" className="brands-size" />
            <img src={Woolworth} alt="Woolworth" className="brands-size" />
            
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center gap-3 mt-4 gap-xl-5">
            <img src={Chedraui} alt="Chedraui" className="brands-size" />
            <img src={Soriana} alt="Soriana" className="brands-size" />
            <img src={Fresko} alt="Fresko" className="brands-size" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 d-flex justify-content-center gap-3 mt-4 gap-xl-5">
            <img src={Suburbia} alt="Suburbia" className="brands-size" />
            <img src={Liverpool} alt="Liverpool" className="brands-size" />
            <img src={Sears} alt="Sears" className="brands-size" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 d-flex justify-content-center gap-3 mt-4 gap-xl-5">
            <img src={Sansborns} alt="Sanborns" className="brands-size py-3" />
            <img src={DelSol} alt="DelSol" className="brands-size" />
            <img src={Dax} alt="Dax" className="brands-size py-4" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 d-flex justify-content-center gap-3 mt-4 gap-xl-5">
            <img src={Heb} alt="Heb" className="brands-size-e" />
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-md-12">
            <p className="text-white primary-font text-center subtitle sub-brands my-xl-5 pt-xl-4">
              COMPRA ONLINE
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center gap-3 mt-4 gap-xl-5">
            <img src={Walmart} alt="" className="brands-size" />
            <img src={Coppel} alt="" className="brands-size" />
            <img src={Woolworth} alt="" className="brands-size" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12 d-flex justify-content-center gap-3 mt-4 gap-xl-5">
            <img src={Heb} alt="" className="brands-size-e py-xl-5 py-4" />
            <img src={DelSol} alt="" className="brands-size-e" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
