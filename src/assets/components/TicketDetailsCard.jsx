/* eslint-disable react/prop-types */
const TicketDetailsCard = ({
  num,
  registerDate,
  principalAnswer,
  weeklyAnswer,
}) => {
  return (
    <div className="row bg-campari-card mx-2 mt-3 rounded-3 px-4">
      <div className="col-md-12 border-bottom border-white pt-4 pb-2 px-0">
        <p className="subtitle text-white primary-font mb-0">
        Número de Ticket o de Pedido
        </p>
        <p className="text-white primary-font text mb-0">{num}</p>
      </div>
      <div className="col-md-12 border-bottom border-white py-2 px-0">
        <p className="subtitle text-white primary-font mb-0">
        Fecha de Registro
        </p>
        <p className="text-white primary-font mb-0">{registerDate}</p>
      </div>
      <div className="col-md-12 border-bottom border-white py-2 px-0">
        <p className="subtitle text-white primary-font mb-0">
        Respuesta al concurso Principal
        </p>
        <p className="text-white primary-font mb-0">{principalAnswer}</p>
      </div>
      <div className="col-md-12 pt-2 pb-4 px-0 ">
        <p className="subtitle text-white primary-font mb-0">Respuesta al concurso Semanal No.1</p>
        <p className="text-white primary-font mb-0">{weeklyAnswer}</p>
      </div>
    </div>
  );
};

export default TicketDetailsCard;
