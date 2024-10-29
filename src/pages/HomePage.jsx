import { useEffect } from "react";
import Navbar from "../layouts/Navbar"
import Presentation from "../assets/components/Presentation";
import Winner from "../assets/components/Winner"
import Participate from "../assets/components/Participate"
import Award from "../assets/components/Award";
import Guide from "../assets/components/Guide"
import Brands from "../assets/components/Brands"
import Time from "../assets/components/Time"
import End from "../assets/components/End"
import Footer from "../layouts/Footer"
import '../styles/HomePage.css'
import '../styles/Image.css'
import '../styles/Texts.css'

const HomePage = () => {
  useEffect(() => {
    document.title = 'Dale ON a tu estilo | Home';
  }, []);

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
      <End></End>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
