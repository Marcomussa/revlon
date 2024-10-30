import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "../assets/components/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Nav.css";
import Logo from "../assets/img/logo.png";

const NavbarComponent = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { isAuthenticated, logout } = useAuth();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`nav-bg pt-3 pb-3 ${
        showNavbar ? "navbar-show" : "navbar-hide"
      } `}
    >
      <Container>
        <Link to="/">
          <img src={Logo} alt="" width={120} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav nav-responsive">
          <Nav className="ms-auto">
            {!isAuthenticated ? (
              <>
                <Nav.Link
                  className="text-white nav-link-native fw-500 text-end"
                  href="/user/login"
                >
                  LOG IN
                </Nav.Link>
                <Nav.Link
                  className="text-white nav-link-native fw-500 text-end"
                  href="/user/login"
                >
                  REGISTRA TU TICKET
                </Nav.Link>
                <Nav.Link
                  className="text-white nav-link-native fw-500 text-end "
                  href="/legal-bases"
                >
                  BASES LEGALES
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  className="text-white nav-link-native fw-600 text-end"
                  href="/user/ticket/select-type"
                >
                  REGISTRA TU TICKET
                </Nav.Link>
                <Nav.Link
                  className="text-white nav-link-native fw-500 text-end"
                  href="/user/dashboard"
                >
                  DASHBOARD
                </Nav.Link>
                <Nav.Link
                  className="text-white nav-link-native fw-500 text-end "
                  href="/legal-bases"
                >
                  BASES LEGALES
                </Nav.Link>
                <Nav.Link
                  className="text-white nav-link-native fw-500 text-end"
                  onClick={logout}
                  style={{ cursor: "pointer" }}
                >
                  LOG OUT
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
