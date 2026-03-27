import React, { useRef } from "react";
import "./Scales.css";

import scal1 from "../images/scal1.jpg";
import scal2 from "../images/scal2.jpg";
import scal3 from "../images/scal3.jpg";
import scal5 from "../images/scal5.jpg";
import scal6 from "../images/scal6.jpg";
import scal7 from "../images/scal7.jpg";
import scal8 from "../images/scal8.jpg";
import scal9 from "../images/scal9.jpg";
import scal10 from "../images/scal10.jpg";
import scal11 from "../images/scal11.jpg";
import scal12 from "../images/scal12.jpg";
import scal13 from "../images/scal13.jpg";
import scal14 from "../images/scal14.jpg";
import scal15 from "../images/scal15.jpg";
import scal16 from "../images/scal16.jpg";
import scal17 from "../images/scal17.jpg";
import scal18 from "../images/scal18.jpg";
import scal19 from "../images/scal19.jpg";
import scal20 from "../images/scal20.jpg";
import scal21 from "../images/scal21.jpg";
import scal22 from "../images/scal22.jpg";
import scal23 from "../images/scal23.jpg";
import scal24 from "../images/scal24.jpg";
import scal25 from "../images/scal25.jpg";
import scal26 from "../images/scal26.jpg";
import scal27 from "../images/scal27.jpg";
import scal28 from "../images/scal28.jpg";
import scal29 from "../images/scal29.jpg";
import scal30 from "../images/scal30.jpg";

export default function Scales() {
    const scaleRef = useRef(null);
    const majorRef = useRef(null);
    const minorRef = useRef(null);
    const pentaRef = useRef(null);
    const bluesRef = useRef(null);
    const modesRef = useRef(null);
    const chromaticRef = useRef(null);
    const wholeRef = useRef(null);
    const otherRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="scale-page">
            <h1 className="scale-title">Scales</h1>

            {/* INTRO */}
            <div className="scale-card">
                <h1>Introduction</h1>
                <p>
                    A scale is a series of notes ordered by pitch. Scales form the foundation
                    of melodies and harmony in music.
                </p>

                <div className="contents-box">
                    <h3>Contents</h3>
                    <ol>
                        <li onClick={() => scrollToSection(scaleRef)}>Scale construction</li>
                        <li onClick={() => scrollToSection(majorRef)}>Major scale</li>
                        <li onClick={() => scrollToSection(minorRef)}>Minor scales</li>
                        <li onClick={() => scrollToSection(pentaRef)}>Pentatonic scales</li>
                        <li onClick={() => scrollToSection(bluesRef)}>Blues scale</li>
                        <li onClick={() => scrollToSection(modesRef)}>Music modes</li>
                        <li onClick={() => scrollToSection(chromaticRef)}>Chromatic scale</li>
                        <li onClick={() => scrollToSection(wholeRef)}>Whole-tone scale</li>
                        <li onClick={() => scrollToSection(otherRef)}>Other scales</li>
                    </ol>
                </div>
            </div>

            {/* 1 SCALE CONSTRUCTION */}
            <div className="scale-card" ref={scaleRef}>
                <h2>1. Scale construction</h2>

                <p>
                    Scales are usually written in ascending order. The note from which the
                    scale is built is called the root note.
                </p>
                <img src={scal1} className="scale-img" alt="Scale root note" />

                <h3><strong>Root note</strong></h3>
                <p>
                    The root note is repeated at the octave to complete the scale. The
                    repetition does not count as a new note.
                </p>
                <img src={scal2} className="scale-img" alt="Scale example" />

                <h3><strong>Distances between scale notes</strong></h3>
                <p>
                    The distance between the notes in a scale can be 1, 2, or 3 half steps. A distance of 2 half steps is also called a whole step. Each type of scale may be described with a series of numbers indicating the distance between the scale notes, e.g. 2-2-1-2-2-2-1:
                </p>
                <img src={scal3} className="scale-img" alt="Scale steps" />
                <p>The distance between the notes in a scale is the same regardless of the root note. Here is the same type of scale as above, but with a new root note. Note how similar the two versions of the scale type sound:</p>
                <img src={scal5} className="scale-img" alt="Scale steps" />
                <p>In English, the letters H (half step) and W (whole step), or S (semitone) and T (tone) are often used instead of the numbers 1 and 2. Therefore, the type of scale above can also be described with the series of letters W-W-H-W-W-W-H or T-T-S-T-T-T-S.</p>
                <h3><strong>Scale degrees</strong></h3>
                <p>
                    Each note in a scale has a number called a degree, which shows the distance of the note from the root note. Each natural note, with or without accidental, represents a degree. Each line and space on the staff also represent a degree. The root note falls on the first degree. After seven degrees, the root note and the first degree are repeated:
                </p>
                <img src={scal6} className="scale-img" alt="Scale steps" />
                <p>The major scale, the minor scales, and the music modes described below consist of seven different notes and they are notated using seven different degrees. The following notation of the above scale is incorrect because the third degree is used twice:</p>
                <img src={scal7} className="scale-img" alt="Scale steps" />
                <p>The seven degrees are called tonic, supertonic, mediant, subdominant, dominant, submediant, and leading tone. If the seventh degree falls two half steps below the root note instead of one half step below, the term subtonic is used instead of leading tone.</p>
            </div>

            {/* 2 MAJOR SCALE */}
            <div className="scale-card" ref={majorRef}>
                <h2>2. Major scale</h2>
                <p>
                    A major scale consists of seven different notes in the pattern 2-2-1-2-2-2-1, where 1 is a half step, and 2 is a whole step. Below is a C major scale:
                </p>
                <img src={scal8} className="scale-img" alt="Major scale" />
                <p>A characteristic of the major scale is the major third degree that characterizes major, and the major seventh degree that is the leading tone to the root note. It is the most common scale in classical and popular music in most parts of the world.</p>
            </div>

            {/* 3 MINOR SCALES */}
            <div className="scale-card" ref={minorRef}>
                <h2>3. Minor scales</h2>
                <p>There are three different minor scales: natural minor, harmonic minor, and melodic minor. Music pieces in minor typically use a combination of different minor scales. Therefore, a piece of music is often said to be in minor regardless of the type of minor scale.</p>
                <h3><strong>Natural minor</strong></h3>
                <p>
                    A natural minor scale consists of seven different notes in the pattern 2-1-2-2-1-2-2, where 1 is a half step, and 2 is a whole step. Below is a C natural minor scale:
                </p>
                <img src={scal9} className="scale-img" alt="Major scale" />
                <p>A characteristic of the natural minor scale is the minor third degree, which characterizes minor, and the minor seventh degree, by virtue of which the scale has no leading tone. It is one of the most common scales in classical and popular music in most parts of the world.</p>
                <p>Some example pieces of music in natural minor are:
                    <ul>
                        <li>Kate Bush: ‘Running Up That Hill’, 1985. In C natural minor.</li>
                        <li>Yann Tiersen: ‘La valse d'Amélie’, 2001. In A natural minor.</li>
                        <li> Shawn Mendes: ‘Señorita’, 2018. In A natural minor. </li> </ul>
                    A major scale and a natural minor scale are relative to each other when they share all the same notes. Each major scale has a relative minor scale starting on the sixth degree of the major scale. For example, the A minor scale is relative to C major. A major scale and a natural minor scale are parallel to each other when they share the same root note. For example, the C minor scale is parallel to C major.</p>


                <h3><strong>Harmonic minor</strong></h3>
                <p>
                    A harmonic minor scale consists of seven different notes in the pattern 2-1-2-2-1-3-1. The scale corresponds to a natural minor scale with a raised seventh degree. Below is a C harmonic minor scale:
                </p>
                <img src={scal29} className="scale-img" alt="Harmonic minor" />
                <p>A characteristic of the harmonic minor scale is the minor third degree which characterizes minor, and the augmented second between the sixth degree and the leading tone on the seventh degree.<br></br>

                    Usually a harmonic minor scale is only used briefly in addition to the natural minor scale. The leading tone on the seventh degree is suitable for ascending melodic movements leading up to the root note.</p>

                <h3><strong>Melodic minor</strong></h3>
                <p>
                    A melodic minor scale consists of seven different notes in the pattern 2-1-2-2-2-2-1. The scale corresponds to a natural minor scale with a raised sixth and seventh degrees. Below is a C melodic minor scale:
                </p>
                <img src={scal10} className="scale-img" alt="Melodic minor" />
                <p>A characteristic of the melodic minor scale is the minor third degree that characterizes minor, the major sixth degree, and the major seventh degree, that is the leading tone to the root note.<br></br>

                    Usually, a melodic minor scale is only used briefly in addition to the natural minor scale. The major sixth degree and the leading note on the seventh degree are suitable for ascending melodic movements leading up to the root note.<br></br>

                    An example song using different minor scales is ‘This Love’ (Maroon 5, 2002). The song is in C minor and uses the leading tone from the harmonic minor scale on the first melody note. Later it uses the minor seventh from the natural minor scale</p>
            </div>

            {/* 4 PENTATONIC */}
            <div className="scale-card" ref={pentaRef}>
                <h2>4. Pentatonic scales</h2>
                <p>A pentatonic scale consists of five notes. There are many different pentatonic scales, but the two most common ones by far are major pentatonic and minor pentatonic.</p>

                <h3><strong>Major pentatonic</strong></h3>
                <p>A major pentatonic scale consists of five different notes in the pattern 2-2-3-2-3. The scale corresponds to a major scale without the fourth and seventh degree. Below is a C major pentatonic scale:</p>
                <img src={scal11} className="scale-img" alt="Major pentatonic" />
                <p>A characteristic of the major pentatonic scale is the major third degree which characterizes major, the limited number of notes, and the lack of half steps.

                    The major pentatonic scale is common in popular music and folk music worldwide and is used especially in melodies and improvisation. Chords are usually based on other scales with more notes than the major pentatonic scale.</p>

                <h3><strong>Minor pentatonic</strong></h3>
                <p>A minor pentatonic scale consists of five different notes in the pattern 3-2-2-3-2. The scale corresponds to a natural minor scale without the second and sixth degree. Below is a C minor pentatonic scale:</p>

                <img src={scal12} className="scale-img" alt="Minor pentatonic" />
                A characteristic of the minor pentatonic scale is the minor third degree which characterizes the minor, the limited number of notes, and the lack of half steps.

                The minor pentatonic scale is common in popular music and folk music worldwide, and is used especially in melodies and improvisation. Chords are usually based on other scales with more notes than the minor pentatonic scale.
            </div>

            {/* 5 BLUES */}
            <div className="scale-card" ref={bluesRef}>
                <h2>5. Blues scale</h2>
                <p>A blues scale consists of six different notes in the pattern 3-2-1-1-3-2. The scale corresponds to a minor pentatonic scale with an added diminished fifth. Below is a C blues scale:</p>
                <p>
                    The blues scale adds a diminished fifth known as a blue note.
                </p>
                <img src={scal13} className="scale-img" alt="Minor pentatonic" />
                <p>A characteristic of the blues scale is the minor third degree, the diminished fifth degree, and the minor seventh degree. Typically, these three notes are not played and sung entirely in tune, but as something between minor and major third, diminished and perfect fifth, and minor and major seventh. When the notes are played and sung this way, they are called blue notes.

                    Blue notes are characteristic of blues and can be used in combination with both major and minor chords. Blue notes can be sung and played on most wind instruments and string instruments. On a piano you can’t vary the pitch of the individual notes, and therefore you have to play the notes in the standard way.<br></br><br></br>

                    The blues scale is common in blues, jazz, country, rock, and funk and is used especially in melodies and improvisation. Chords are usually based on different scales than the blues scale.</p>
            </div>

            {/* 6 MODES */}
            <div className="scale-card" ref={modesRef}>
  <h2>6. Music modes</h2>

  <p>
    The music modes are seven scales originating in European music from the Middle
    Ages. From the beginning of the 17th century, the major and minor scales became
    more common, but the music modes are still used today, especially in folk music,
    jazz, and rock.
  </p>

  <p>
    The names of the music modes are Ionian, Dorian, Phrygian, Lydian, Mixolydian,
    Aeolian, and Locrian. They consist of the same notes as a major scale, but they
    start on each of the seven degrees of the major scale. Any major scale contains
    all seven music modes.
  </p>

  <p>
    For example, a C major scale contains D Dorian on the second degree and
    G Mixolydian on the fifth degree.
  </p>

  <h3><strong>Ionian mode</strong></h3>
  <p>
    The Ionian mode starts on the first degree of the major scale. The scale is
    identical to a major scale.
     <img src={scal14} className="scale-img" alt="Minor pentatonic" />
  </p>
  <p>
    A characteristic of the Ionian mode is the major third degree that characterizes
    major, and the major seventh degree that is the leading tone to the root note.
  </p>
  <ul>
    <li>Bob Dylan – Like a Rolling Stone (C Ionian)</li>
    <li>The Beatles – Let It Be (C Ionian)</li>
    <li>Rihanna – Stay (C Ionian)</li>
  </ul>

  <h3><strong>Dorian mode</strong></h3>
  <p>
    The Dorian mode starts on the second degree of the major scale. The scale
    corresponds to a natural minor scale with a raised sixth degree.
     <img src={scal15} className="scale-img" alt="Minor pentatonic" />
  </p>
  <p>
    A characteristic of the Dorian mode is the minor third degree and the major sixth
    degree that separates it from a natural minor scale.
  </p>
  <ul>
    <li>Traditional – Drunken Sailor (D Dorian)</li>
    <li>John Coltrane – Impressions (D & E♭ Dorian)</li>
    <li>Santana – Oye Como Va (A Dorian)</li>
  </ul>

  <h3><strong>Phrygian mode</strong></h3>
  <p>
    The Phrygian mode starts on the third degree of the major scale. The scale
    corresponds to a natural minor scale with a lowered second degree.
     <img src={scal16} className="scale-img" alt="Minor pentatonic" />
  </p>
  <p>
    A characteristic of the Phrygian mode is the minor third degree and the minor
    second degree.
  </p>
  <ul>
    <li>Pink Floyd – Set the Controls for the Heart of the Sun (A Phrygian)</li>
    <li>Slade – Coz I Love You (D Phrygian)</li>
    <li>The Clash – London Calling (E Phrygian)</li>
  </ul>

  <h3><strong>Lydian mode</strong></h3>
  <p>
    The Lydian mode starts on the fourth degree of the major scale. The scale
    corresponds to a major scale with a raised fourth degree.
      <img src={scal17} className="scale-img" alt="Minor pentatonic" />
  </p>
  <p>
    A characteristic of the Lydian mode is the major third degree and the augmented
    fourth degree.
  </p>
  <ul>
    <li>The Left Banke – Pretty Ballerina (E♭ Lydian)</li>
    <li>Joe Satriani – Flying in a Blue Dream (C Lydian)</li>
    <li>Elliott Smith – Waltz #1 (C♭ Lydian)</li>
  </ul>

  <h3><strong>Mixolydian mode</strong></h3>
  <p>
    The Mixolydian mode starts on the fifth degree of the major scale. The scale
    corresponds to a major scale with a lowered seventh degree.
         <img src={scal18} className="scale-img" alt="Minor pentatonic" />
  </p>
  <p>
    A characteristic of the Mixolydian mode is the major third degree and the minor
    seventh degree.
  </p>
  <ul>
    <li>Traditional – She Moved Through the Fair (D Mixolydian)</li>
    <li>The Beatles – Tomorrow Never Knows (C Mixolydian)</li>
    <li>Steve Earle – Copperhead Road (D Mixolydian)</li>
  </ul>

  <h3><strong>Aeolian mode</strong></h3>
  <p>
    The Aeolian mode starts on the sixth degree of the major scale. The scale is
    identical to a natural minor scale.
     <img src={scal19} className="scale-img" alt="Minor pentatonic" />
  </p>
  <p>
    A characteristic of the Aeolian mode is the minor third degree and the minor
    seventh degree, meaning the scale has no leading tone.
  </p>
  <ul>
    <li>Kate Bush – Running Up That Hill (C Aeolian)</li>
    <li>R.E.M. – Losing My Religion (A Aeolian)</li>
    <li>Shawn Mendes – Señorita (A Aeolian)</li>
  </ul>

  <h3><strong>Locrian mode</strong></h3>
  <p>
    The Locrian mode starts on the seventh degree of the major scale. The scale
    corresponds to a natural minor scale with a lowered second and fifth degree.
    <img src={scal20} className="scale-img" alt="Minor pentatonic" />
  </p>
  <p>
    A characteristic of the Locrian mode is the minor third degree, the minor second
    degree, and the diminished fifth degree.
  </p>
  <p>
    Usually, the Locrian mode is used only briefly and typically in connection with
    diminished chords.
  </p>
</div>


           

          
{/* 7 CHROMATIC */}
            <div className="scale-card" ref={chromaticRef}>
                <h2>7. Chromatic scale</h2>
                <p>
                    A chromatic scale consists of all of the twelve different notes. The distance between each note is a half step (1). Below is a chromatic scale from the note C:
                </p>
                <img src={scal21} className="scale-img" alt="Minor pentatonic" />
                <p>A characteristic of the chromatic scale is the uniform distance between all notes. All notes are balanced, and no specific note is experienced as the root note. The scale is common in both classical music and jazz, but usually only a short segment of the scale is used.

                    There is only one version of the chromatic scale. Regardless of the starting note, the notes are the same. An ascending chromatic scale is usually notated with sharps (♯) and a descending chromatic scale with flats (♭).
                    <br></br><br></br>
                    Some examples of music pieces with a lot of chromaticism are:
                    <ul>
                        <li>Georges Bizet: ‘Habanera’ from Carmen, 1875.</li>
                        <li> Nikolai Rimsky-Korsakov: ‘Flight of the Bumblebee’, 1900.</li>
                        <li>   Metallica: ‘Master of Puppets’, 1986.</li>
                    </ul>
                </p>
            </div>

            {/* 8 WHOLE TONE */}
            <div className="scale-card" ref={wholeRef}>
                <h2>8. Whole-tone scale</h2>
                <p>
                    A whole-tone scale consists of six different notes in the pattern 2-2-2-2-2-2. The distance between all notes is a whole step (2). Below is a C whole-tone scale:
                </p>
            <img src={scal22} className="scale-img" alt="Minor pentatonic" />
                <p>A characteristic of the whole-tone scale is the uniform distance between all notes. All notes are balanced, and no specific note is experienced as the root note. The scale is primarily used in classical music and jazz, but it has a limited scope.

                    There are only two versions of the whole-tone scale. One version has C as the starting note, while the other has D♭ as the starting note. A whole-tone scale with any other starting note has the same notes as one of these two versions.
                    <br></br><br></br>
                    Some examples of music pieces with multiple whole steps are:
                    <ul>
                       <li> Claude Debussy: ‘Voiles’, 1909.</li>
                       <li>Thelonious Monk: ‘Four In One’, 1951.</li>
                      <li>  King Crimson: ‘Red’, 1974.</li></ul>
                </p>
            </div>

            {/* 9 OTHER */}
           <div className="scale-card" ref={otherRef}>
  <h2>9. Other scales</h2>

  <p>
    There are many other scales than the ones mentioned above. However, most are
    rarely used in the Western world. Among the most common other scales are:
  </p>

  <h3><strong>Diminished scales</strong></h3>

  <p>
    A half-whole diminished scale consists of eight notes at a distance of
    alternately a half step (1) and a whole step (2). Below is a C half-whole
    diminished scale:
         <img src={scal23} className="scale-img" alt="Minor pentatonic" />
  </p>

  <p>
    A whole-half diminished scale consists of eight notes at a distance of
    alternately a whole step (2) and a half step (1). Below is a C whole-half
    diminished scale:
    <img src={scal24} className="scale-img" alt="Minor pentatonic" />
  </p>

  <p>
    A characteristic of the diminished scales is the alternation between whole
    steps and half steps, and that they are composed of two diminished seventh
    chords. In the scale above, the notes C, E♭, G♭, and A constitute one
    diminished seventh chord and the remaining four notes constitute the other
    diminished seventh chord.
  </p>

  <p>
    The diminished scales are primarily used in jazz, blues, and rock in
    connection with diminished seventh chords.
  </p>

  <h3><strong>Bebop scales</strong></h3>

  <p>
    A bebop dominant scale consists of eight different notes in the pattern
    2-2-1-2-2-1-1-1. Below is a C bebop dominant scale:
     <img src={scal25} className="scale-img" alt="Minor pentatonic" />
  </p>

  <p>
    A bebop major scale consists of eight different notes in the pattern
    2-2-1-2-1-1-2-1. Below is a C bebop major scale:
     <img src={scal26} className="scale-img" alt="Minor pentatonic" />
  </p>

  <p>
    A characteristic of the two bebop scales is the chromatic passing note that
    separates the scales from a major scale. The scales are primarily used in
    jazz.
  </p>

  <h3><strong>Harmonic major scale</strong></h3>

  <p>
    A harmonic major scale consists of seven different notes in the pattern
    2-2-1-2-1-3-1. The scale corresponds to a major scale with a lowered sixth
    degree. Below is a C harmonic major scale:
     <img src={scal30} className="scale-img" alt="Minor pentatonic" />
  </p>

  <p>
    A characteristic of the harmonic major scale is the major third degree which
    characterizes major, and the augmented second between the sixth and seventh
    degree.
  </p>

  <p>
    The harmonic major scale is primarily used in jazz.
  </p>

  <h3><strong>Hungarian minor scale</strong></h3>

  <p>
    A Hungarian minor scale (also called a double harmonic minor scale) consists
    of seven different notes in the pattern 2-1-3-1-1-3-1. The scale corresponds
    to a natural minor scale with a raised fourth and seventh degree. Below is a
    C Hungarian minor scale:
      <img src={scal28} className="scale-img" alt="Minor pentatonic" />
  </p>

  <p>
    A characteristic of the Hungarian minor scale is the minor third degree,
    which characterizes minor, and the two augmented seconds between the third
    and fourth degree as well as the sixth and seventh degree.
  </p>

  <p>
    The scale is primarily used in traditional music from Eastern Europe and
    Indian classical music.
  </p>
</div>

        </div>
    );
}
