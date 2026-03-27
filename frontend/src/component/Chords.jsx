import React, { useRef } from "react";
import "./Chords.css";
import Tooltip from "../component/Tooltip";
import cho1 from "../images/cho1.jpg";
import cho2 from "../images/cho2.jpg";
import cho3 from "../images/cho3.jpg";
import cho4 from "../images/cho4.jpg";
import cho5 from "../images/cho5.jpg";
import cho6 from "../images/cho6.jpg";
import cho7 from "../images/cho7.jpg";
import cho8 from "../images/cho8.jpg";
import cho9 from "../images/cho9.jpg";
import cho10 from "../images/cho10.jpg";
import cho11 from "../images/cho11.jpg";
import cho12 from "../images/cho12.jpg";
import cho13 from "../images/cho13.jpg";
import cho14 from "../images/cho14.jpg";
import cho15 from "../images/cho15.jpg";
import cho16 from "../images/cho16.jpg";
import cho17 from "../images/cho17.jpg";
import cho18 from "../images/cho18.jpg";
import cho19 from "../images/cho19.jpg";
import cho20 from "../images/cho20.jpg";
import cho21 from "../images/cho21.jpg";
import cho22 from "../images/cho22.jpg";
import cho23 from "../images/cho23.jpg";
import cho24 from "../images/cho24.jpg";
import cho25 from "../images/cho25.jpg";
import cho26 from "../images/cho26.jpg";
import cho27 from "../images/cho27.jpg";
import cho28 from "../images/cho28.jpg";
import cho29 from "../images/cho29.jpg";

import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";
import c8 from "../images/c8.jpg";
import c9 from "../images/c9.jpg";
import c10 from "../images/c10.jpg";
import c11 from "../images/c11.jpg";
import c12 from "../images/c12.jpg";
import c13 from "../images/c13.jpg";

export default function Chords() {
  // 🔗 Section refs
  const charRef = useRef(null);
  const triadRef = useRef(null);
  const seventhRef = useRef(null);
  const sixthRef = useRef(null);
  const susRef = useRef(null);
  const extendedRef = useRef(null);
  const alteredRef = useRef(null);
  const otherRef = useRef(null);
  const inversionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="chord-page">

      {/* MAIN TITLE */}
      <h1 className="chord-title">Chords</h1>

      {/* INTRODUCTION */}
      <div className="chord-card">
        <h1>Introduction</h1>
        <p>
          A chord is a combination of three or more different notes. Most music consists of chords, often with a corresponding melody. Chords can be played on instruments that can produce multiple notes simultaneously, such as the piano, guitar, and ukulele. Many other instruments can produce only one note at a time.
        </p>

        {/* CONTENTS */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(charRef)}>Characteristics</li>
            <li onClick={() => scrollToSection(triadRef)}>Triads</li>
            <li onClick={() => scrollToSection(seventhRef)}>Seventh chords</li>
            <li onClick={() => scrollToSection(sixthRef)}>Sixth chords</li>
            <li onClick={() => scrollToSection(susRef)}>Suspended chords</li>
            <li onClick={() => scrollToSection(extendedRef)}>Extended chords</li>
            <li onClick={() => scrollToSection(alteredRef)}>Altered chords</li>
            <li onClick={() => scrollToSection(otherRef)}>Other chords</li>
            <li onClick={() => scrollToSection(inversionRef)}>Chord inversions</li>
          </ol>
        </div>
      </div>

      {/* SECTIONS */}
      {/* 1st */}
      <div className="chord-card" ref={charRef}>
        <h2>1. Characteristics</h2>
        <p>
          Chords can be categorized according to different criteria:

          <h3><strong>Number of chord notes</strong></h3>
          <p>A chord consists of three or more different notes. Chords can be named according to the number of different notes in the chord by using the terms triad (3), tetrad (4), pentad (5), hexad (6), and heptad (7):</p>
        </p>
        <img src={cho1} className="chord-img" alt="chords img ..." />
        <p>Triad is the only term used regularly. Chords consisting of four or more notes are usually referred to as four-note chords, five-note chords, six-note chords, and seven-note chords instead.<br></br>

          It is common to double some chord notes. For example, on a guitar you often play all six strings, even if a chord consists of three notes. It does not alter the number of notes in a chord when some notes are doubled.</p>
        <h3><strong>Harmonic and broken chords</strong></h3>
        <p>Chords can be harmonic or broken. In a harmonic chord, the notes are played simultaneously, whereas in a broken chord, the notes are played one after another:<br></br>
          <img src={cho2} className="chord-img" alt="chords img ..." /><br></br>
          A broken chord is also called an arpeggio. In general, the notes are played from the bottom up, but the notes can be played in any order. Even though the notes are played individually, they are experienced as a coherent chord.
        </p>

        <h3><strong>Close and open position chords</strong></h3>
        <p>Chords can be in close position or open position. In close position, the notes are placed as close as possible to each other. In open position, the notes are separated, leaving room for one or more chord notes between them:<br></br>
          <img src={cho3} className="chord-img" alt="chords img ..." /><br></br>
          All the above chords are the same chord comprising the notes C, E, and G. The last two chords are in open position as there is room for the notes E and C between the notes in the second last chord, and G and E between the notes in the last chord.<br></br>

          The note from which a chord is built and named is called the root note. If the root note is the lowest note, the chord is in the root position. If a chord note, other than the root note, is the lowest note, then the chord is in inversion. In the above example, chords number 2 and 4 are in inversion.
        </p>



        {/* 2nd */}
      </div>
      {/* 2st */}
      <div className="chord-card" ref={triadRef}>
        <h2>2. Triads</h2>
        <p>
          A triad is a chord comprising three different notes. Triads are the most common types of chords, and a lot of music uses triads only. There are four basic types of triads: major, minor, diminished, and augmented.
        </p>

        <h3><strong>Major triad</strong></h3>
        <p>

          A major triad (also called a major chord) consists of a { }<Tooltip word="root note"> The note from which a chord is built and named.
            <br /><br />
          </Tooltip>, a { }<Tooltip word="major third"> Interval of four half steps spanning three degrees.
            <br /><br />
          </Tooltip>, and a perfect fifth. The distance between the notes is a major third and a { }<Tooltip word="minor third"> Interval of three half steps spanning three degrees
            <br /><br /></Tooltip>. Below is a C major triad:
          <img src={cho4} className="chord-img" alt="chords img ..." />
          <p>A major triad usually has a happy and consonant sound. It is common in classical and popular music in most parts of the world.

            The chord symbol for a major triad is the root note with a capital letter, if necessary followed by an accidental. Some examples of major triads are D, B♭, and F♯.</p>

          <h3><strong>Minor triad</strong></h3>
          <p>A minor triad (also called a minor chord) consists of a { }<Tooltip word="root note"> The note from which a chord is built and named.
            <br /><br />
          </Tooltip>, a { }<Tooltip word="major third"> Interval of four half steps spanning three degrees.
              <br /><br />
            </Tooltip>, and a perfect fifth. The distance between the notes is a minor third and a { }<Tooltip word="minor third"> Interval of three half steps spanning three degrees
              <br /><br /></Tooltip>. Below is a C major triad:</p>
          <img src={cho5} className="chord-img" alt="chords img ..." />
        </p>
        <p>A minor triad usually has a sad and consonant sound. It is common in classical and popular music in most parts of the world.

          The chord symbol for a minor triad is the root note followed by the letter 'm', or in jazz, sometimes a hyphen. Some examples of minor triads are Cm, A♭–, and F♯m.</p>

        <h3><strong>Diminished triad</strong></h3>
        <p>A diminished triad (also called a diminished chord) consists of a root note, a minor third, and a { }<Tooltip word="diminished fifth"> Interval of six half steps spanning five degrees
          <br /><br /></Tooltip>. The distance between the notes is two minor thirds. The chord corresponds to a minor triad with a lowered fifth. Below is a C diminished triad:</p>
        <img src={cho6} className="chord-img" alt="chords img ..." />
        <p>A diminished triad usually has a tense and dissonant sound. It is relatively common in classical music and popular music in most parts of the world.

          The chord symbol for a diminished triad is the root note followed by a small circle or the text 'dim'. Some examples of diminished triads are Bo, E♭dim, and C♯o.</p>
        <h3><strong>Augmented triad</strong></h3>
        <p>An augmented triad (also called an augmented chord) consists of a root note, a major third, and an { }<Tooltip word="augmented fifth"> Interval of eight half steps spanning five degrees.
          <br /><br /></Tooltip>. The distance between the notes is two major thirds. The chord corresponds to a major triad with a { }<Tooltip word="raised fifth"> A half step higher.
            <br /><br /></Tooltip>. Below is a C augmented triad:</p>
        <img src={cho7} className="chord-img" alt="chords img ..." />
        <p>An augmented triad usually has an open and dissonant sound. It is primarily used in jazz and, occasionally, in classical and popular music.

          The chord symbol for an augmented triad is the root note followed by a small plus sign or the text 'aug'. Some examples of augmented triads are C+, D♭aug, and C♯+</p>
        <h3><strong>Final remarks</strong></h3>
        <p>All four types of triads comprise two-thirds. For example, a minor triad consists of a minor third and a major third. A minor third is the distance of three half steps, and a major third is the distance of four half steps, where the first note is not included in the count.

          To find the notes in a minor triad, you need to count three half steps upwards from the root note and four half steps upwards from the next note. The number of half steps is the same regardless of the root note. Below is a minor triad with F as a root note:
          <img src={cho8} className="chord-img" alt="chords img ..." />
          If a chord is in the inversion or open position, the notes must be moved so they are a third apart, before the chord can be identified. Below is a C major triad in inversion and open position, which is moved so the notes are a third apart:
          <img src={cho9} className="chord-img2" alt="chords img ..." />
        </p>
        <p>
          Use the chart below to remember the four triads. The column
          <strong> Half steps</strong> shows the distance measured in half
          steps between the notes in the chord.
        </p>

        <div className="triad-table-wrapper">
          <table className="triad-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Composition</th>
                <th>Half steps</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Major</td>
                <td>C</td>
                <td>Root note, major third, perfect fifth</td>
                <td>4 + 3</td>
                <td><img src={c1} alt="chords img ..." /></td>
              </tr>

              <tr>
                <td>Minor</td>
                <td>Cm</td>
                <td>Root note, minor third, perfect fifth</td>
                <td>3 + 4</td>
                <td><img src={c2} alt="chords img ..." /></td>
              </tr>

              <tr>
                <td>Diminished</td>
                <td>C°</td>
                <td>Root note, minor third, diminished fifth</td>
                <td>3 + 3</td>
                <td><img src={c3} alt="chords img ..." /></td>
              </tr>

              <tr>
                <td>Augmented</td>
                <td>C+</td>
                <td>Root note, major third, augmented fifth</td>
                <td>4 + 4</td>
                <td><img src={c13} alt="chords img ..." /></td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

      {/* 3rd */}

      <div className="chord-card" ref={seventhRef}>
        <h2>3. Seventh chords</h2>

        <p>
          A seventh chord is a triad with an added seventh. Seventh chords are common
          in both classical and popular music. There are five common types of seventh
          chords: dominant seventh, major seventh, minor seventh, half-diminished
          seventh, and diminished seventh.
        </p>

        {/* Dominant Seventh */}
        <h3><strong>Dominant seventh chord</strong></h3>
        <p>
          A dominant seventh chord is a major triad with a minor seventh. The chord
          consists of a root note, a major third, a perfect fifth, and a minor seventh chords:
          <img src={cho10} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          A dominant seventh chord usually has a tense and progressive sound. It is
          common in classical and popular music.
        </p>
        <p>
          The chord symbol for a dominant seventh chord is the root note followed by
          the number seven. Examples include E7, A♭7, and F♯7.
        </p>

        {/* Major Seventh */}
        <h3><strong>Major seventh chord</strong></h3>
        <p>
          A major seventh chord is a major triad with a major seventh. The chord
          consists of a root note, a major third, a perfect fifth, and a major seventh chords:
          <img src={cho11} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          A major seventh chord usually has a soft, fluid, and directionless sound. It
          is common in classical and popular music.
        </p>
        <p>
          The chord symbol is written as maj7, Δ, or Δ7. Examples include Cmaj7, B♭Δ,
          and C♯Δ7.
        </p>

        {/* Minor Seventh */}
        <h3><strong>Minor seventh chord</strong></h3>
        <p>
          A minor seventh chord is a minor triad with a minor seventh. The chord
          consists of a root note, a minor third, a perfect fifth, and a minor seventh chords:
          <img src={cho12} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          A minor seventh chord usually has a soft and sad sound. It is common in
          classical and popular music.
        </p>
        <p>
          The chord symbol is written as m7 or sometimes –7. Examples include Dm7,
          A♭–7, and F♯m7.
        </p>

        {/* Half-Diminished Seventh */}
        <h3><strong>Half-diminished seventh chord</strong></h3>
        <p>
          A half-diminished seventh chord is a diminished triad with a minor seventh.
          The chord consists of a root note, a minor third, a diminished fifth, and a
          minor seventh chord:
          <img src={cho13} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          This chord usually has a tense and dissonant sound and is primarily used in
          jazz.
        </p>
        <p>
          The chord symbol is written as m7(♭5), ø, or ø7. Examples include Cm7(♭5),
          E♭ø, and C♯ø7.
        </p>

        {/* Diminished Seventh */}
        <h3><strong>Diminished seventh chord</strong></h3>
        <p>
          A diminished seventh chord is a diminished triad with a diminished seventh.
          The chord consists of a root note, a minor third, a diminished fifth, and a
          diminished seventh chords:
          <img src={cho14} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          This chord has a tense, dissonant, and dense sound and is common in
          classical, popular, and jazz music.
        </p>
        <p>
          The chord symbol is written as dim7 or o7. Examples include Cdim7, D♭o7, and
          C♯dim7.
        </p>

        <p>
          A diminished seventh chord is enharmonic to several other diminished seventh
          chords, meaning the same notes can form different chords depending on the
          bass note.
        </p>

        {/* Final Remarks */}
        <h3><strong>Final remarks</strong></h3>
        <p>
          All five types of seventh chords consist of a triad and a seventh. A major,
          minor, and diminished seventh fall respectively one, two, and three half
          steps below the octave.
        </p>
        <p>
          In addition to these common types, the following seventh chords are sometimes
          used, especially in jazz:
        </p>
        <ul class="chord-list">
          <li>Minor major seventh chord</li>
          <li>Augmented seventh chord</li>
          <li>Augmented major seventh chord</li>
          <li>Diminished major seventh chord</li>
        </ul>
        <p>
          Use the chart below to reference the five common types of seventh chords.
        </p>
        <div className="triad-table-wrapper">
          <table className="triad-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Composition</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Dominant seventh</td>
                <td>C7</td>
                <td>Major triad with a minor seventh</td>
                <td>
                  <img src={c4} alt="C dominant seventh chord" />
                </td>
              </tr>

              <tr>
                <td>Major seventh</td>
                <td>Cmaj7</td>
                <td>Major triad with a major seventh</td>
                <td>
                  <img src={c5} alt="C dominant seventh chord" />
                </td>
              </tr>

              <tr>
                <td>Minor seventh</td>
                <td>Cm7</td>
                <td>Minor triad with a minor seventh</td>
                <td>
                  <img src={c6} alt="C dominant seventh chord" />
                </td>
              </tr>

              <tr>
                <td>Half-diminished seventh</td>
                <td>Cm7(♭5)</td>
                <td>Diminished triad with a minor seventh</td>
                <td>
                  <img src={c7} alt="C dominant seventh chord" />
                </td>
              </tr>

              <tr>
                <td>Diminished seventh</td>
                <td>Cdim7</td>
                <td>Diminished triad with a diminished seventh</td>
                <td>
                  <img src={c8} alt="C dominant seventh chord" />
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

      {/* 4th */}
      <div className="chord-card" ref={sixthRef}>

        <h2>4. Sixth chords</h2>

        <p>
          A sixth chord is a triad with an added sixth. Sixth chords have been especially
          common in jazz since the first half of the 20th century and in classical music
          since the 19th century. There are two common types of sixth chords: major sixth
          and minor sixth.
        </p>

        <h3><strong>Major sixth chord</strong></h3>

        <p>
          A major sixth chord is a major triad with a major sixth. The chord consists of a
          root note, a major third, a perfect fifth, and a major sixth. Below is a C major sixth chord:
          <img src={cho15} className="chord-img" alt="chords img ..." />
        </p>

        <p>
          A major sixth chord usually has a soft and ambiguous sound that resembles both a
          major and a minor. It has been especially common in jazz since the first half of
          the 20th century, and in classical music since the 19th century.
        </p>

        <p>
          The chord symbol for a major sixth chord is the root note followed by the number
          six. Some examples of major sixth chords are A6, G♭6, and G♯6.
        </p>

        <h3><strong>Minor sixth chord</strong></h3>

        <p>
          A minor sixth chord is a minor triad with a major sixth. The chord consists of a
          root note, a minor third, a perfect fifth, and a major sixth.Below is a C minor sixth chord:
          <img src={cho16} className="chord-img" alt="chords img ..." />
        </p>

        <p>
          A minor sixth chord usually has a minor-like and dissonant sound. It has been
          especially common in jazz since the first half of the 20th century, and in
          classical music since the 19th century.
        </p>

        <p>
          The chord symbol for a minor sixth chord is the root note followed by “m6” or,
          in jazz, sometimes “–6”. Some examples of minor sixth chords are Gm6, E♭–6,
          and F♯m6.
        </p>

        <h3><strong>Final remarks</strong></h3>

        <p>
          Both types of sixth chords consist of a triad and a major sixth. For example,
          a major sixth chord consists of a major triad and a major sixth. A major sixth
          falls two half steps above the perfect fifth.
        </p>

        <p>
          A major sixth chord consists of the same notes as a minor seventh chord. For
          example, the chord C6 (C, E, G, and A) consists of the same notes as Am7
          (A, C, E, and G).
        </p>

        <p>
          Likewise, a minor sixth chord consists of the same notes as a half-diminished
          seventh chord. Usually, the bass note determines how the chord is interpreted.
          If the bass note is C, the chord is normally interpreted as C6 rather than Am7.
        </p>
        <p>
          Use the chart below to reference the two common types of sixth chords.
        </p>

        <div className="triad-table-wrapper">
          <table className="triad-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Composition</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Major sixth</td>
                <td>C<sup>6</sup></td>
                <td>Major triad with a major sixth</td>
                <td>
                  <img src={c9} alt="C dominant seventh chord" />
                </td>
              </tr>

              <tr>
                <td>Minor sixth</td>
                <td>Cm<sup>6</sup></td>
                <td>Minor triad with a major sixth</td>
                <td>
                  <img src={c10} alt="C dominant seventh chord" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* 5th */}
      <div className="chord-card" ref={susRef}>
        <h2>5. Suspended chords</h2>

        <p>
          A suspended chord is a chord where the third is replaced by a perfect fourth or
          a major second. Suspended chords are relatively common in both classical and
          popular music. There are two types of suspended chords: suspended fourth and
          suspended second.
        </p>

        <h3>Suspended fourth chord</h3>
        <p>
          A suspended fourth chord consists of a root note, a perfect fourth, and a
          perfect fifth. The chord corresponds to a major triad where the third is raised
          a half step.Below is a C suspended fourth chord:
          <img src={cho17} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          A suspended fourth chord has an open and unresolved sound. It is relatively
          common in classical and popular music in most parts of the world.
        </p>
        <p>
          The chord symbol for a suspended fourth chord is the root note followed by
          “sus4” or sometimes simply “sus”. Some examples of suspended fourth chords are
          Csus4, D♭sus, and C♯sus4.
        </p>

        <h3>Suspended second chord</h3>
        <p>
          A suspended second chord consists of a root note, a major second, and a perfect
          fifth. The chord corresponds to a major triad where the third is lowered two
          half steps. Below is a C suspended second chord:
          <img src={cho18} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          A suspended second chord has an open and unresolved sound. It is used in
          classical and popular music in most parts of the world.
        </p>
        <p>
          The chord symbol for a suspended second chord is the root note followed by
          “sus2”. Some examples of suspended second chords are Dsus2, B♭sus2, and G♯sus2.
        </p>

        <h3>Dominant seventh suspended fourth chord</h3>
        <p>
          A dominant seventh suspended fourth chord is a suspended fourth chord with a
          minor seventh.Below is a C dominant seventh suspended fourth chord:
          <img src={cho19} className="chord-img" alt="chords img ..." />
        </p>
        <p>
          A dominant seventh suspended fourth chord has an open, unresolved, and tense
          sound. It is relatively common in classical and popular music in most parts of
          the world.
        </p>
        <p>
          The chord symbol for a dominant seventh suspended fourth chord is the root note
          followed by “7sus4” or sometimes simply “7sus”. Some examples of dominant seventh
          suspended fourth chords are F7sus4, A♭7sus, and C♯7sus4.
        </p>

        <h3>Final remarks</h3>
        <p>
          Suspended chords differ from other chords by not having a third. It is the
          third in a chord that determines whether the chord is a major or minor chord.
          Therefore, suspended chords are neither major nor minor chords.
        </p>
        <p>
          Suspended chords have a tense sound because the third is replaced by a
          different note. Suspended chords are usually continued to a major or minor
          chord with the same root note as the suspended chord. This allows the tension
          in the chord to dissolve.
          <img src={cho20} className="chord-img2" alt="chords img ..." />

        </p>
        <p>
          A suspended fourth chord consists of the same notes as a suspended second chord
          with a root note a perfect fifth below. For example, Csus4 (C, F, and G)
          consists of the same notes as Fsus2 (F, G, and C). Usually, the bass note
          determines how the chord is interpreted.
        </p>
        <p>
          Use the chart below to reference the two common types of suspended chords.
        </p>

        <div className="triad-table-wrapper">
          <table className="triad-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Composition</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Suspended fourth</td>
                <td>Csus4</td>
                <td>Triad with a perfect fourth instead of a third</td>
                <td>
                  <img src={c11} alt="C dominant seventh chord" />
                </td>
              </tr>

              <tr>
                <td>Suspended second</td>
                <td>Csus2</td>
                <td>Triad with a major second instead of a third</td>
                <td>
                  <img src={c12} alt="C dominant seventh chord" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      {/* 6th */}
      <div className="chord-card" ref={extendedRef}>

        <h2>6. Extended chords</h2>

        <p>
          An extended chord is a seventh chord that is extended by one or more notes
          above the seventh. There are three different extensions:
        </p>

        <div className="chord-table-wrapper">
          <table className="chord-table">
            <thead>
              <tr>
                <th>Extension</th>
                <th>Interval</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9</td>
                <td>Major ninth</td>
                <td>Ninth chord</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Perfect eleventh (including major ninth)</td>
                <td>11th chord</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Major thirteenth (including perfect eleventh and major ninth)</td>
                <td>13th chord</td>
              </tr>
            </tbody>
          </table>
        </div>



        <p>
          All seventh chords can be extended, but the most common extended chords are
          major seventh, dominant seventh, and minor seventh chords. Below is an
          example of the three different extensions (highlighted with green notes) for
          each of these chords:
        </p>
        <img src={cho21} className="chord-img" alt="chords img ..." />

        <p>
          The extensions are the same regardless of which seventh chord that is
          extended. Note that there is a third between all the notes and that the
          seventh and any underlying extensions are included in the chords, even if
          it is not indicated by the chord symbols.
        </p>

        <p>
          Extended chords consist of many different notes, and therefore they usually
          have a dense and dissonant sound. Since the 18th century, extended chords
          have been mainly used in jazz and some popular and classical music.
        </p>

        <p>
          In practice, one or more notes are often omitted from extended chords to
          avoid a very dissonant sound, and because it is not always possible to play
          all notes simultaneously. The following notes are omitted:
        </p>

        <ul>
          <li>
            Chords with a ninth are sometimes played without a fifth.
          </li>

          <li>
            Chords with an eleventh are often played without a fifth. Dominant
            eleventh chords are often played without a third and a fifth. A dominant
            eleventh chord without a third and a fifth corresponds to a major triad
            with a bass note a whole step above the root note of the major triad. For
            example, the C11 chord corresponds to B♭/C and is notated as such.
          </li>

          <li>
            Chords with a thirteenth are often played without a fifth and an eleventh.
          </li>
        </ul>

        <p>
          Below is an example of extended chords played on the piano, with some notes
          omitted and the other notes spread out between the left and right hands. The
          chords are the same as in the previous example, but they sound very
          different:
        </p>
        <img src={cho22} className="chord-img" alt="chords img ..." />
        <p>When playing chords on the piano, you often play one or two notes with your left hand and the remaining notes around middle C with your right hand. This is also the case in the example above. The order and position of the notes may vary as needed.</p>


      </div>
      {/* 7th */}
      <div className="chord-card" ref={alteredRef}>

        <h2>7. Altered chords</h2>

        <p>
          An altered chord is a chord in which the fifth, ninth, eleventh, or the
          thirteenth is raised or lowered a half step relative to the chord's normal
          structure. There are six different alterations:
        </p>

        <div className="chord-table-wrapper2">
          <table className="chord-table2 ">
            <thead>
              <tr>
                <th>Alteration</th>
                <th>Interval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>(♭5)</td>
                <td>Lowered fifth = diminished fifth</td>
              </tr>
              <tr>
                <td>(♯5)</td>
                <td>Raised fifth = augmented fifth</td>
              </tr>
              <tr>
                <td>(♭9)</td>
                <td>Lowered major ninth = minor ninth</td>
              </tr>
              <tr>
                <td>(♯9)</td>
                <td>Raised major ninth = augmented ninth</td>
              </tr>
              <tr>
                <td>(♯11)</td>
                <td>Raised perfect eleventh = augmented eleventh</td>
              </tr>
              <tr>
                <td>(♭13)</td>
                <td>Lowered major thirteenth = minor thirteenth</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Diminished and augmented triads are examples of altered chords because they
          correspond respectively to a minor triad with a lowered fifth, and a major
          triad with a raised fifth. Below are a few examples of the most common
          altered chords:
        </p>
        <img src={cho23} className="chord-img" alt="chords img ..." />
        <p>Altered chords usually have a very dissonant sound due to the alterations. Since the 18th century, altered chords with over four notes have been used in jazz and some popular and classical music.<br></br>
          <br></br>
          In chord symbols, alterations are noted with an accidental and a number in parentheses, as shown in the table above. When there are several alterations in the same chord, they are written one after the other. Some examples of altered chords are D7(♭9), B♭9(♯5), and G♯7(♯9♭13).<br></br>
          <br></br>
          Alterations differ from extensions in that no notes are implied. Therefore, any sevenths and extensions must always be specified in the chord symbol immediately before the parenthesis with the altered notes.<br></br>
          <br></br>
          There is a specific altered chord called an alt chord, which is relatively common in jazz. The chord is a dominant seventh chord with an altered fifth and ninth, and its chord symbol is the root note followed by '7alt' (e.g. G7alt). It is up to the musician to decide whether the fifth and the ninth should be raised or lowered. Thus, the chord can be played in four ways: G7(♭5♭9), G7(♭5♯9), G7(♯5♭9), and G7(♯5♯9).</p>
      </div>

      {/* 8th */}

      <div className="chord-card" ref={otherRef}>
        <h2>8. Other chords</h2>

        <p>
          There are a series of other chords that are used frequently. These are:
        </p>

        <h3><strong>Added tone chords</strong></h3>

        <p>
          An added tone chord is a chord with an added note. There are three types of
          added tone chords: add9, add11, and add13, that indicate that a major second,
          a perfect fourth, and a major sixth respectively, must be added to the chord.
          <img src={cho24} className="chord-img" alt="chords img ..." />
        </p>

        <p>
          As a general rule, added tone chords are triads with an added note, but all
          types of chords may be added to any note mentioned and thus become an added
          tone chord.
        </p>

        <p>
          The chord symbol for an added tone chord contains <strong>add9</strong>,
          <strong> add11</strong>, or <strong> add13</strong> at the end. Some examples
          of added tone chords are Fadd9, G♭7add11, and G♯9add13. The three added notes
          may instead be specified as add2, add4, and add6.
        </p>

        <p>
          Unlike extended chords, added tone chords contain no implicit notes. For
          example, the chord Cadd9 contains the notes C, E, G, and D, while the chord C9
          also contains a minor seventh.
        </p>

        <h3><strong>Power chords</strong></h3>

        <p>
          A power chord consists of two notes only: a root note and a perfect fifth.
          The chord has no third and is therefore neither a major chord nor a minor
          chord.
          <img src={cho25} className="chord-img2" alt="chords img ..." />
        </p>

        <p>
          Power chords are common in rock music and are usually played on the lowest
          strings of a distorted guitar. The root note is often doubled by playing the
          root note, the fifth, and the octave.
        </p>

        <p>
          The chord symbol for a power chord is the root note followed by a 5, or
          sometimes <strong>omit3</strong> or <strong>no3</strong>. Some examples are
          A5, G♭omit3, and F♯no3.
        </p>

        <h3><strong>Tone clusters</strong></h3>

        <p>
          A tone cluster is a chord comprising at least three notes a second apart.
          Tone clusters are fully notated with all notes or by notating the top and
          bottom notes connected by a vertical line, which indicates that all notes in
          between must be played.
          <img src={cho26} className="chord-img" alt="chords img ..." />
        </p>

        <p>
          A tone cluster usually has a muddy and very dissonant sound. Since the 20th
          century, it has been primarily used in jazz and classical music. Some cluster
          chords can be played on the piano by pressing down multiple keys with the
          palm or forearm.
        </p>
      </div>
      {/* 9th */}
      <div className="chord-card" ref={inversionRef}>
        <h2>9. Chord inversions</h2>

        <p>
          The lowest note in a chord is called the bass note. If the bass note is the
          same as the root note, the chord is in root position. If the bass note is
          different from the root note, the chord is in inversion.
        </p>

        <p>
          Triads have two inversions. If the third is the bass note, the chord is in
          1st inversion. If the fifth is the bass note, the chord is in 2nd inversion.
          <img src={cho27} className="chord-img" alt="chords img ..." />
        </p>

        <p>
          Seventh chords have three inversions. If the third is the bass note, the
          chord is in 1st inversion. If the fifth is the bass note, the chord is in 2nd
          inversion, and if the seventh is the bass note, the chord is in 3rd inversion.
          <img src={cho28} className="chord-img" alt="chords img ..." />
        </p>

        <p>
          All chords can be inverted. The number of possible inversions corresponds to
          the number of chord notes other than the root note. Only the bass note
          determines the inversion. The position of the other notes has no significance.
        </p>

        <p>
          If the root note is not the bass note, the bass note of the chord is indicated
          at the end of the chord symbol with a slash and capital letter. This applies
          to inversions and when the bass note is a non-chord tone.
          <img src={cho29} className="chord-img2" alt="chords img ..." />
        </p>

        <p>
          Chords with a changed bass note are pronounced in different ways, such as
          “C slash D”, “C over D”, or “C with a D in the bass”.
        </p>
      </div>


    </div>
  );
}
