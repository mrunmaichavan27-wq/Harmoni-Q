import React, { useRef } from "react";
import "./Keys.css";
import key1 from "../images/key1.jpg";
import key2 from "../images/key2.jpg";
import key3 from "../images/key3.jpg";
import key4 from "../images/key4.jpg";
import key5 from "../images/key5.jpg";
import key6 from "../images/key6.jpg";
import key7 from "../images/key7.jpg";
import key8 from "../images/key8.jpg";
import key9 from "../images/key9.jpg";
import key10 from "../images/key10.jpg";
import key11 from "../images/key11.jpg";
import key12 from "../images/key12.jpg";
import key13 from "../images/key13.jpg";
import key14 from "../images/key14.jpg";
import key15 from "../images/key15.jpg";
import key16 from "../images/key16.jpg";
import key17 from "../images/key17.jpg";
import key18 from "../images/key18.jpg";
import key19 from "../images/key19.jpg";
import key20 from "../images/key20.jpg";
import key21 from "../images/key21.jpg";
import key22 from "../images/key22.jpg";
import key23 from "../images/key23.jpg";
import key24 from "../images/key24.jpg";
import key25 from "../images/key25.jpg";
import key26 from "../images/key26.jpg";
import key27 from "../images/key27.jpg";
import key28 from "../images/key28.jpg";
import key29 from "../images/key29.jpg";
import key30 from "../images/key30.jpg";

export default function Keys() {
    const majorMinorRef = useRef(null);
    const signaturesRef = useRef(null);
    const chordsInKeyRef = useRef(null);
    const identificationRef = useRef(null);
    const modesRef = useRef(null);
    const modulationRef = useRef(null);
    const transpositionRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="keys-page">
            {/* MAIN TITLE */}
            <h1 className="keys-title">Keys</h1>

            {/* INTRO CARD */}
            <div className="keys-card">
                <h1>Introduction</h1>
                <p>
                    A key is a group of notes on which a piece of music is based. A piece of music can use all the notes in the key, or an extract from the notes and sometimes involve other notes. Most popular music is written in a single key, but some pieces of music change key along the way
                </p>

                {/* CONTENTS */}
                <div className="contents-box">
                    <h3>Contents</h3>
                    <ol>
                        <li onClick={() => scrollToSection(majorMinorRef)}>Major and minor keys</li>
                        <li onClick={() => scrollToSection(signaturesRef)}>Key signatures</li>
                        <li onClick={() => scrollToSection(chordsInKeyRef)}>Chords in a key</li>
                        <li onClick={() => scrollToSection(identificationRef)}>Key identification</li>
                        <li onClick={() => scrollToSection(modesRef)}>Music modes</li>
                        <li onClick={() => scrollToSection(modulationRef)}>Modulation</li>
                        <li onClick={() => scrollToSection(transpositionRef)}>Transposition</li>
                    </ol>
                </div>
            </div>

            {/* ========== 1. MAJOR & MINOR KEYS ========== */}
            <div className="keys-card" ref={majorMinorRef}>
                <h2>1. Major and minor keys</h2>

                <p>
                    A distinction is made between major keys and minor keys. Major keys are based
                    on a major scale, and minor keys are based on a natural minor scale. For
                    example, the key of C major consists of the notes from the C major scale, and
                    the key of A minor consists of the notes from the A natural minor scale.
                </p>

                <p>
                    The first note in the scale is called the root note or the tonic, and it is
                    also the root note of the key. The root note is the central note to which all
                    other notes in the key are related. It is a stable resting place on which the
                    melody can settle.
                </p>

                <p>
                    Below is the melody of the English lullaby ‘Twinkle, Twinkle, Little Star’.
                    The melody consists of the notes C, D, E, F, G, and A — all of which belong to
                    the key of C major:
                </p>

                <img src={key1} alt="Twinkle Twinkle melody" className="keys-img" />

                <p>
                    When listening to the melody, the note C is experienced as the natural end
                    where the melody comes to rest. Therefore, it is evident that the root note is
                    C, and the key is C major.
                </p>

                <p>
                    Musical compositions in major keys often sound happy and uplifting. Musical
                    compositions in minor keys often sound sad and melancholic.
                </p>

                {/* Relative Keys */}
                <h3><strong>Relative keys</strong></h3>

                <p>
                    A major and minor key are relative to each other when they share all the same
                    notes. For example, the keys of G major and E minor are relative to each other:
                </p>

                <img src={key2} alt="Twinkle Twinkle melody" className="keys-img" />

                <p>
                    Each major key has a relative minor key and vice versa. The root note of the
                    relative minor key is a minor third below the root note of the major key. In
                    the example above, the root note E falls a minor third below the root note G.
                </p>

                {/* Parallel Keys */}
                <h3><strong>Parallel keys</strong></h3>

                <p>
                    A major and minor key are parallel to each other when they share the same root
                    note. For example, the keys of C major and C minor are parallel to each other:
                </p>

                <img src={key3} alt="Twinkle Twinkle melody" className="keys-img" />

                <p>
                    Parallel keys have different notes. Minor keys differ from major keys in that
                    the third, sixth, and seventh degrees in the key are lowered by a half step.
                </p>
            </div>


            {/* ========== 2. KEY SIGNATURES ========== */}
            <div className="keys-card" ref={signaturesRef}>
                <h2>2. Key signatures</h2>

                <p>
                    In music notation the keys are indicated with a key signature at the beginning of the staff immediately after the clef. The key signatures determine the notes of the music piece, and thus either a major key or its relative minor key.

                    Below is an overview of the keys and key signatures. The relative keys C major and A minor have no sharps or flats in the key signature. All other keys have between one and seven sharps or flats. Keys with up to three sharps or flats are the most common.<br></br><br></br>

                    The circle of fifths is a helpful visual aid tool to remember the keys and their key signatures. If you remember the major keys, you can easily find the relative minor keys by going down a minor third from the root note of the major key.
                </p>
                <div className="triad-table-wrapper">
                    <table className="triad-table">
                        <thead>
                            <tr>
                                <th>Major</th>
                                <th>Minor</th>
                                <th>Sharps or flats</th>
                                <th>Key signature</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>C major</td>
                                <td>A minor</td>
                                <td>0</td>
                                <td >
                                    <img src={key4} alt="Twinkle Twinkle melody" className="keys-img" />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3><strong>Sharp key signatures</strong></h3>
                <p>
                    Each time the root note is raised by a perfect fifth from C major, a sharp is added to the key. For example, the key of G major (a perfect fifth above C major) has one sharp, and the key of D major (two perfect fifths above C major) has two sharps.<br></br><br></br>

                    The root note of a major key falls a half step above the last sharp in the key signature. The order of the sharps can be remembered with the saying ‘Father Charles Goes Down And Ends Battle’. Below is an overview of sharp key signatures:

                </p>
                {/* 🔹 SHARP KEYS TABLE */}
                <div className="triad-table-wrapper">
                    <table className="triad-table">
                        <thead>
                            <tr>
                                <th>Major</th>
                                <th>Minor</th>
                                <th>Number of sharps</th>
                                <th>Sharp notes</th>
                                <th>Key signature</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* ⭐ G major */}
                            <tr>
                                <td>G major</td>
                                <td>E minor</td>
                                <td>1</td>
                                <td>F♯</td>
                                <td>
                                    <img src={key5} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ D major */}
                            <tr>
                                <td>D major</td>
                                <td>B minor</td>
                                <td>2</td>
                                <td>F♯, C♯</td>
                                <td>
                                    <img src={key6} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ A major */}
                            <tr>
                                <td>A major</td>
                                <td>F♯ minor</td>
                                <td>3</td>
                                <td>F♯, C♯, G♯</td>
                                <td>
                                    <img src={key7} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ E major */}
                            <tr>
                                <td>E major</td>
                                <td>C♯ minor</td>
                                <td>4</td>
                                <td>F♯, C♯, G♯, D♯</td>
                                <td>
                                    <img src={key8} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ B major */}
                            <tr>
                                <td>B major</td>
                                <td>G♯ minor</td>
                                <td>5</td>
                                <td>F♯, C♯, G♯, D♯, A♯</td>
                                <td>
                                    <img src={key9} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ F♯ major */}
                            <tr>
                                <td>F♯ major</td>
                                <td>D♯ minor</td>
                                <td>6</td>
                                <td>F♯, C♯, G♯, D♯, A♯, E♯</td>
                                <td>
                                    <img src={key10} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ C♯ major */}
                            <tr>
                                <td>C♯ major</td>
                                <td>A♯ minor</td>
                                <td>7</td>
                                <td>F♯, C♯, G♯, D♯, A♯, E♯, B♯</td>
                                <td>
                                    <img src={key11} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <h3><strong>Flat key signatures</strong></h3>
                <p>
                    Each time the root note is lowered by a perfect fifth from C major, a flat is added to the key. For example, the key of F major (a perfect fifth below C major) has one flat, and the key of B-flat major (two perfect fifths below C major) has two flats.<br></br><br></br>

                    The root note of a major key is identical with the second last notated flat in the key signature (with the exception of F major). The order of the flats can be remembered with the saying ‘Battle Ends And Down Goes Charles' Father’. Please note that it corresponds to the order of sharps but in reverse order. Below is an overview of flat key signatures:
                </p>
                {/* 🔹 FLAT KEYS TABLE */}
                <div className="triad-table-wrapper">
                    <table className="triad-table">
                        <thead>
                            <tr>
                                <th>Major</th>
                                <th>Minor</th>
                                <th>Number of flats</th>
                                <th>Flat notes</th>
                                <th>Key signature</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* ⭐ F major */}
                            <tr>
                                <td>F major</td>
                                <td>D minor</td>
                                <td>1</td>
                                <td>B♭</td>
                                <td>
                                    <img src={key12} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ B♭ major */}
                            <tr>
                                <td>B♭ major</td>
                                <td>G minor</td>
                                <td>2</td>
                                <td>B♭, E♭</td>
                                <td>
                                    <img src={key13} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ E♭ major */}
                            <tr>
                                <td>E♭ major</td>
                                <td>C minor</td>
                                <td>3</td>
                                <td>B♭, E♭, A♭</td>
                                <td>
                                    <img src={key14} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ A♭ major */}
                            <tr>
                                <td>A♭ major</td>
                                <td>F minor</td>
                                <td>4</td>
                                <td>B♭, E♭, A♭, D♭</td>
                                <td>
                                    <img src={key15} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ D♭ major */}
                            <tr>
                                <td>D♭ major</td>
                                <td>B♭ minor</td>
                                <td>5</td>
                                <td>B♭, E♭, A♭, D♭, G♭</td>
                                <td>
                                    <img src={key16} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ G♭ major */}
                            <tr>
                                <td>G♭ major</td>
                                <td>E♭ minor</td>
                                <td>6</td>
                                <td>B♭, E♭, A♭, D♭, G♭, C♭</td>
                                <td>
                                    <img src={key17} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                            {/* ⭐ C♭ major */}
                            <tr>
                                <td>C♭ major</td>
                                <td>A♭ minor</td>
                                <td>7</td>
                                <td>B♭, E♭, A♭, D♭, G♭, C♭, F♭</td>
                                <td>
                                    <img src={key18} alt="Twinkle Twinkle melody" className="keys-img" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <h3><strong>Enharmonic keys</strong></h3>
                <p>Keys with an identical pitch (i.e. notes that fall on the same key on the piano) that have different names and notation are called enharmonic keys. The key of G-flat major and E-flat minor are the enharmonic equivalents to F-sharp major and D-sharp minor, respectively.<br></br>

                    Keys with seven sharps or flats (C-sharp major/A-sharp minor and C-flat major/A-flat minor) are rarely used. Normally, enharmonic equivalent keys are used (D-flat major/B-flat minor and B major/G-sharp minor) with five sharps or flats instead, as they are easier to read.</p>
            </div>

            {/* ========== 3. CHORDS IN A KEY ========== */}
            <div className="keys-card" ref={chordsInKeyRef}>
                <h2>3. Chords in a key</h2>

                <p>
                    The notes in any key can be composed to seven different triads: three major chords, three minor chords, and a diminished chord. The triads are composed by stacking two thirds on each note in the key.<br></br><br></br>

                    In major keys, the notes are made up of a major scale, and the chords at each degrees of the scale are major, minor, minor, major, major, minor, and diminished. Below are the chords in C major:
                </p>
                <img src={key19} alt="Twinkle Twinkle melody" className="keys-img" />

                <p>
                    Most pieces of music mainly use chords composed of notes from the piece of music’s key as they fit together well. Usually, the chords of the key's first, fourth, and fifth degree are most commonly used. In major keys, all three are major chords.<br></br><br></br>

                    In minor keys, the notes are made up of a natural minor scale and the chords at each degree of the scale are minor, diminished, major, minor, minor, major, and major. Below are the chords in A minor:.
                </p>
                <img src={key20} alt="Twinkle Twinkle melody" className="keys-img" />

                <p>
                    In minor keys, as in major keys, the chords of first, fourth, and fifth degree are most commonly used. In minor keys all three are minor chords. However, in minor keys it is common to play the chord on fifth degree as a major chord instead of a minor chord. By changing the chord to a major chord, the leading tone of the key is included in the chord, which then has a greater force of attraction towards the chord on the first degree.<br></br><br></br>

                    In the example above, the chord on the fifth degree is an Em (consisting of the notes E, G, and B). By changing the chord to E (consisting of the notes E, G♯, and B), the note G♯ is included in the chord, which is the leading tone to A, which is the root note of the key.<br></br><br></br>

                    Relative keys such as C major and A minor share all the same notes and chords, but the chords used most on the first, fourth and fifth degree of the key are different. In C major the chords most used are C, F and G, and in A minor they are Am, Dm, and Em (or E if the chord is played as a major chord).

                    The chords in a key can be varied by adding one or more notes. It is relatively common to add a seventh to the chords, especially to the chord on the fifth degree. Below are the chords in C major with an added seventh:
                </p>
                <img src={key21} alt="Twinkle Twinkle melody" className="keys-img" />
                <p>
                    The chords at each stage of the major keys are called tonic chord, supertonic chord, mediant chord, subdominant chord, dominant chord, submediant chord, and leading-tone chord. In minor keys, the chords have the same names, except for the last chord, which is called the subtonic chord, because minor keys do not have a leading tone on the seventh degree.
                </p>
                <h3><strong>Overview of the chords</strong>
                </h3>
                <p>Below is an overview of the chords for each of the seven degrees in major keys with up to six sharps or flats. The circle of fifths is a helpful visual tool to find the chords in a key.</p>
                <div className="triad-table-wrapper">
                    <table className="triad-table">
                        <thead>
                            <tr>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>C</td>
                                <td>Dm</td>
                                <td>Em</td>
                                <td>F</td>
                                <td>G</td>
                                <td>Am</td>
                                <td>Bº</td>
                            </tr>

                            <tr>
                                <td>D♭</td>
                                <td>E♭m</td>
                                <td>Fm</td>
                                <td>G♭</td>
                                <td>A♭</td>
                                <td>B♭m</td>
                                <td>Cº</td>
                            </tr>

                            <tr>
                                <td>D</td>
                                <td>Em</td>
                                <td>F♯m</td>
                                <td>G</td>
                                <td>A</td>
                                <td>Bm</td>
                                <td>C♯º</td>
                            </tr>

                            <tr>
                                <td>E♭</td>
                                <td>Fm</td>
                                <td>Gm</td>
                                <td>A♭</td>
                                <td>B♭</td>
                                <td>Cm</td>
                                <td>Dº</td>
                            </tr>

                            <tr>
                                <td>E</td>
                                <td>F♯m</td>
                                <td>G♯m</td>
                                <td>A</td>
                                <td>B</td>
                                <td>C♯m</td>
                                <td>D♯º</td>
                            </tr>

                            <tr>
                                <td>F</td>
                                <td>Gm</td>
                                <td>Am</td>
                                <td>B♭</td>
                                <td>C</td>
                                <td>Dm</td>
                                <td>Eº</td>
                            </tr>

                            <tr>
                                <td>F♯</td>
                                <td>G♯m</td>
                                <td>A♯m</td>
                                <td>B</td>
                                <td>C♯</td>
                                <td>D♯m</td>
                                <td>E♯º</td>
                            </tr>

                            <tr>
                                <td>G♭</td>
                                <td>A♭m</td>
                                <td>B♭m</td>
                                <td>C♭</td>
                                <td>D♭</td>
                                <td>E♭m</td>
                                <td>Fº</td>
                            </tr>

                            <tr>
                                <td>G</td>
                                <td>Am</td>
                                <td>Bm</td>
                                <td>C</td>
                                <td>D</td>
                                <td>Em</td>
                                <td>F♯º</td>
                            </tr>

                            <tr>
                                <td>A♭</td>
                                <td>B♭m</td>
                                <td>Cm</td>
                                <td>D♭</td>
                                <td>E♭</td>
                                <td>Fm</td>
                                <td>Gº</td>
                            </tr>

                            <tr>
                                <td>A</td>
                                <td>Bm</td>
                                <td>C♯m</td>
                                <td>D</td>
                                <td>E</td>
                                <td>F♯m</td>
                                <td>G♯º</td>
                            </tr>

                            <tr>
                                <td>B♭</td>
                                <td>Cm</td>
                                <td>Dm</td>
                                <td>E♭</td>
                                <td>F</td>
                                <td>Gm</td>
                                <td>Aº</td>
                            </tr>

                            <tr>
                                <td>B</td>
                                <td>C♯m</td>
                                <td>D♯m</td>
                                <td>E</td>
                                <td>F♯</td>
                                <td>G♯m</td>
                                <td>A♯º</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {/* ========== 4. KEY IDENTIFICATION ========== */}
            <div className="keys-card" ref={identificationRef}>
                <h2>4. Key identification</h2>

                <p>
                    The key of a piece of music can be found by examining the key signature, chords, and melody of the piece. Studying the piece of music’s chords and, if possible, its key signature will often suffice for determining the key. Please note that the key may change throughout the piece of music (see section 6).
                </p>

                <h3><strong>Key signatures</strong></h3>
                <p>
                    If the piece of music is available as sheet music, the key signature establishes a specific major key or its relative minor key (see section 2). To determine whether the key is major or minor, the chords and, sometimes the melody must be examined.<br></br><br></br>

                    Any accidentals do not normally affect the key. Accidentals are relatively common in almost all musical genres. If the key changes along the way, normally you will not use accidentals, but introduce a new key signature.
                </p>

                <h3><strong>Chords</strong></h3>
                <p>
                    Most pieces of music both start and end with the chord on the first degree of the key. Therefore, if a piece of music starts and ends with the chord Cm, for example, it is a clear indication that the key is C minor.<br></br><br></br>

                    Pieces of music primarily use the chords on the first, fourth, and fifth degree of the key (see section 3). The chords can thus establish a specific key, and at the same time they allow for a separation of a major key from its relative minor key.<br></br><br></br>

                    For example, the keys of C major and A minor share the same key signature, but the primary chords on the first, fourth, and fifth degree are different. In C major, the primary chords are C, F, and G, and in A minor they are Am, Dm, and Em (the latter is often played as a major chord).

                    In the example below from ‘Imagine’ (John Lennon, 1971), the key signature indicates that the key is either C major, or A minor. The chords confirm that the key is C major:
                </p>
                <img src={key22} alt="Twinkle Twinkle melody" className="keys-img" />
                <h3><strong>Melody</strong></h3>
                <p>The melody of a piece of music does not necessarily use all seven different notes in the key. Often, however, very few notes will suffice for determining the scale and thereby narrowing the possible keys.

                    For example, if a melody uses the notes E and F, the key can only be C major, F major, or one of their two relative minor keys. It cannot be a sharp key because the note F has a sharp in all sharp keys. It cannot be a flat key with two or more flats because the note E has a flat in all these keys.<br></br><br></br>

                    In some cases, minor keys are recognized by the use of accidentals in the melody. This is because the leading tone on the seventh degree in minor keys can only be notated using an accidental. For example, the key of A minor has no sharps or flats in the key signature, but the leading tone G♯ is notated using an accidental.<br></br><br></br>

                    The melody often strives towards the root note and often falls to rest on the root note, without the listener feeling the need for the melody to continue. Furthermore, the last note of the melody is often the same as the root note. The notes and movement of the melody can thereby determine the key.</p>
            </div>

            {/* ========== 5. MUSIC MODES ========== */}
            <div className="keys-card" ref={modesRef}>
                <h2>5. Music modes</h2>

                <p>
                    Most music is written in a major key or minor key, but there is also music written in one of the music modes. The music modes are the seven scales originating from the Middle Ages which today are used mainly in folk music, jazz, and rock. Their names are Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian.<br></br><br></br>

                    The music modes consist of the same notes as a major scale, but they start on each of the seven degrees of the major scale. For example, a C major scale (C, D, E, F, G, A, and B) contain D Dorian on the second degree (D, E, F, G, A, B, and C) and G Mixolydian on the fifth degree (G, A, B, C, D, E, and F). If you don’t know them, you can read about the music modes in the text about scales.<br></br><br></br>

                    For each major scale there is a relative minor scale with the same notes. Likewise, there are seven music modes with the same notes for each major scale. Therefore, music modes cannot be identified based on the notes alone. It is also necessary to determine the root note.<br></br><br></br>

                    In the example below, the folk tune ‘What Shall We Do’ has no sharps or flats in the key signature and uses all seven different natural notes (C, D, E, F, G, A, and B). Normally, this means that the key is C major or A minor, but it is clearly heard that the root note is a D. The note D falls on the second degree of the key C major, and therefore the key is D Dorian:
                </p>
                <img src={key23} alt="Twinkle Twinkle melody" className="keys-img" />

                <h3><strong>Notation of music modes</strong></h3>
                <p>Music modes can be notated in two ways. Sometimes, music modes are notated with the same key signature as the major key with which they share the notes. This is the case in the example above, where D Dorian is notated with no sharps or flats in the key signature, like C major, because it shares all the same notes with C major.<br></br><br></br>

                    In other cases, the music modes are notated with the same key signature as the major or minor key with which they share the root note. With this method of notation, D Dorian is notated with the same key signature as D minor, because it shares the root note with D minor. Below is the example from earlier in D Dorian, but this time notated with the same key signature as D minor:</p>
                <img src={key24} alt="Twinkle Twinkle melody" className="keys-img" />
                <p>The advantage of the latter notation method is that the key signature gives an indication of the root note of the piece of music, because the key signature belongs to the minor key with the same root note. The disadvantage is that the key signature does not reflect the notes and therefore accidentals must be used to correct the notes afterwards.<br></br><br></br>

                    The music modes Lydian and Mixolydian are often notated with the key signature as the major key with which they share root note, because there is only one note’s difference and because the need for accidentals therefore is small. For example, the only difference between G Mixolydian (G, A, B, C, D, E, and F) and G major (G, A, B, C, D, E, and F♯) is the last note.<br></br><br></br>

                    The music modes Dorian and Phrygian are often notated with the same key signature as the minor key with which they share the root note, because there is only one note’s difference and because the need for accidentals therefore is small. For example, the only difference between D Dorian (D, E, F, G, A, B, and C) and D minor (D, E, F, G, A, B♭, and C) is the second-last note.</p>
                <h3><strong>The relation to major and minor keys</strong></h3>
                <p>
                    The Ionian mode is identical to the major scale, and the Aeolian mode is identical to the natural minor scale. For example, C Ionian is identical to C major and A Aeolian is identical to A natural minor. In other words, the major and minor keys are a continuation of the music modes Ionian and Aeolian, but with new names.<br></br><br></br>

                    Some people do not distinguish between major and Ionian or minor and Aeolian. They use the names synonymously. Others attach particular importance to the music modes because they originate in the modal music of the Middle Ages. They only use the names of the music modes in connection with modal music, new and old.
                </p>
            </div>

            {/* ========== 6. MODULATION ========== */}
            <div className="keys-card" ref={modulationRef}>
                <h2>6. Modulation</h2>

                <p>
                    A modulation is a change from one key to another. When a piece of music changes the key, it is said that the piece of music modulates to a new key. Modulations are relatively common in most music, but are used especially in longer pieces of classical music to create variation, momentum and provide renewed energy to the music.<br></br><br></br>

                    A modulation is recognized by a change in the notes of the piece of music. It can be expressed by using new chords and notes in the melody, which do not belong to the existing key. In music notation, modulations usually involve either a change of key signature or the introduction of accidentals.<br></br><br></br>

                    An exception to this is modulations to the relative key, which use the same notes as the main key. In this case, there is no change to the notes and the key signature, but the melody and the chords adapt to the new root note. In practice, this means, among other things, that the primary chords on the first, fourth, and fifth degree change.<br></br><br></br>

                    In the following example from ‘You'll Be in My heart’ (Phil Collins, 1999) the piece of music modulates from F-sharp major in the verse to E-flat major in the chorus. The modulation is reflected by a change of the key signature and by a change of the chords above the staff. The chords B♭, E♭, and A♭/E♭ belong to the new key:
                </p>
                <img src={key25} alt="Twinkle Twinkle melody" className="keys-img" />
                <p>If a piece of music changes its key briefly, it is usually called a tonicization rather than a modulation. In a tonicization the new key is abandoned fairly quickly, usually returning to the original key, therefore the key is not established.</p>
                <h3><strong>Common modulations</strong></h3>
                <p>Some modulations are more common than others. In popular music, one of the most common modulations is a modulation to the key a half step or a whole step above the existing key. This modulation is often used in the last chorus to give the song a boost, so the listener experiences it with renewed energy.<br></br><br></br>

                    ‘Love on Top’ (Beyoncé, 2011) is an example of a song that modulates up a half step several times. The chorus repeats four times at the end of the song, each time modulated up a half step. The key of the song is C major, and the last four choruses are in D-flat major, D major, E-flat major and E major, respectively.<br></br><br></br>

                    Another common modulation in both classical and popular music is a modulation to the relative key. Since the two keys share all the same notes, this modulation is not significantly experienced. A characteristic of this modulation is a change from major to minor and vice versa.<br></br><br></br>

                    ‘Mirrors’ (Justin Timberlake, 2009) is an example of a song that modulates to the relative key. The key of the song is C minor, but in all the choruses the song modulates to E-flat major. After each chorus, the song modulates back to C minor.<br></br><br></br>

                    A third and relatively common modulation in both classical and popular music is a modulation to the parallel key. Since the two keys have different notes, this modulation is experienced as more significant than a modulation to the relative key. In popular music, this modulation is often used between verse and chorus.<br></br><br></br>

                    ‘Happy Together’ (The Turtles, 1967) is an example of a song that modulates to the parallel key. The key of the song is F-sharp minor, but in all the choruses the song modulates to F-sharp major. The modulation from minor to major adds a positive energy to the song's chorus.<br></br><br></br>

                    In classical music, it is also common to modulate to the dominant key (up a perfect fifth) and to the subdominant key (down a perfect fifth). These keys are closely related to the main key, as the only difference is one note making it easy to create a smooth transition to the new key.</p>

                <h3><strong>Types of modulation</strong></h3>
                <p>
                    Basically, there are two different types of modulation:
                    <ul>
                        <li> Direct modulation (also called phrase modulation). A modulation directly to the new key without any prior notice or preparation.</li>
                        <li>  Common chord modulation (also called pivot chord modulation). A modulation to the new key using one or more chords belonging to both keys.</li>
                    </ul>

                </p>
                <p>The direct modulation is the most common type of modulation in popular music. The above songs, ‘Love on Top’ and ‘Happy together’ are both examples of direct modulations. Another example is ‘Wouldn’t It Be Nice’ (The Beach Boys, 1966), which suddenly modulates from A major to F major, when the song starts:</p>
                <img src={key26} alt="Twinkle Twinkle melody" className="keys-img" />
                <p>The common chord modulation is more common in classical music, but is also used in popular music. The chords used to create a smooth transition from one key to another are called pivot chords. For example, the chord Fm belongs to both C minor (fourth degree) and F minor (first degree), and can therefore be used as a pivot chord.<br></br><br></br>

                    In the example below, ‘Save me’ (Queen, 1980) modulates the piece of music from G major in the verse to D major in the chorus. The pivot chords G and D are used in the transition between the two keys. The chords fall on the first and fifth degree in G major and on the fourth and first degree in D major:</p>
                <img src={key27} alt="Twinkle Twinkle melody" className="keys-img" />
                <p>Common chord modulations often take place between keys that are closely related with many chords in common. The more chords two keys have in common, the better is the possibility of using pivot chords for the modulation.</p>

            </div>

            {/* ========== 7. TRANSPOSITION ========== */}
            <div className="keys-card" ref={transpositionRef}>
                <h2>7. Transposition</h2>

                <p>
                    Transposition is the process of moving a piece of music from one key to another. In practice, this means that all notes and chords move a specific interval up or down. For example, a transposition from C major to E-flat major involves moving all notes and chords up a minor third because there is a minor third from C up to E-flat.<br></br><br></br>

                    A transposition changes the pitch of the notes only, and not the structure of the notes and chords. In other words, the piece of music remains the same but is moved to a higher or lower register. In the example below, the English lullaby ‘Twinkle, Twinkle, Little Star’ is first played in C major and then transposed to E-flat major:
                </p>
                <img src={key28} alt="Twinkle Twinkle melody" className="keys-img" />

                <p>
                    Transposition is used in many situations, such as:
                    <ul>
                      <li>  If a song is too high or low for a singer. The song is transposed to a key with a register that better matches the singer's voice.</li>
                      <li>  If a piece of music is difficult to play because it has a key signature with many sharps or flats. The piece of music is transposed into a simpler key.</li>
                      <li>  If two musicians are going to play together, but have each learned a piece of music in a different key. One musician transposes the piece of music to the other's key.</li>
                       </ul><br></br><br></br>
                        If a piece of music is available in music notation software, it is often possible to transpose the piece of music to a different key automatically. Alternatively, there are several methods of transposition, as described below. Combining the methods can be useful.
                   
                </p>

                <h3><strong>Transposition using intervals</strong></h3>
                <p>
                    All notes and chords are moved up or down an interval corresponding to the distance between the keys. For example, if a piece of music is to be transposed from C major to E major, all notes and chords must be moved up a major third.<br></br><br></br>

Here is an example of four chords in C major: C, Dm, G7, and Am. Here, the same four chords have moved up a major third to E major: E, F♯m, B7, and C♯m. Please note that the transposition only changes the root notes and not the chord types.
                </p>
                <h3><strong>Transposition using movements</strong></h3>
  <p>
    The first note and chord are moved up or down an interval corresponding to the 
    distance between the keys. The subsequent notes and chords are transposed by 
    copying the intervallic movement from note to note and chord to chord.
  </p>

  <p>
    Here is an example of four chords in D major: <strong>D, Em7, F♯m,</strong> and 
    <strong> G</strong>. The root note of the chords moves stepwise up in the key. 
    When transposed to C major, the same stepwise motion becomes: 
    <strong> C, Dm7, Em,</strong> and <strong>F</strong>.
  </p>

  {/* METHOD 2 */}
  <h3><strong>Transposition using degrees</strong></h3>
  <p>
    All notes and chords are moved from the degree of the existing key to the 
    corresponding degree in the new key. For example, to transpose a chord on the 
    fourth degree in G major to F major, it must be moved to the fourth degree in F major.
  </p>

  <p>
    Example: Four chords in G major appear on the first, second, fifth, and sixth degrees:
    <strong> G, Am7, D7,</strong> and <strong>Em</strong>.  
    Transposed to the same degrees in F major, they become:  
    <strong> F, Gm7, C7,</strong> and <strong>Dm</strong>.
  </p>

  {/* METHOD 3 */}
  <h3><strong>Transposition using key signatures</strong></h3>
  <p>
    This method can only be used when sheet music is available.  
    The key signature at the beginning of the staff is changed to the new key.  
    All notes and chords are then moved up or down a number of degrees corresponding 
    to the interval between the keys. Accidentals are ignored during the initial shift.
  </p>

  <p>
    Finally, notes with accidentals are corrected.  
    If a note in the original key has an accidental, the note is adjusted in the 
    transposed version as well.Below is an example from ‘The Entertainer’ (Scott Joplin, 1902) in C major:
     <img src={key29} alt="Twinkle Twinkle melody" className="keys-img" />
  </p>

  <p>
   In the following example, the piece of music is transposed to A major. The transposition has been done by changing the key signatures to three sharps, and by moving all notes down three degrees (because there are three degrees from C down to A). Finally, the two notes with an accidental are raised a half step, just as they are in the original key:
     <img src={key30} alt="Twinkle Twinkle melody" className="keys-img" />
  </p>

  <p>
    In the example above, the accidentals remain the same after transposition, but this 
    is not always the case. If a note has a flat in the new key signature, it must be 
    corrected using a natural sign rather than a sharp.
  </p>
            </div>
        </div>
    );
}
