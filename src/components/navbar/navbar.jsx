import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react"; // Importing logout icon
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();

  // Logout function
  const { logout } = React.useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/login"); // Redirect to login page
  };

  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Container>
        {/* Brand Name */}
        <Navbar.Brand href="/" className="custom-navbar-brand">
          SURA
        </Navbar.Brand>

        {/* Logout Button with Icon */}
        <Button className="logout-button" onClick={handleLogout}>
          <LogOut size={20} className="logout-icon" />
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
