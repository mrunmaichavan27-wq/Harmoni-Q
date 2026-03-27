import React from "react";
import "./About.css";
import aboutSec from "../images/piano.avif";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FaMusic, FaHeadphones, FaWaveSquare, FaLightbulb } from "react-icons/fa";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* ===== OUR STORY SECTION ===== */}
      <Container className="story-section">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="section-title2">Our Story</h2>

            <p className="section-text">
              We believe music learning should be simple, fun, and accessible to
              everyone. Our platform brings music to life through virtual
              instruments, allowing students to learn and practice even without
              owning a physical instrument.
            </p>

            <p className="section-text">
              With interactive lessons and engaging quiz-based learning, we make
              it easy to understand music concepts anytime, anywhere. Our goal
              is to remove barriers and help anyone learn music with confidence,
              creativity, and enjoyment.
            </p>

            <span className="story-highlight">
              Because music is for everyone.
            </span>
          </Col>

          <Col md={6}>
            <div className="story-card">
              <img
                src={aboutSec}
                alt="Our Story"
                className="story-img"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* ===== WHAT WE STAND FOR ===== */}
      <Container className="values-section text-center">
        <h2 className="section-title2">What We Stand For</h2>

        <Row className="mt-4">
          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaMusic />
                </div>
                <h5>Piano Learning</h5>
                <p>
                  Build strong fundamentals by learning notes, chords, and music
                  basics through an interactive piano experience.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaHeadphones />
                </div>
                <h5>Groovepad Creation</h5>
                <p>
                  Create beats, mix sounds, and explore rhythm using simple,
                  intuitive groovepad tools.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaWaveSquare />
                </div>
                <h5>Accurate Tuning</h5>
                <p>
                  Stay perfectly in tune with our built-in tuner for better sound
                  clarity and confident practice.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaLightbulb />
                </div>
                <h5>Innovation</h5>
                <p>
                  We blend technology and music education to create a fun,
                  engaging, and easy-to-use learning platform.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ===== CTA SECTION ===== */}
      <div className="cta-section text-center">
        <h2>
          Ready to Experience <span>Harmony</span>?
        </h2>
        <p>Start learning, playing, and creating music today.</p>

        <Button
          className="cta-btn"
          onClick={() => navigate("/instruments")}
        >
          Explore HarmoniQ
        </Button>
      </div>
    </div>
  );
}
