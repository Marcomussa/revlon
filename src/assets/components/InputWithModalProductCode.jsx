import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const InputWithModal = ({ modalImageSrc, modalText, placeholder, name, onChange }) => { 
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f1f1f1",
          padding: "5px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        {/* Input con el número o texto */}
        <input
          type="text"
          name={name}
          style={{
            flex: 1,
            border: "none",
            fontSize: "18px",
            backgroundColor: "#f1f1f1",
            letterSpacing: "2px",
            padding: "10px",
          }}
          placeholder={placeholder}
          onChange={onChange} 
        />

        {/* Icono de información */}
        <FaInfoCircle
          onClick={handleShow}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: "#000",
            marginLeft: "10px",
          }}
        />
      </div>

      {/* Modal de información */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body
          className="text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <img
            src={modalImageSrc}
            alt="Información adicional"
            style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
          />
          <FaInfoCircle style={{ fontSize: "24px", marginBottom: "15px" }} />
          <p>{modalText}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose} className="w-100">
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InputWithModal;
