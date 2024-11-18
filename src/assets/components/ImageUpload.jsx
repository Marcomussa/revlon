/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { useTicketData } from "../../context/TicketDataContext";
import { useAuth } from '../../context/AuthContext';
import { FaTrashAlt } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import "../../styles/Button.css";
import IcoImg from "../img/icons/ico_img.webp"
import Validated from "./Validated";
import axios from "axios"; 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
const CLOUDINARY_FOLDER = "Revlon/Tickets"; 

const ImageUpload = forwardRef(({ onImageChange }, ref) => {
  const { isAuthenticated } = useAuth();
  const { updateTicketData } = useTicketData();

  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null); 
  const [imageName, setImageName] = useState(""); 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false); 
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null); 

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const getSignature = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      const response = await axios.get(`${BACKEND_URL}/tickets/image_signature`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });
      return response.data;
    } catch (err) {
      setError("Error al obtener la firma de imagen.");
      throw err;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!isAuthenticated) {
      setError("Debes estar autenticado para subir una imagen.");
      return;
    }

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      setError("Solo se permiten imágenes en formato JPG o PNG.");
      setMessage("");
      onImageChange(false);
      return;
    }

    setImage(file); 
    setImageName(file.name);
    setError("");
    setMessage("Imagen subida exitosamente.");
    onImageChange(true);
  };

  // Actualizar la URL temporal de la imagen
  useEffect(() => {
    if (image) {
      const newImageURL = URL.createObjectURL(image);
      setImageURL(newImageURL);
      
      // Limpiar el objeto URL para liberar memoria
      return () => {
        URL.revokeObjectURL(newImageURL);
      };
    }
  }, [image]);

   const uploadImage = async () => {
    if (!image) {
      setError("No hay imagen para subir.");
      return;
    }

    try {
      setLoading(true); 
      const { timestamp, signature } = await getSignature();

      const formData = new FormData();
      formData.append("file", image); 
      formData.append("api_key", CLOUDINARY_API_KEY);
      formData.append("timestamp", timestamp);
      formData.append("signature", signature);
      formData.append("folder", CLOUDINARY_FOLDER);

      const uploadResponse = await axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: { 
          "Content-Type": "multipart/form-data"
        },
      });

      const { public_id } = uploadResponse.data;

      // Actualizar los datos del ticket con el ID de la imagen
      updateTicketData({
        image: public_id
      });

      setMessage("Imagen subida exitosamente");
      onImageChange(true, public_id); 
    } catch (error) {
      setError("Error al subir la imagen.");
      onImageChange(false);
    } finally {
      setLoading(false); 
    }
  };

  useImperativeHandle(ref, () => ({
    uploadImage
  }));

  const handleRemoveImage = () => {
    setImage(null);
    setImageName("");
    setMessage("");
    setError("");
    onImageChange(false);
    handleClose();

    // Restablecer el valor del input file a null
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="container mb-4 text-center">
      <input
        id="imageUpload"
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={handleImageChange}
        ref={fileInputRef} // Asignar el ref al input file
        disabled={loading} 
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
        {loading ? (
          <p>Subiendo imagen...</p> 
        ) : image ? (
          <>
            <img
              src={imageURL} // Mostrar la URL temporal
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "10px",
              }}
            />
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
              <FaTrashAlt
                style={{ cursor: "pointer", fontSize: "24px" }}
                onClick={handleShow}
              />
            </div>
          </>
        ) : (
          <img
            src={IcoImg}
            alt="Placeholder"
            style={{
              width: "125px",
              height: "125px",
              opacity: "0.45",
            }}
          />
        )}
      </div>

      <label htmlFor="imageUpload" className="custom-button w-100 mt-3">
        SUBIR FOTO
      </label>

      {message && (
        <div className="mt-2">
          <Validated message={message} state={true} />
        </div>
      )}
      {error && (
        <div className="mt-2 text-danger">
          <Validated message={error} state={false} />
        </div>
      )}

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
});

export default ImageUpload;
