import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import logo from '../img/logo.png'


function BasicExample() {
  return (
      <Navbar expand="lg" bg="transparent" fixed="top" className="">
        <Container>
          <Link>
            <img src={logo} alt="" width={120} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='text-white' href="#home">Registra tu ticket</Nav.Link>
              <Nav.Link className='text-white' href="#link">Bases Legales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

export default BasicExample;