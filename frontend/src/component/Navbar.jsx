import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";
import logo from "../images/lo.png";

const CustomNavbar = () => {
  const navigate = useNavigate();

  // 🔹 Get user EMAIL & first letter
  const email = localStorage.getItem("email") || "";
  const firstLetter = email ? email.charAt(0).toUpperCase() : "";

  // 🔑 Check login status
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Harmoniq Logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="menu-item">Home</Nav.Link>
            <Nav.Link href="/instruments" className="menu-item">Instruments</Nav.Link>
            <Nav.Link href="/lesson" className="menu-item">Lesson</Nav.Link>
            <Nav.Link href="/quiz" className="menu-item">Quiz</Nav.Link>
            <Nav.Link href="/about" className="menu-item">About Us</Nav.Link>
            <Nav.Link href="/contact" className="menu-item">Contact Us</Nav.Link>
          </Nav>

          {/* 🔥 Right Side: Profile Circle + Login/Logout */}
          <div className="d-flex align-items-center gap-3">

            {/* 🟡 Profile First Letter Bubble (EMAIL first letter) */}
            {isLoggedIn && (
              <div
                className="profile-circle"
                onClick={() => navigate("/profile")}
                title={email}
              >
                {firstLetter}
              </div>
            )}

            {/* Login / Logout Button */}
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className="custom-btn d-flex align-items-center gap-2"
              >
                <FaSignOutAlt size={14} />
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="custom-btn d-flex align-items-center gap-2"
              >
                <FaUserCircle size={15} />
                Log in
              </Button>
            )}

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
