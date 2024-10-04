/* eslint-disable react/prop-types */
const TicketDetailsCard = ({
  num,
  registerDate,
  principalAnswer,
  weeklyAnswer,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <p>
          <b>Número de Ticket o de Pedido</b>
        </p>
        <p>{num}</p>
      </div>
      <div className="col-md-12">
        <p>
          <b>Fecha de Registro</b>
        </p>
        <p>{registerDate}</p>
      </div>
      <div className="col-md-12">
        <p>
          <b>Respuesta al concurso Principal</b>
        </p>
        <p>{principalAnswer}</p>
      </div>
      <div className="col-md-12">
        <p><b>Respuesta al concurso Semanal No.1</b></p>
        <p>{weeklyAnswer}</p>
      </div>
    </div>
  );
};

export default TicketDetailsCard;
