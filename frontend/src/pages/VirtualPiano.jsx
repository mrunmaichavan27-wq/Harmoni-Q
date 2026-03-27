// import React, { useState, useEffect, useCallback, useRef } from "react";
// import "./VirtualPiano.css";

// /* ================= DATA ================= */

// const NOTES = ["C", "D", "E", "F", "G", "A", "B"];
// const BLACK_KEYS = ["C#", "D#", null, "F#", "G#", "A#", null];

// /* ===== KEYBOARD MAP ===== */

// const KEYBOARD_MAP = {
//   /* WHITE KEYS */
//   z: { note: "C", octave: 3 },
//   x: { note: "D", octave: 3 },
//   c: { note: "E", octave: 3 },

//   q: { note: "F", octave: 3 },
//   w: { note: "G", octave: 3 },
//   e: { note: "A", octave: 3 },
//   r: { note: "B", octave: 3 },
//   t: { note: "C", octave: 4 },
//   y: { note: "D", octave: 4 },
//   u: { note: "E", octave: 4 },
//   i: { note: "F", octave: 4 },
//   o: { note: "G", octave: 4 },
//   p: { note: "A", octave: 4 },
//   "[": { note: "B", octave: 4 },
//   "]": { note: "C", octave: 5 },

//   v: { note: "D", octave: 5 },
//   b: { note: "E", octave: 5 },
//   n: { note: "F", octave: 5 },
//   m: { note: "G", octave: 5 },
//   ",": { note: "A", octave: 5 },
//   ".": { note: "B", octave: 5 },

//   /* BLACK KEYS */
//   s: { note: "C#", octave: 3 },
//   d: { note: "D#", octave: 3 },

//   "2": { note: "F#", octave: 3 },
//   "3": { note: "G#", octave: 3 },
//   "4": { note: "A#", octave: 3 },

//   "6": { note: "C#", octave: 4 },
//   "7": { note: "D#", octave: 4 },

//   "9": { note: "F#", octave: 4 },
//   "0": { note: "G#", octave: 4 },
//   "-": { note: "A#", octave: 4 },

//   f: { note: "C#", octave: 5 },
//   g: { note: "D#", octave: 5 },

//   j: { note: "F#", octave: 5 },
//   k: { note: "G#", octave: 5 },
//   l: { note: "A#", octave: 5 }
// };

// /* ================= HELPERS ================= */

// const generateKeys = (octaves, startOctave = 3) => {
//   const keys = [];
//   for (let oct = startOctave; oct < startOctave + octaves; oct++) {
//     NOTES.forEach((note, index) => {
//       keys.push({ note, isBlack: false, octave: oct });
//       if (BLACK_KEYS[index]) {
//         keys.push({ note: BLACK_KEYS[index], isBlack: true, octave: oct });
//       }
//     });
//   }
//   return keys;
// };

// const getFrequency = (note, octave) => {
//   const noteMap = {
//     C: 0, "C#": 1, D: 2, "D#": 3, E: 4,
//     F: 5, "F#": 6, G: 7, "G#": 8,
//     A: 9, "A#": 10, B: 11
//   };
//   const n = (octave - 4) * 12 + (noteMap[note] - 9);
//   return 440 * Math.pow(2, n / 12);
// };

// /* ================= COMPONENT ================= */

// export default function Piano() {
//   const [showNotes, setShowNotes] = useState(true);
//   const [activeKeys, setActiveKeys] = useState(new Set());
//   const audioContextRef = useRef(null);
//   const pianoRef = useRef(null);

//   const keys = generateKeys(3, 3);
//   const whiteKeys = keys.filter(k => !k.isBlack);

//   useEffect(() => {
//     audioContextRef.current = new AudioContext();
//     pianoRef.current?.focus();
//     return () => audioContextRef.current?.close();
//   }, []);

//   const resumeAudio = () => {
//     if (audioContextRef.current?.state === "suspended") {
//       audioContextRef.current.resume();
//     }
//   };

//   const playNote = useCallback((note, octave) => {
//     const ctx = audioContextRef.current;
//     if (!ctx) return;

//     const osc = ctx.createOscillator();
//     const gain = ctx.createGain();

//     osc.frequency.value = getFrequency(note, octave);
//     osc.type = "triangle";

//     gain.gain.setValueAtTime(0.3, ctx.currentTime);
//     gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);

//     osc.connect(gain);
//     gain.connect(ctx.destination);

//     osc.start();
//     osc.stop(ctx.currentTime + 1);
//   }, []);

//   const triggerKey = (note, octave) => {
//     resumeAudio();
//     const id = `${note}${octave}`;

//     setActiveKeys(prev => new Set(prev).add(id));
//     playNote(note, octave);

//     setTimeout(() => {
//       setActiveKeys(prev => {
//         const s = new Set(prev);
//         s.delete(id);
//         return s;
//       });
//     }, 150);
//   };

//   /* ===== KEYBOARD SUPPORT ===== */

//   useEffect(() => {
//     const pressed = new Set();

//     const normalizeKey = (e) => {
//       if (/^[a-zA-Z]$/.test(e.key)) return e.key.toLowerCase();
//       return e.key;
//     };

//     const down = (e) => {
//       const key = normalizeKey(e);
//       if (pressed.has(key)) return;

//       const map = KEYBOARD_MAP[key];
//       if (map) {
//         e.preventDefault();
//         pressed.add(key);
//         triggerKey(map.note, map.octave);
//       }
//     };

//     const up = (e) => {
//       pressed.delete(normalizeKey(e));
//     };

//     const el = pianoRef.current;
//     if (!el) return;

//     el.addEventListener("keydown", down);
//     el.addEventListener("keyup", up);

//     return () => {
//       el.removeEventListener("keydown", down);
//       el.removeEventListener("keyup", up);
//     };
//   }, []);

//   /* ================= UI ================= */

//   return (
//     <div className="piano1-wrapper">
//       <h1 className="title">Virtual Piano</h1>

//       <div className="button-row">
//         <button className="btn-pink" onClick={() => setShowNotes(!showNotes)}>
//           {showNotes ? "Hide Notes" : "Show Notes"}
//         </button>
//       </div>

//       {/* PIANO */}
//       <div
//         className="piano-container"
//         ref={pianoRef}
//         tabIndex={0}
//         onMouseDown={() => pianoRef.current.focus()}
//       >
//         <div className="white-keys">
//           {whiteKeys.map((k) => {
//             const id = `${k.note}${k.octave}`;
//             return (
//               <div
//                 key={id}
//                 className={`white-key ${activeKeys.has(id) ? "active" : ""}`}
//                 onMouseDown={() => triggerKey(k.note, k.octave)}
//               >
//                 {showNotes && <span className="note-label">{k.note}</span>}
//               </div>
//             );
//           })}
//         </div>

//         <div className="black-keys-container">
//           {whiteKeys.map((k, i) => {
//             const valid = ["C", "D", "F", "G", "A"];
//             if (!valid.includes(k.note)) return null;

//             const note = k.note + "#";
//             const id = `${note}${k.octave}`;

//             return (
//               <div
//                 key={id}
//                 className={`black-key ${activeKeys.has(id) ? "active" : ""}`}
//                 style={{ left: i * 56 + 38 }}
//                 onMouseDown={() => triggerKey(note, k.octave)}
//               >
//                 {showNotes && <span className="note-label">{note}</span>}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* DESCRIPTION SECTION */}
//       <div className="piano-description">
//         <h2>Play Piano Using Your Keyboard</h2>

//         <p>
//           You can play the piano using your <strong>computer keyboard</strong> or
//           by clicking the piano keys with your mouse.
//         </p>

//         <p>
//           <strong>White Keys:</strong> Use letter keys like{" "}
//           <code>Z X C</code>, <code>Q W E R T Y U I O P [ ]</code> and{" "}
//           <code>V B N M , .</code> to play natural notes.
//         </p>

//         <p>
//           <strong>Black Keys:</strong> Use number and letter keys such as{" "}
//           <code>S D</code>, <code>2 3 4</code>, <code>6 7</code>,{" "}
//           <code>9 0 -</code>, <code>F G</code> and <code>J K L</code> to play
//           sharp and flat notes.
//         </p>

//         <p>
//           You can press <strong>multiple keys together</strong> to play chords.
//           Click on the piano once to activate keyboard control.
//         </p>
//       </div>
//     </div>
//   );
// }
