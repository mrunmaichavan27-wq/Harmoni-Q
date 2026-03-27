import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import logo from "../images/lo.png";



export default function Footer() {
  return (
    <footer className="footer-section">

    

      {/* Logo & Links */}
      <div className="container footer-bottom">
        <div className="row align-items-center">

          <div className="col-md-5 footer-logo">
           <img src={logo} alt="Harmoniq Logo" style={{ 
    height:" 100%",
    width: "50%",
    objectFit: "contain",
}} />
                  
          </div>

          <div className="col-md-6 text-center nav-links">
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            
        <a href="/contact">CONTACT US</a>
          </div>


        </div>
      </div>

      <div className="footer-copy">
        Copyright © 2024 Musicali | Powered by Onecontributor
      </div>

    </footer>
  );
}
