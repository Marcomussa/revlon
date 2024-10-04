import Button from "../assets/components/Button";

const TripInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <h3>PARTICIPA POR UN VIAJE TODO PAGADO A CANCÚN</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>Te mostraremos una imagen que estará repleta de productos <b>REVLON</b>, mírala con cuidado y calcula cuántos productos hay en ella.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p><b>Tómate tu tiempo antes de escribír una respuesta final.</b></p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Button text="CONTINUAR" route="/user/ticket/trip/calculate-total"></Button>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
