import React, { useRef } from "react";
import "./Staff.css";

import staf from "../images/stf1.png";
import staf2 from "../images/stf2.jpg";
import staf3 from "../images/stf3.png";
import staf4 from "../images/stf4.png";
import staf5 from "../images/stf5.png";

export default function Staff() {
  const posRef = useRef(null);
  const ledgerRef = useRef(null);
  const linesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="staff-page">

      {/* MAIN TITLE */}
      <h1 className="staff-title">The Staff</h1>

      {/* INTRODUCTION */}
      <div className="staff-card">
        <h1>Introduction</h1>

        <p>
          The <strong>staff</strong> (also called the <strong>stave</strong>) is
          the foundation of written music. It is made up of five horizontal
          lines and four spaces, and it is used to show the pitch of musical
          notes.
        </p>

        <p>
          Notes are written on the lines or in the spaces of the staff. Their
          vertical position tells us how high or low the note sounds. The plural
          form of staff or stave is <strong>staves</strong>.
        </p>

        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(posRef)}>Staff positions</li>
            <li onClick={() => scrollToSection(ledgerRef)}>Ledger lines</li>
            <li onClick={() => scrollToSection(linesRef)}>Lines and spaces</li>
          </ol>
        </div>
      </div>

      {/* 1️⃣ STAFF POSITIONS */}
      <div className="staff-card" ref={posRef}>
        <h2>1. Staff Positions</h2>

        <p>
          A standard staff consists of <strong>five horizontal lines</strong> and
          <strong> four spaces</strong>. Notes can be placed on any line or in
          any space.
        </p>

        <img src={staf} className="staff-img" alt="Staff structure" />

        <p>
          When a note is written on a line, the line passes through the center of
          the note head. When a note is written in a space, the note head fills
          the space completely.
        </p>

        <img src={staf2} className="staff-img" alt="Notes on lines and spaces" />

        <p>
          Each step upward on the staff (from line to space, or space to line)
          represents the next note in musical order. Notes written higher on the
          staff sound higher in pitch, while notes written lower sound lower.
        </p>

        <img src={staf3} className="staff-img" alt="Multiple notes on staff" />

        <p>
          Notes are read from left to right. When multiple notes are written
          vertically above one another, they are played at the same time,
          forming a chord.
        </p>
      </div>

      {/* 2️⃣ LEDGER LINES */}
      <div className="staff-card" ref={ledgerRef}>
        <h2>2. Ledger Lines</h2>

        <p>
          When notes go beyond the range of the five-line staff, <strong>ledger
          lines</strong> are used. Ledger lines are short horizontal lines that
          extend the staff upward or downward.
        </p>

        <img src={staf4} className="staff-img" alt="Ledger lines" />

        <p>
          Ledger lines allow music to include very high or very low notes
          without changing the clef. You can use as many ledger lines as needed.
        </p>

        <p>
          Notes that are very close to the staff may not require ledger lines,
          but as the distance increases, additional ledger lines are added to
          maintain clarity.
        </p>
      </div>

      {/* 3️⃣ LINES & SPACES */}
      <div className="staff-card" ref={linesRef}>
        <h2>3. Lines and Spaces</h2>

        <p>
          The lines and spaces of the staff are always counted from
          <strong> bottom to top</strong>. The bottom line is the first line, and
          the top line is the fifth line.
        </p>

        <img src={staf5} className="staff-img2" alt="Lines and spaces numbering" />

        <p>
          Each line and space represents a specific note, depending on the clef
          used. Learning to recognize line and space positions is essential for
          reading music quickly and accurately.
        </p>
      </div>

    </div>
  );
}
