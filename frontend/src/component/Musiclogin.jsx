import React from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Musiclogin.css";

const MusicWorkshopSection = () => {
      const navigate = useNavigate();

  return (
    <section className="music-section text-white d-flex align-items-center">
      <div className="overlay"></div>
      <div className="container position-relative text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-6"></div>
          <div className="col-md-6 px-4 px-md-5">
            <h1 className="fw-bold display-5 mb-3">Begin Your Musical Journey Login to Continue</h1>
            <h4 className="text-danger mb-3"></h4>
            <p className="mb-4">
             Unlock personalized lessons, save your progress, and get access to all your instruments in one place.
             <p>your music learning experience starts with a simple sign in.</p>
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <button className="btn btn-danger px-4 py-2 fw-semibold"onClick={() => navigate("/login")}>
              Login to Continue →
              </button>
              

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicWorkshopSection;
