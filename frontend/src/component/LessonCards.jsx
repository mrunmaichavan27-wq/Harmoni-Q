import { useState } from "react";
import "./LessonCards.css";
import pino from "../images/pino.jpg";

import { IoChevronBackCircle } from "react-icons/io5";
import staff from "../images/staff.jpg";
import claf from "../images/claf.jpg";
import accidental from "../images/accidental.png";
import intervals from "../images/intervals.jpg";
import chord from "../images/chord.png";
import scale from "../images/scale.png";
import key from "../images/key.jpg";

// ✅ NEW IMAGE
import groovepadImg from "../images/groovepad.jpg";

// lesson components
import Staff from "./Staff";
import Notes from "./Notes";
import Clefs from "./Clefs";
import Accidentals from "./Accidentals";
import Interval from "./Interval";
import Chords from "./Chords";
import Scales from "./Scales";
import Keys from "./Keys";

// ✅ CORRECT COMPONENT (lesson content + back button)
import GroovepadLesson from "./GroovepadLesson";

export default function LessonCards() {
  const [activeLesson, setActiveLesson] = useState(null);

  const pitchCards = [
    {
      title: "Notes",
      desc: "Learn about notes and their positions on the piano.",
      img: pino,
      lesson: "notes",
    },
    {
      title: "The staff",
      desc: "Learn about the staff and note positions on the staff.",
      img: staff,
      lesson: "staff",
    },
    {
      title: "Clefs",
      desc: "Understand treble clef, bass clef, and how notes are placed.",
      img: claf,
      lesson: "clefs",
    },
    {
      title: "Accidentals",
      desc: "Learn sharps, flats and naturals.",
      img: accidental,
      lesson: "accidentals",
    },
  ];

  const structureCards = [
    {
      title: "Intervals",
      desc: "Learn how distance between two notes forms intervals.",
      img: intervals,
      lesson: "interval",
    },
    {
      title: "Chords",
      desc: "Understand triads, seventh chords, and chord structures.",
      img: chord,
      lesson: "chords",
    },
    {
      title: "Scales",
      desc: "Learn major, minor and other scale patterns.",
      img: scale,
      lesson: "scales",
    },
    {
      title: "Keys",
      desc: "Understand key signatures and how to identify them.",
      img: key,
      lesson: "keys",
    },
  ];

  // ✅ PRACTICE SECTION
  const practiceCards = [
    {
      title: "Groovepad",
      desc: "Create beats and learn rhythm using interactive sound pads.",
      img: groovepadImg,
      lesson: "groovepad",
    },
  ];

  /* ================= SINGLE LESSON VIEW ================= */

  if (activeLesson) {
    const LessonComponent = {
      notes: <Notes />,
      staff: <Staff />,
      clefs: <Clefs />,
      accidentals: <Accidentals />,
      interval: <Interval />,
      chords: <Chords />,
      scales: <Scales />,
      keys: <Keys />,

      // ✅ UPDATED (with back support)
      groovepad: (
        <GroovepadLesson onBack={() => setActiveLesson(null)} />
      ),
    }[activeLesson];

    return (
      <div className="lesson1-wrapper">
        {/* Back button already handled inside GroovepadLesson */}
        {activeLesson !== "groovepad" && (
          <button
            className="back-btn1"
            onClick={() => setActiveLesson(null)}
          >
            <IoChevronBackCircle /> Back
          </button>
        )}
        {LessonComponent}
      </div>
    );
  }

  /* ================= DEFAULT CARD PAGE ================= */

  return (
    <div className="lesson1-wrapper">

      {/* ⭐ PAGE TITLE */}
      <div className="lesson-page-title">
        <h1>
          Build Your <span>Musical Skills</span>
        </h1>
        <p>Master music fundamentals with interactive lessons</p>
      </div>

      {/* Pitch Section */}
      <h2 className="section-title">Pitch</h2>
      <div className="card1-grid">
        {pitchCards.map((c, i) => (
          <div
            key={i}
            className="lesson1-card"
            onClick={() => setActiveLesson(c.lesson)}
          >
            <img src={c.img} alt={c.title} className="card1-image" />
            <div className="card1-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Structure Section */}
      <h2 className="section-title">Structure</h2>
      <div className="card1-grid">
        {structureCards.map((c, i) => (
          <div
            key={i}
            className="lesson1-card"
            onClick={() => setActiveLesson(c.lesson)}
          >
            <img src={c.img} alt={c.title} className="card1-image" />
            <div className="card1-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Practice Section */}
      <h2 className="section-title">GroovepadTutorial</h2>
      <div className="card1-grid">
        {practiceCards.map((c, i) => (
          <div
            key={i}
            className="lesson1-card"
            onClick={() => setActiveLesson(c.lesson)}
          >
            <img src={c.img} alt={c.title} className="card1-image" />
            <div className="card1-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
