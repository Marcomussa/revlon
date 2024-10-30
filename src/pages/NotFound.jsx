import { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Button from "../assets/components/Button";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Dale ON a tu estilo | 404';
  }, []);

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <h1>404 - Página no encontrada</h1>
            <p className="text">Lo sentimos, la página que buscas no existe.</p>
            <div className="button py-3">
              <Button text="Volver a la página de inicio" route="/"></Button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
