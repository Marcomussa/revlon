/* eslint-disable react/prop-types */
import IconCheck from "../img/icons/ico_checkmark.png"


/* Este componente manejara exito y error */
const Validated = ({ message, state }) => {
  return (
    <>
    <div className="container bg-validated rounded-3">
        <div className="row pt-2">
            <div className="col-12 d-flex gap-1">
                <i> <img src={IconCheck} alt="Icon" width={15} className='mx-2'/></i>
                <p className='text-white mb-2'>{ message }</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Validated