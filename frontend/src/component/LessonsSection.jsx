import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./LessonsSection.css";

const LessonsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="lessons-section">
      <Container className="text-center">
        <h2 className="lessons-heading">Start Learning Music Today</h2>
        <p className="lessons-text">
          Explore interactive lessons designed for beginners and advanced musicians alike.
          Learn notes, chords, rhythm, and more — all at your own pace.
        </p>
        <Button
          variant="light"
          className="lessons-btn rounded-pill px-4 py-2"
          onClick={() => navigate("/lesson")}
        >
          Go to Lessons →
        </Button>
      </Container>
    </section>
  );
};

export default LessonsSection;
