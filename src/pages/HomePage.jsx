import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import Winner from "../assets/components/Winner"
import Participate from "../assets/components/Participate"
import Award from "../assets/components/Award";
import Brands from "../assets/components/Brands"
import Time from "../assets/components/Time"
import Guide from "../assets/components/Guide"
import '../styles/HomePage.css'
import Presentation from "../assets/components/Presentation";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Winner></Winner>
      <Participate></Participate>
      <Award></Award>
      <Guide></Guide>
      <Brands></Brands>
      <Time></Time>
      <Footer></Footer>
    </>


  );
};

export default HomePage;
