import React, { useRef } from "react";
import "./Clefs.css";
import clef1 from "../images/clef1.jpg";
import clef2 from "../images/clef2.jpg";
import clef3 from "../images/clef3.jpg";
import clef4 from "../images/clef4.jpg";
import clef5 from "../images/clef5.jpg";
import clef6 from "../images/clef6.jpg";
import clef7 from "../images/clef7.jpg";
import clef8 from "../images/clef8.jpg";
import clef9 from "../images/clef9.jpg";
import clef10 from "../images/clef10.jpg";
import clef11 from "../images/clef11.jpg";
import clef12 from "../images/clef12.jpg";
import clef13 from "../images/clef13.jpg";
import clef14 from "../images/clef14.jpg";
import clef15 from "../images/clef15.jpg";
import clef16 from "../images/clef16.jpg";
import clef17 from "../images/clef17.jpg";

export default function Clefs() {
  const trebleRef = useRef(null);
  const bassRef = useRef(null);
  const altoRef = useRef(null);
  const grandRef = useRef(null);
  const tenorRef = useRef(null);
  const octaveRef = useRef(null);
  const clefChangeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="clefs-page">

      <h1 className="clefs-title">Clefs</h1>

      {/* INTRODUCTION */}
      <div className="clefs-card">
        <h2>Introduction</h2>
        <p>
          A clef is a symbol written at the beginning of a musical staff. It tells
          us how high or low the notes on the staff should sound. Without a clef,
          the notes on the staff would have no fixed pitch.
        </p>

        <p>
          Different clefs are used because instruments and voices have different
          pitch ranges. Using the correct clef helps keep notes readable and
          reduces the need for too many ledger lines.
        </p>

        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(trebleRef)}>Treble Clef</li>
            <li onClick={() => scrollToSection(bassRef)}>Bass Clef</li>
            <li onClick={() => scrollToSection(grandRef)}>Grand Staff</li>
            <li onClick={() => scrollToSection(altoRef)}>Alto Clef</li>
            <li onClick={() => scrollToSection(tenorRef)}>Tenor Clef</li>
            <li onClick={() => scrollToSection(octaveRef)}>Octave Clefs</li>
            <li onClick={() => scrollToSection(clefChangeRef)}>Clef Change</li>
          </ol>
        </div>
      </div>

      {/* TREBLE CLEF */}
      <div className="clefs-card" ref={trebleRef}>
        <h2>1. Treble Clef</h2>

        <p>
          The treble clef is also known as the <strong>G clef</strong>. It shows
          that the note G above Middle C is placed on the second line of the staff.
          The spiral of the clef curls around this line to highlight G.
        </p>

        <img src={clef1} className="clefs-img" alt="Treble clef" />

        <p>
          The treble clef is mainly used for higher-pitched notes. Learning the
          position of Middle C and G in the treble clef makes reading other notes
          much easier.
        </p>

        <img src={clef2} className="clefs-img" alt="Treble clef notes" />

        <p>
          Instruments that commonly use the treble clef include violin, flute,
          clarinet, saxophone, trumpet, and guitar. Most vocal melodies are also
          written in the treble clef.
        </p>
      </div>

      {/* BASS CLEF */}
      <div className="clefs-card" ref={bassRef}>
        <h2>2. Bass Clef</h2>

        <p>
          The bass clef is also known as the <strong>F clef</strong>. It shows that
          the note F below Middle C is placed on the fourth line of the staff. The
          two dots of the clef surround this F line.
        </p>

        <img src={clef3} className="clefs-img" alt="Bass clef" />

        <p>
          The bass clef is used for lower-pitched notes. Remembering the position
          of F and Middle C helps in reading bass clef notes accurately.
        </p>

        <img src={clef4} className="clefs-img" alt="Bass clef notes" />

        <p>
          Instruments that use the bass clef include bass guitar, cello, double
          bass, bassoon, trombone, and tuba.
        </p>
      </div>

      {/* GRAND STAFF */}
      <div className="clefs-card" ref={grandRef}>
        <h2>3. Grand Staff</h2>

        <p>
          The grand staff combines the treble clef and the bass clef. The treble
          clef appears on the upper staff and the bass clef on the lower staff.
          Both staves are connected by a brace.
        </p>

        <img src={clef5} className="clefs-img" alt="Grand staff" />

        <p>
          Middle C sits between the two staves and is written on a ledger line.
          This creates a clear connection between high and low notes.
        </p>

        <img src={clef6} className="clefs-img2" alt="Middle C on grand staff" />

        <p>
          The grand staff is mainly used for keyboard instruments such as piano
          and organ. Typically, the right hand plays the treble staff and the
          left hand plays the bass staff.
        </p>

        <img src={clef7} className="clefs-img" alt="Grand staff piano notes" />
      </div>

      {/* ALTO CLEF */}
      <div className="clefs-card" ref={altoRef}>
        <h2>4. Alto Clef</h2>

        <p>
          The alto clef is a type of <strong>C clef</strong>. It shows that Middle
          C is placed on the third line of the staff. The center of the clef marks
          the position of Middle C.
        </p>

        <img src={clef8} className="clefs-img2" alt="Alto clef" />

        <p>
          The alto clef is mainly used for the viola. It keeps notes within the
          staff and avoids excessive ledger lines.
        </p>

        <img src={clef9} className="clefs-img" alt="Alto clef notes" />
      </div>

      {/* TENOR CLEF */}
      <div className="clefs-card" ref={tenorRef}>
        <h2>5. Tenor Clef</h2>

        <p>
          The tenor clef is another C clef. In this clef, Middle C is placed on
          the fourth line of the staff.
        </p>

        <img src={clef10} className="clefs-img2" alt="Tenor clef" />

        <p>
          The tenor clef is used when notes are higher than what fits comfortably
          in the bass clef. It helps reduce ledger lines.
        </p>

        <img src={clef11} className="clefs-img" alt="Tenor clef notes" />

        <p>
          Instruments that use the tenor clef include cello, bassoon, and
          trombone.
        </p>
      </div>

      {/* OCTAVE CLEFS */}
      <div className="clefs-card" ref={octaveRef}>
        <h2>6. Octave Clefs</h2>

        <p>
          Octave clefs modify the treble or bass clef by indicating that notes
          should sound higher or lower than written. The number 8 shows an octave
          change.
        </p>

        <img src={clef12} className="clefs-img" alt="Octave clefs" />

        <p>
          These clefs are used to avoid many ledger lines and keep music easier
          to read, especially for very high or very low passages.
        </p>

        <div className="octave-row">
          <img src={clef13} className="octave-img" alt="15ma alta" />
          <div>
            <h3>Quindicesima alta</h3>
            <p>Notes sound two octaves higher than written.</p>
          </div>
        </div>

        <div className="octave-row">
          <img src={clef14} className="octave-img" alt="8va alta" />
          <div>
            <h3>Ottava alta</h3>
            <p>Notes sound one octave higher than written.</p>
          </div>
        </div>

        <div className="octave-row">
          <img src={clef15} className="octave-img" alt="8vb bassa" />
          <div>
            <h3>Ottava bassa</h3>
            <p>Notes sound one octave lower than written.</p>
          </div>
        </div>

        <div className="octave-row">
          <img src={clef16} className="octave-img" alt="15mb bassa" />
          <div>
            <h3>Quindicesima bassa</h3>
            <p>Notes sound two octaves lower than written.</p>
          </div>
        </div>
      </div>

      {/* CLEF CHANGE */}
      <div className="clefs-card" ref={clefChangeRef}>
        <h2>7. Clef Change</h2>

        <p>
          A clef usually remains the same throughout a piece of music. However,
          when notes move far outside the staff, a clef change may be used to
          improve readability.
        </p>

        <img src={clef17} className="clefs-img" alt="Clef change" />

        <p>
          When a clef change occurs at the beginning of a new line, the new clef
          is written at the end of the previous line as a reminder. Clefs written
          in the middle of a staff appear smaller than normal clefs.
        </p>
      </div>
    </div>
  );
}
