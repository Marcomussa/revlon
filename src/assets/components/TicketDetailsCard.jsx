import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const TicketDetailsCard = ({
  num,
  registerDate,
  principalAnswer,
  weeklyAnswer,
}) => {
  const [weeklyNumber, setWeeklyNumber] = useState(1);

  useEffect(() => {
    if (typeof registerDate === "string") {
      const date = new Date(registerDate);
      const promotionStartDate = new Date("2024-11-03");
      
      const diffInTime = date.getTime() - promotionStartDate.getTime();
      const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
      
      const weekNumber = Math.floor(diffInDays / 7) + 1;

      setWeeklyNumber(weekNumber > 0 ? weekNumber : 1);
    }
  }, [registerDate]);

  return (
    <div className="row bg-campari-card mx-2 mt-3 rounded-3 px-4">
      <div className="col-md-12 border-bottom border-white pt-4 pb-2 px-0">
        <p className="subtitle text-white primary-font mb-0">
          Número de Ticket o de Pedido
        </p>
        <p className="text-white primary-font mb-0">{num}</p>
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
        <p className="subtitle text-white primary-font mb-0">
          Respuesta al concurso Semanal No. {weeklyNumber}
        </p>
        <p className="text-white primary-font mb-0">{weeklyAnswer}</p>
      </div>
    </div>
  );
};

export default TicketDetailsCard;
