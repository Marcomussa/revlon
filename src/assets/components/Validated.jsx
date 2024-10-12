/* eslint-disable react/prop-types */
import { FaTimesCircle } from "react-icons/fa";
import IconCheck from "../img/icons/ico_checkmark.png";

/* Este componente manejará éxito y error */
const Validated = ({ message, state }) => {
  return (
    <>
      <div className={`container ${state ? 'bg-validated' : 'bg-error'} rounded-3 mt-2`}>
        <div className="row pt-2">
          <div className="col-12 d-flex gap-1">
            <i>
              {state ? (
                <img src={IconCheck} alt="Icon" width={15} className="mx-2" />
              ) : (
                <FaTimesCircle size={20} className="mx-2 text-white" /> 
              )}
            </i>
            <p className="text-white mb-2">
              {state ? message : message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Validated;
