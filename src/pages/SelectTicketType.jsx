import Button from "../assets/components/Button";
import Compra from "../assets/img/compra.png"

const SelectTicketType = () => {
  return (
    <div className="container bg-red py-5">
      <div className="row">
        <div className="col-md-12 text-center">
         <img src={Compra} alt="" width={350}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center title text-white fw-bolder">
          ¿EN DÓNDE REALIZASTE TU COMPRA?
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <Button text="TIENDA FISICA" route="/user/ticket/physical"></Button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <Button text="COMPRA ONLINE" route="/user/ticket/online"></Button>          
        </div>
      </div>
    </div>
  );
};

export default SelectTicketType;
