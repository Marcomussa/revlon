import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import Logo from '../assets/img/logo.png';

function BasicExample() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);  

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false); 
    } else {
      setShowNavbar(true);  
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar); 

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <Navbar expand="lg" fixed="top" className={`nav-bg pt-3 pb-3 ${showNavbar ? 'navbar-show' : 'navbar-hide'} `}>
      <Container>
        <Link to='/'>
          <img src={Logo} alt="" width={120} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav nav-responsive">
          <Nav className="ms-auto">
            <Nav.Link className='text-white fs-nav-link fw-500 text-end' href="/user/login">Registra tu ticket</Nav.Link>
            <Nav.Link className='text-white fs-nav-link fw-500 text-end ' href="/legal-bases">Bases Legales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
