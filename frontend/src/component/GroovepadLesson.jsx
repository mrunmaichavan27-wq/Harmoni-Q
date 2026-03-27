import { useRef } from "react";
import "./GroovepadLesson.css";
import { IoChevronBackCircle } from "react-icons/io5";

export default function GroovepadLesson({ onBack }) {
  const useRefSection = useRef(null);
  const realLifeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="groovepad-page">

      {/* BACK BUTTON */}
      <button className="back-btn1" onClick={onBack}>
        <IoChevronBackCircle /> Back
      </button>

      {/* MAIN TITLE */}
      <h1 className="groovepad-title">Groovepad</h1>

      {/* INTRODUCTION */}
      <div className="groovepad-card">
        <h1>Introduction</h1>

        <p>
          Groovepad is a <strong>virtual beat-making tool</strong> where users
          create music by tapping sound pads. Each pad plays a different sound
          like drums, bass, or effects, and multiple pads can be played together
          to form a beat.
        </p>

        {/* TABLE OF CONTENTS */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(useRefSection)}>
              How Groovepad is Used
            </li>
            <li onClick={() => scrollToSection(realLifeRef)}>
              Where Groovepad is Used
            </li>
          </ol>
        </div>
      </div>

      {/* HOW TO USE */}
      <div className="groovepad-card" ref={useRefSection}>
        <h2>1. How is Groovepad Used?</h2>

        <p>Users simply:</p>
        <ul>
          <li>Tap a pad to start a sound</li>
          <li>Tap again to stop the sound</li>
          <li>Combine different pads to create a music loop or rhythm</li>
        </ul>

        <p>
          No musical knowledge is required — it works on a
          <strong> tap and play</strong> concept.
        </p>
      </div>

      {/* REAL LIFE USAGE */}
      <div className="groovepad-card" ref={realLifeRef}>
        <h2>2. Where is Groovepad Used in Real Life?</h2>

        <ul>
          <li>Pop and EDM music for creating beats</li>
          <li>DJ performances to trigger live sounds</li>
          <li>Instagram reels, YouTube Shorts &amp; TikTok for background music</li>
          <li>Music practice and learning for beginners</li>
        </ul>
      </div>

    </div>
  );
}
