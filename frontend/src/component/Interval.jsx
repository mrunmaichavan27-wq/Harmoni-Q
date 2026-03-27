import React, { useRef } from "react";
import "./Interval.css";
import Tooltip from "../component/Tooltip";
import int1 from "../images/int1.jpg";
import int2 from "../images/int2.jpg";
import int3 from "../images/int3.jpg";
import int4 from "../images/int4.jpg";
import int5 from "../images/int5.jpg";
import int6 from "../images/int6.jpg";
import int7 from "../images/int7.jpg";
import int8 from "../images/int8.jpg";
import int9 from "../images/int9.jpg";
import int10 from "../images/int10.jpg";
import int11 from "../images/int11.jpg";
import int12 from "../images/int12.jpg";

export default function Interval() {

  // ⭐ Section refs
  const charRef = useRef(null);
  const namesRef = useRef(null);
  const qualityRef = useRef(null);
  const inversionRef = useRef(null);
  const compoundRef = useRef(null);
  const augDimRef = useRef(null);

  // ⭐ Smooth scroll
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="interval-page">

      {/* MAIN TITLE */}
      <h1 className="interval-title">Intervals</h1>

      {/* INTRO CARD */}
      <div className="interval-card">
        <h1>Introduction</h1>

        <p>
          An interval is the distance between two notes. Almost all music is created by using notes at different distances and thus different sizes of intervals. The notes in an interval may be played simultaneously, which is the case in chords, or played successively, which is the case in { }
          {/* 🔥 Tooltip inserted here */}
          <Tooltip word="melodies">


            A series of notes experienced as a whole.
            <br /><br />

          </Tooltip>
        </p>

        {/* CONTENTS */}
        <div className="contents-box">
          <h3>Contents</h3>
          <ol>
            <li onClick={() => scrollToSection(charRef)}>Characteristics</li>
            <li onClick={() => scrollToSection(namesRef)}>Interval names</li>
            <li onClick={() => scrollToSection(qualityRef)}>Interval qualities</li>
            <li onClick={() => scrollToSection(inversionRef)}>Interval inversions</li>
            <li onClick={() => scrollToSection(compoundRef)}>Compound intervals</li>
            <li onClick={() => scrollToSection(augDimRef)}>
              Augmented & diminished intervals
            </li>
          </ol>
        </div>
      </div>

      {/* 1️⃣ CHARACTERISTICS */}
      <div className="interval-card" ref={charRef}>
        <h2>1. Characteristics</h2>
        <p>Intervals can be categorized according to different criteria:<br></br>

          <h3>Harmonic and melodic intervals</h3>
          Intervals can be harmonic or melodic. When the notes are played simultaneously, it is a<strong> harmonic interval.</strong> When the notes are played in sequence, it is a<strong>melodic interval.</strong>  Melodic intervals can be ascending or descending:</p>
        <img src={int1} className="interval-img" alt="interval img ..." />
        <h3>Even and uneven intervals</h3>
        <p>Intervals can be even or uneven. If one note falls on a line and the other in a space, it is an even <strong>interval</strong> . If both notes fall on a line or in a space, it is an <strong>uneven interval:</strong> </p>
        <img src={int2} className="interval-img" alt="interval img ..." />
        <h3>Consonant and dissonant intervals</h3>
        <p>Intervals can be consonant or dissonant. If the notes sound pleasant and relaxed, the interval is a <strong>consonant interval</strong> . If the notes sound unpleasant and tense, the interval is a <strong>dissonant interval:</strong> </p>
        <img src={int3} className="interval-img" alt="interval img ..." />
        <p>Dissonant intervals are not necessarily undesirable. Dissonant intervals are used in many contexts to build tension and momentum in the music.<br></br>

          The perception of consonance and dissonance is subjective. The { }
          <Tooltip word="Western world">


            Collective name for Europe, America, Australia, and New Zealand.
            <br /><br />

          </Tooltip> considers the following intervals to be consonant: unison, minor third, major third, perfect fourth, perfect fifth, minor sixth, major sixth, and octave. The following intervals are considered dissonant: minor second, major second, tritone, minor seventh, and major seventh.

        </p>
      </div>

      {/* 2️⃣ INTERVAL NAMES */}
      <div className="interval-card" ref={namesRef}>
        <h2>2. Interval names</h2>
        <p>
          The intervals are named after the number of { }  <Tooltip word="degrees">


            A number indicating the position of a note relative to another note. Each of the natural notes (C, D, E, F, G, A, and B) with or without accidentals represents a degree. Each line and space on the staff also represent a degree.
            <br /><br />  </Tooltip> between the notes. It is the number of degrees alone, and not the specific notes that determine the names. The table below lists the interval names and degrees.
        </p>



        <p>The list continues with the ninth, tenth, eleventh, twelfth, thirteenth, fourteenth, and fifteenth intervals, but they are rarely used.<br></br>

          To find the name of an interval, count the number of { }  <Tooltip word="degrees">


            A number indicating the position of a note relative to another note. Each of the natural notes (C, D, E, F, G, A, and B) with or without accidentals represents a degree. Each line and space on the staff also represent a degree.
            <br /><br />

          </Tooltip> between the notes, including both notes. Each { } <Tooltip word=" natural note ">


            The seven notes A, B, C, D, E, F, and G on the piano's white keys. Learn more about natural notes.
            <br /><br />

          </Tooltip> (C, D, E, F, G, A, and B) with or without accidental represents a degree. Each line and space on the staff also represent a degree.<br></br>

          <br></br>For example, there are five degrees between the notes D and A, therefore, it is a fifth. There are three degrees between the notes E♭ and C, therefore it is a third:</p>
        <img src={int4} className="interval-img" alt="interval img ..." />
      </div>

      {/* 3️⃣ INTERVAL QUALITIES */}
      <div className="interval-card" ref={qualityRef}>
        <h2>3. Interval qualities</h2>
        <p>
          The exact distance between the notes in an interval with the same name may vary. An example is the two different versions of a third found below. They have the same name, but the first third is a half step smaller than the second third:
        </p>
        <img src={int5} className="interval-img2" alt="interval img ..." />
        <p>
          To specify the exact distance between the notes in an interval, a quality is
          added to the interval name. There are five different interval qualities:
        </p>

        <ul className="interval-list">
          <li>Perfect intervals</li>
          <li>Minor intervals</li>
          <li>Major intervals</li>
          <li>Diminished intervals</li>
          <li>Augmented intervals</li>
        </ul>
        <p>As a general rule, the intervals unison, fourth, fifth, and octave are only found in one quality. They are always perfect. As a general rule, the second, third, sixth, and seventh are found in two qualities. They are either minor or major. In rare cases, all intervals can be diminished and augmented (see section 6 for details).<br></br>

          The table below lists the interval names, qualities, and distances measured in half steps. To find the quality of an interval, count the number of half steps between the notes excluding the first note. For example, the interval between the notes D and F♯ is a third, and there are four half steps between the notes:</p>
        <img src={int6} className="interval-img" alt="interval img ..." />
        <p>The quality of an interval can also be found by listening to it. Each interval has a unique sound that you’ll recognize through practice. It may help to distinguish between consonant and dissonant intervals  and associate each interval with a song .</p>
        <h3>Unison, second and third
        </h3>
        <p>As a general rule, the unison is perfect, and the second and third are minor or major. A minor second is also called a half step. A major second is also called a whole step. Typically, the term perfect unison is not used as it implies that it is perfect.</p>



        <h3>Fourth and fifth </h3>
        <p>As a general rule, a fourth and fifth are perfect. Between the two intervals is an interval spanning six half steps, which can be an augmented fourth or a diminished fifth. The interval is also called a tritone, because it spans three whole steps.</p>





        <h3>Sixth, seventh and octave</h3>
        <p>As a general rule, the sixth and the seventh are minor or major, and an octave is perfect. Usually, the term perfect octave is not used because it implies that it is perfect.</p>
      </div>

      {/* 4️⃣ INTERVAL INVERSIONS */}
      <div className="interval-card" ref={inversionRef}>
        <h2>4. Interval inversions</h2>
        <p>
          An inverted interval is an interval turned upside down by moving the lower note up an { }
          <Tooltip word="octave">
            The distance of twelve half steps; Corresponds to the distance from any note to the nearest lower or higher version of the same note. Learn more about octaves.
            <br /><br />  </Tooltip>, or the upper note down an octave. The inversion of the original interval results in a new interval:
        </p>
        <img src={int7} className="interval-img2" alt="interval img ..." />
        <p>In the example above, the note C has moved up an octave. The original interval is a sixth (6 degrees) and its inversion is a third (3 degrees). The number of degrees in an interval plus its inversion always equals 9 degrees:</p>
        <img src={int8} className="interval-img" alt="interval img ..." />
        <p>
          Below is a list of interval inversions:
        </p>

        <ul className="interval-list2">
          <li>Unison ↔ Octave</li>
          <li>Second ↔ Seventh</li>
          <li>Third ↔ Sixth</li>
          <li>Fourth ↔ Fifth</li>
        </ul>

        <p>
          The quality of an inverted interval is the opposite quality of the original
          interval, but perfect intervals remain perfect. For example, the inversion
          of a major second is a minor seventh, and the inversion of a perfect fourth
          is a perfect fifth.
        </p>

        <p>
          Below is a list of interval qualities under inversion:
        </p>

        <ul className="interval-list2">
          <li>Minor ↔ Major</li>
          <li>Perfect ↔ Perfect</li>
          <li>Diminished ↔ Augmented</li>
        </ul>

        <p>
          In particular, interval inversions are useful for finding sevenths and
          sixths more easily. Instead of finding the original interval, you can move
          the lowest note up an octave and simply find its smaller inversion.
        </p>
        <img src={int9} className="interval-img" alt="interval img ..." />


      </div>

      {/* 5️⃣ COMPOUND INTERVALS */}
      <div className="interval-card" ref={compoundRef}>
        <h2>5. Compound intervals</h2>
        <p>
          A compound interval is an interval which is larger than an octave. Like other intervals, the compound intervals are named by counting the number of degrees between the notes, including both notes. Their names are ninth, tenth, eleventh, twelfth, thirteenth, fourteenth, and fifteenth:
        </p>
        <img src={int10} className="interval-img" alt="interval img ..." />
        <p>Compound intervals consist of one octave and another interval which is typically smaller than one octave. For example, a ninth consists of an octave and a second, and a tenth consists of an octave and a third.<br></br>

          There are two alternative ways to name compound intervals. They can be named according to the interval they comprise without the octave, for example, compound second and compound third. Or they can be named by describing both intervals, for example octave plus a third.<br></br>

          Compound intervals exist in the same qualities as the corresponding intervals smaller than an octave. For example, a tenth (a compound third) can be minor or major, just like a third can be. Below is a list of compound intervals:</p>
        <div className="interval-table-wrapper">
          <table className="interval-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Degrees</th>
                <th>Half steps</th>
                <th>Composition</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Minor ninth</td>
                <td>9</td>
                <td>13</td>
                <td>Octave + minor second</td>
              </tr>

              <tr>
                <td>Major ninth</td>
                <td>9</td>
                <td>14</td>
                <td>Octave + major second</td>
              </tr>

              <tr>
                <td>Minor tenth</td>
                <td>10</td>
                <td>15</td>
                <td>Octave + minor third</td>
              </tr>

              <tr>
                <td>Major tenth</td>
                <td>10</td>
                <td>16</td>
                <td>Octave + major third</td>
              </tr>

              <tr>
                <td>Perfect eleventh</td>
                <td>11</td>
                <td>17</td>
                <td>Octave + perfect fourth</td>
              </tr>

              <tr>
                <td>Augmented eleventh</td>
                <td>11</td>
                <td>18</td>
                <td>Octave + augmented fourth</td>
              </tr>

              <tr>
                <td>Diminished twelfth</td>
                <td>12</td>
                <td>18</td>
                <td>Octave + diminished fifth</td>
              </tr>

              <tr>
                <td>Perfect twelfth</td>
                <td>12</td>
                <td>19</td>
                <td>Octave + perfect fifth</td>
              </tr>

              <tr>
                <td>Minor thirteenth</td>
                <td>13</td>
                <td>20</td>
                <td>Octave + minor sixth</td>
              </tr>

              <tr>
                <td>Major thirteenth</td>
                <td>13</td>
                <td>21</td>
                <td>Octave + major sixth</td>
              </tr>

              <tr>
                <td>Minor fourteenth</td>
                <td>14</td>
                <td>22</td>
                <td>Octave + minor seventh</td>
              </tr>

              <tr>
                <td>Major fourteenth</td>
                <td>14</td>
                <td>23</td>
                <td>Octave + major seventh</td>
              </tr>

              <tr>
                <td>Fifteenth</td>
                <td>15</td>
                <td>24</td>
                <td>Octave + octave</td>
              </tr>
            </tbody>
          </table>

        </div>

        <p>A compound interval is found by moving the lower note up an octave and identifying the remaining interval. For example, if the remaining interval is a major third, the compound interval is a major tenth.</p>

      </div>

      {/* 6️⃣ AUGMENTED & DIMINISHED */}
      <div className="interval-card" ref={augDimRef}>
        <h2>6. Augmented and diminished intervals</h2>
        <p>
        All intervals can be augmented and diminished. An<strong> augmented interval</strong> is a half step larger than a perfect or major interval, and a <strong>diminished interval</strong> is a half step smaller than a perfect or minor interval.<br></br>

In the example below, there are four sixths of different qualities. In all cases, there are six degrees between the notes, but the diminished sixth is a half step smaller than the minor sixth, and the augmented sixth is a half step larger than the major sixth:
        </p>
        <img src={int11} className="interval-img" alt="interval img ..." />
<p>The intervals augmented fourth and diminished fifth are some of the only augmented and diminished intervals used regularly. This is because they have a quality of six half steps that do not correspond to a perfect, minor, or major interval.<br></br>

All other augmented and diminished intervals have the same number of half steps as a perfect, minor, or major interval, and it is often more appropriate to notate them as such. Below is an example of an interval of two half steps notated as a major second and a diminished third, respectively:</p>
<img src={int12} className="interval-img" alt="interval img ..." />
      </div>

    </div>
  );
}
