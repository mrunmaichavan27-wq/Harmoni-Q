import React, { useRef, useState } from "react";
import "./Notes.css";
import Piano from "../component/Piano";
import pino2 from "../images/pino2.png";
import pino3 from "../images/pino3.png";
import pinaolast from "../images/pinaolast.jpg";

export default function Notes() {
  const [playing, setPlaying] = useState(null);

  // AUDIO FOR PIANO KEYS
  const playNote = (note) => {
    const audio = new Audio(`/Piano/${note}.mp3`);
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  // SCROLL REFS
  const naturalRef = useRef(null);
  const middleRef = useRef(null);
  const octaveRef = useRef(null);
  const stepsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="notes-page">

      {/* MAIN TITLE */}
      <h1 className="notes-title">Notes</h1>

      {/* INTRODUCTION */}
      <div className="notes-card">
        <h1>Introduction</h1>

        <p>
          In Western music, there are <strong>twelve different notes</strong>.
          These notes are the foundation of all music you hear — melodies,
          chords, scales, and songs are all created using these twelve notes.
        </p>

        <p>
          On the piano, these notes are visually divided into
          <strong> white keys and black keys</strong>. The white keys represent
          the natural notes, while the black keys represent the remaining notes
          that lie between them.
        </p>

        <p>
          Understanding how these notes are arranged on the piano makes learning
          music much easier, even if you do not own a physical instrument.
        </p>

        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(naturalRef)}>Natural notes</li>
            <li onClick={() => scrollToSection(middleRef)}>Middle C</li>
            <li onClick={() => scrollToSection(octaveRef)}>Octaves</li>
            <li onClick={() => scrollToSection(stepsRef)}>
              Half steps & Whole steps
            </li>
          </ol>
        </div>
      </div>

      {/* 1️⃣ NATURAL NOTES */}
      <div className="notes-card" ref={naturalRef}>
        <h2>1. Natural Notes</h2>

        <p>
          Natural notes are named using the first seven letters of the alphabet:
          <strong> A, B, C, D, E, F, and G</strong>. After G, the sequence repeats
          again starting from A.
        </p>

        <p>
          On the piano, natural notes are represented by the white keys. These
          notes repeat across the keyboard in the same order, moving from low
          pitch on the left to high pitch on the right.
        </p>

        <p>
          The black keys do not have unique letter names on their own. Instead,
          they are placed between certain white keys and are grouped in a
          repeating pattern of <strong>two black keys</strong> followed by
          <strong> three black keys</strong>. This pattern helps you quickly
          identify notes on the keyboard.
        </p>

        {/* <p>Click the keys below to hear the sound of each note.</p> */}

        <Piano playNote={playNote} />
      </div>

      {/* 2️⃣ MIDDLE C */}
      <div className="notes-card" ref={middleRef}>
        <h2>2. Middle C</h2>

        <p>
          Middle C is a very important reference note in music. It is located
          near the center of the piano and helps musicians understand pitch and
          note placement.
        </p>

        <p>
          In written music, Middle C sits between the treble clef and bass clef,
          making it a connection point between higher and lower notes.
        </p>

        <p>
          Most beginners start learning music from Middle C because it provides
          a clear starting position on both the piano and the musical staff.
        </p>

        <img src={pino2} className="notes-img" alt="Middle C on piano" />
        <p className="caption">Middle C</p>
      </div>

      {/* 3️⃣ OCTAVES */}
      <div className="notes-card" ref={octaveRef}>
        <h2>3. Octaves</h2>

        <p>
          An <strong>octave</strong> is the distance between one note and the next
          note with the same name. For example, moving from one C to the next C
          higher or lower is one octave.
        </p>

        <p>
          Each octave contains all twelve notes arranged in the same order.
          Although the notes have the same names, they sound higher or lower
          depending on their position on the keyboard.
        </p>

        <p>
          On the piano, moving to the right increases pitch, while moving to the
          left decreases pitch. This allows music to cover a wide range of
          sounds, from very low to very high.
        </p>

        <p>
          Notes are labeled with octave numbers, such as C3, C4, or C5.
          <strong> Middle C is usually labeled as C4</strong>. Octave numbering
          helps musicians clearly identify pitch.
        </p>

        <img src={pino3} className="notes-img" alt="Octaves on piano" />
      </div>

      {/* 4️⃣ HALF & WHOLE STEPS */}
      <div className="notes-card" ref={stepsRef}>
        <h2>4. Half Steps & Whole Steps</h2>

        <p>
          The distance between two notes is measured using steps.
          A <strong>half step</strong> is the smallest distance between any two
          neighboring keys on the piano.
        </p>

        <p>
          A half step can be from a white key to a black key, or from a white key
          directly to another white key when no black key exists between them
          (such as E to F or B to C).
        </p>

        <img src={pinaolast} className="notes-img" alt="Half and whole steps" />

        <p>
          A <strong>whole step</strong> consists of two half steps.
          Understanding half steps and whole steps is essential for learning
          scales, chords, and melodies correctly.
        </p>
      </div>
    </div>
  );
}
