import React, { useRef } from "react";
import "./Accidentals.css";
import Tooltip from "../component/Tooltip";   // ✅ Required
// import EnharmonicPiano from "../component/EnharmonicPiano";

import acci1 from "../images/acci1.jpg";
import acci2 from "../images/acci2.jpg";
import acci3 from "../images/acci3.jpg";
import acci4 from "../images/acci4.jpg";
import acci5 from "../images/acci5.jpg";
import acci6 from "../images/acci6.jpg";
import acci7 from "../images/acci7.jpg";
import acci8 from "../images/acci8.jpg";
import acci9 from "../images/acci9.jpg";
import acci10 from "../images/acci10.jpg";

export default function Accidentals() {   // ✅ FIXED

  // 🔥 Create section references
  const introRef = useRef(null);
  const accidentalTypesRef = useRef(null);
  const accidentalNotesRef = useRef(null);
  const enharmonicRef = useRef(null);
  const notationRef = useRef(null);
  const keySigRef = useRef(null);
  const courtesyRef = useRef(null);

  // 🎵 Play note (for piano)
  const playNote = (note) => {
    const audio = new Audio(`/Piano/${note}.mp3`);
    audio.currentTime = 0;
    audio.play().catch((err) => console.log("Audio error:", err));
  };

  // 🔥 Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="accidentals-page">

      {/* MAIN TITLE */}
      <h1 className="accidentals-title">Accidentals</h1>

      {/* INTRODUCTION CARD */}
      <div className="accidentals-card" ref={introRef}>
        <h1>Introduction</h1>

        <p>
          An accidental is a symbol in music notation that raises or lowers a natural note
          by one or two half steps. Accidentals are written in front of notes but appear
          after note names when written in text.
        </p>

        {/* CONTENT BOX */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(accidentalTypesRef)}>The five accidentals</li>
            <li onClick={() => scrollToSection(accidentalNotesRef)}>Accidental notes</li>
            <li onClick={() => scrollToSection(enharmonicRef)}>Enharmonic notes</li>
            <li onClick={() => scrollToSection(notationRef)}>Notation of accidentals</li>
            <li onClick={() => scrollToSection(keySigRef)}>Key signature accidentals</li>
            <li onClick={() => scrollToSection(courtesyRef)}>Courtesy accidentals</li>
          </ol>
        </div>
      </div>

      {/* SECTION 1 — The Five Accidentals */}
      <div className="accidentals-card" ref={accidentalTypesRef}>
        <h2>1. The five accidentals</h2>

        <p>
          The five main accidentals are sharp, flat, natural, double sharp, and double flat.
          They modify the pitch of natural notes.
        </p>

        <div className="accidental-list">

          {/* Sharp */}
          <div className="accidental-row">
            <span className="accidental-symbol">♯</span>
            <p>
              <strong>Sharp</strong> raises a note by a half step.
            </p>
          </div>

          {/* Flat */}
          <div className="accidental-row">
            <span className="accidental-symbol">♭</span>
            <p>
              <strong>Flat</strong> lowers a note by a half step.
            </p>
          </div>

          {/* Double Sharp */}
          <div className="accidental-row">
            <span className="accidental-symbol">𝄪</span>
            <p>
              <strong>Double-sharp</strong> raises a note by two half steps.
            </p>
          </div>

          {/* Double Flat */}
          <div className="accidental-row">
            <span className="accidental-symbol double-flat">𝄫</span>
            <p>
              <strong>Double-flat</strong> lowers a note by two half steps.
            </p>
          </div>

          {/* Natural */}
          <div className="accidental-row">
            <span className="accidental-symbol">♮</span>
            <p>
              <strong>Natural</strong> cancels a previous accidental.
            </p>
          </div>

        </div>
      </div>

      {/* SECTION 2 — Accidental Notes */}
      <div className="accidentals-card" ref={accidentalNotesRef}>
        <h2>2. Accidental notes</h2>

        <p>
          A note with a sharp (♯) is played a half step above the original note.
          Sharp notes: C♯, D♯, E♯, F♯, G♯, A♯, B♯
        </p>
        <img src={acci1} className="accidentals-img" alt="accidentals..." />
        <p>A note with a flat (♭) is played a half step below the original note. The seven flat notes are C♭ (pronounced "C-flat"), D♭, E♭, F♭, G♭, A♭, and B♭:</p>
        <img src={acci2} className="accidentals-img" alt="accidentals..." />
        <p>A note with a double-sharp () is played two half steps above the original note. The seven double-sharp notes are C ("C-double-sharp"), D, E, F, G, A, and B:</p>
        <img src={acci3} className="accidentals-img" alt="accidentals..." />
        <p>A note with a double-flat (♭♭) is played two half steps below the original note. The seven double-flat notes are C♭♭ ("C-double-flat"), D♭♭, E♭♭, F♭♭, G♭♭, A♭♭, and B♭♭:</p>
        <img src={acci4} className="accidentals-img" alt="accidentals..." />
      </div>



      {/* SECTION 3 — Enharmonic Notes */}
      <div className="accidentals-card" ref={enharmonicRef}>
        <h2>3. Enharmonic notes</h2>

        <p>
          The black keys on the piano have several names. For example, the black key between
          C and D can be called C♯ or D♭. Click the piano below to hear the enharmonic notes:
        </p>

     

        <p>Notes with an identical pitch (i.e., notes that fall on the same key on the piano) that have different names and notation are called enharmonic notes. For example, the note C♯ is enharmonic with D♭, and the note D♯ is enharmonic with E♭.<br></br>

The white keys on the piano have several names too. For example, the key for the note C is also called B♯. On the piano below, you will find the most common names for the white keys.</p>

      </div>

      {/* SECTION 4 — Notation */}
      <div className="accidentals-card" ref={notationRef}>
        <h2>4. Notation of accidentals</h2>
        <p>
          Accidentals are written in front of the notes. An accidental applies:</p>
        <ul className="accidental-rules">

          <li> to the note immediately following the accidental</li>
          <li>to subsequent notes on the same line or in the same space </li>
          <li> until a barline or a new accidental for the same note.</li>
        </ul>
        <p>In the example below, the sharp in the first bar is canceled by the flat for the following note. The flat is canceled by the barline. The sharp in the second bar does not apply to the note at the top of the staff and is canceled by the natural for the last note:</p>
        <img src={acci5} className="accidentals-img" alt="accidentals..." />
        <p>An accidental for a note with a tie applies until the end of the tie if the tie passes a barline. In other words, the accidental applies to both of the tied notes, but not to subsequent notes in the new bar:</p>
        <img src={acci6} className="accidentals-img2" alt="accidentals..." />
      </div>

      {/* SECTION 5 — Key Signature */}
      <div className="accidentals-card" ref={keySigRef}>
        <h2>5. Key signature accidentals</h2>

        <p>
          If a note requires an accidental throughout a piece, the accidental is written in a
          <strong> key signature </strong> rather than every time the note occurs.
          A key signature is a group of sharps or flats at the beginning of the staff
          immediately after the{" "}

          {/* 🔥 Tooltip inserted here */}
         <Tooltip word="clef">
  <strong>Clef</strong>
  <br /><br />
  A symbol at the beginning of the staff that denotes the pitch of the notes in the staff.
  <br /><br />
  
</Tooltip>

        </p>
        <img src={acci7} className="accidentals-img" alt="accidentals..." />
        <p>An accidental in a key signature applies:
          <ul className="accidental-rules">
            <li>to all notes with the same note name regardless of their location</li>
            <li> until the end of the piece of music or a new key signature.</li>
          </ul>
          In the example below, the two sharps in the key signature apply to all versions of the notes F and C. In the first bar, the sharp for F is canceled temporarily by a natural and in the second bar the sharp for C is canceled temporarily by a flat:</p>
        <img src={acci8} className="accidentals-img" alt="accidentals..." />
        <p>A key signature may be replaced with another key signature during a piece of music. In the first example below, the three sharps are removed by three naturals, and in the second example the four flats are replaced by two sharps:</p>
        <img src={acci9} className="accidentals-img" alt="accidentals..." />
        <p>Accidentals in a key signature are always written in a specific pattern. For more information, read the text about keys.</p>
      </div>

      {/* SECTION 6 — Courtesy Accidentals */}
      <div className="accidentals-card" ref={courtesyRef}>
        <h2>6. Courtesy accidentals</h2>
        <p>
          Courtesy accidentals are accidentals that are not strictly necessary, but are written to clarify the correct pitch, thus avoiding misunderstandings. Courtesy accidentals are written as normal accidentals, sometimes enclosed by brackets.
        </p>
        <p>Courtesy accidentals are primarily used in two cases:
          <ul className="accidental-rules">

            <li> When a note with an accidental is repeated in the following bar. The courtesy accidental signifies that the accidental does not apply in the following bar.</li>
            <li>When a tie extends an accidental to a new bar where the note is repeated. The courtesy accidental signifies that the accidental does not apply after the tie.</li>
          </ul></p>
          <p>In the example below, the first courtesy accidental (♯) signifies that the natural does not apply in the subsequent bar, while the other courtesy accidental (♮) signifies that the flat does not apply after the end of the tie:</p>
<img src={acci10} className="accidentals-img" alt="accidentals..." />
      </div>

   </div>
  );
}


