import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Banner.css";
import videoBg from "../images/banner-v.mp4";

const Banner = () => {
  return (
    <div className="split-banner">
      {/* Background Video (covers full banner) */}
      <video autoPlay loop muted playsInline className="banner-video">
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Left Overlay Content */}
      <div className="banner-left-overlay d-flex align-items-center">
        <Container>
          <h1 className="banner-heading">
            Unleash your inner musician with{" "}
            <span className="brand-name">HarmoniQ</span>
          </h1>
          <p className="banner-description">
            The first step of learning to play an instrument? Wanting to play.
            Explore your love of music with us, whether you're a complete
            beginner or a seasoned pro. Let's play!
          </p>
          <Button
            variant="outline-light"
            className="rounded-pill px-4 py-2 banner-btn"
            href="/login"
          >
            Let’s get started →
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
