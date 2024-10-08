import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Winner from "../assets/components/Winner"
import Participate from "../assets/components/Participate"
import Award from "../assets/components/Award";
import Time from "../assets/components/Time"
import Guide from "../assets/components/Guide"
import '../styles/HomePage.css'
import Presentation from "../assets/components/Presentation";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Presentation>
      </Presentation>
      <Winner></Winner>
      <Participate>
      </Participate>
      <Award></Award>
      
      <Guide></Guide>
      <Time></Time>
      {/* <div className="container">
        <div className="row">
          <div className="col-md 12">
            <h2>¡No esperes más! Compra tus productos Revlon hoy, participa y ¡gana!</h2>
          </div>
          <Button text="Registra tu ticket"></Button>
        </div>
      </div> */}
      <Footer></Footer>
    </>


  );
};

export default HomePage;
