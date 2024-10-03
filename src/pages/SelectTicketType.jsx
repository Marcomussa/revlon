import Button from "../assets/components/Button";

const SelectTicketType = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
         <img src="https://placehold.co/250x250" alt=""/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          ¿EN DÓNDE REALIZASTE TU COMPRA?
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Button text="TIENDA FISICA" route="/user/ticket/physical"></Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Button text="COMPRA ONLINE" route="/user/ticket/online"></Button>          
        </div>
      </div>
    </div>
  );
};

export default SelectTicketType;
