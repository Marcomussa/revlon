import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Icono de eliminar
import { Modal, Button } from "react-bootstrap";
import "../../styles/Button.css"; // Importamos el archivo de estilos CSS
import Validated from "./Validated";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [imageName, setImageName] = useState(""); // Para manejar el nombre de la imagen
  const [message, setMessage] = useState(""); // Estado para manejar el mensaje de éxito o error
  const [error, setError] = useState(""); // Estado para manejar los errores
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar modal

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setImageName(file.name);
        setMessage("Imagen subida exitosamente");
        setError("");
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setError("Solo se permiten imágenes en formato JPG o PNG.");
      setMessage("");
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageName("");
    setMessage("");
    setError("");
    handleClose();
  };

  return (
    <div className="container mb-5 text-center">
      <input
        id="imageUpload"
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <div
        className="image-preview"
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "none",
          borderRadius: "10px",
          border: "1px dotted #fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: "10px",
        }}
      >
        {image ? (
          <>
            {/* Imagen cargada */}
            <img
              src={image}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "10px",
              }}
            />
            {/* Título de la imagen y botón de eliminar */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <span style={{ marginRight: "10px" }}>{imageName}</span> */}
              <FaTrashAlt
                style={{ cursor: "pointer", fontSize: "24px" }}
                onClick={handleShow}
              />
            </div>
          </>
        ) : (
          // Placeholder en caso de no haber imagen
          <img
            src="https://via.placeholder.com/100"
            alt="Placeholder"
            style={{
              width: "50px",
              height: "50px",
              opacity: "0.5",
            }}
          />
        )}
      </div>

      <label htmlFor="imageUpload" className="custom-button w-100 mt-3">
        SUBIR FOTO
      </label>

      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar esta imagen?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleRemoveImage}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageUpload;
