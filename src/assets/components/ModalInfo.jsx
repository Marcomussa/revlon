import { Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ show, handleClose, modalTitle, modalText, route }) => {
  const navigate = useNavigate(); // Hook para manejar la redirección

  const handleRedirect = () => {
    if (route) {
      navigate(route); // Redirigir si se proporciona una ruta
    }
    handleClose(); // Cerrar el modal
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <h3>{modalTitle}</h3>
      </Modal.Header>
      <Modal.Body
        className="text-center"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <p>{modalText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleRedirect} className="w-100">
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInfo;
