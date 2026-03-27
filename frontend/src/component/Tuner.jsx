import React, { useEffect, useRef, useState } from "react";
import "./Tuner.css";

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export default function Tuner({ onClose }) {
  const audioContext = useRef(null);
  const analyser = useRef(null);
  const buffer = useRef(null);

  const [note, setNote] = useState("--");
  const [freq, setFreq] = useState(0);
  const [detune, setDetune] = useState(0);

  useEffect(() => {
    startTuner();
    return stopTuner;
  }, []);

  const startTuner = async () => {
    audioContext.current = new AudioContext();
    analyser.current = audioContext.current.createAnalyser();
    analyser.current.fftSize = 2048;
    buffer.current = new Float32Array(analyser.current.fftSize);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = audioContext.current.createMediaStreamSource(stream);
    source.connect(analyser.current);

    detectPitch();
  };

  const stopTuner = () => {
    audioContext.current?.close();
  };

  const detectPitch = () => {
    analyser.current.getFloatTimeDomainData(buffer.current);
    const pitch = autoCorrelate(buffer.current, audioContext.current.sampleRate);

    if (pitch !== -1) {
      const noteNumber = noteFromFrequency(pitch);
      const noteName = NOTES[noteNumber % 12];
      const idealFreq = frequencyFromNoteNumber(noteNumber);
      const cents = 1200 * Math.log2(pitch / idealFreq);

      setNote(noteName);
      setFreq(pitch.toFixed(1));
      setDetune(Math.max(-50, Math.min(50, cents)));
    }

    requestAnimationFrame(detectPitch);
  };

  return (
    <div className="tuner-wrapper">
      <h1 className="tuner-title">🎵 Tuner</h1>

      <div className="note-display">{note}</div>
      <div className="freq-display">{freq} Hz</div>

      {/* Needle */}
      {/* Needle */}
      <div className={`needle-container ${Math.abs(detune) < 5 ? "in-tune" : detune < 0 ? "flat" : "sharp"
        }`}>
        <div className="dial" />
        <div className="scale">
          <span>-50</span>
          <span>0</span>
          <span>+50</span>
        </div>

        <div
          className="needle"
          style={{ transform: `rotate(${detune}deg)` }}
        />

        <div className="cents">{detune.toFixed(0)} cents</div>
      </div>

      {/* 🎛 Tuner Transparent Sheet */}
      <div className="tuner-sheet">

        {/* 🎵 Tuner Intro */}
        <div className="tuner-intro">
          <h2>Use the Tuner to Tune Any Instrument</h2>

          <p>
            This tuner listens to sound through your microphone and helps you
            adjust your instrument to the correct pitch in real time.
          </p>

          <p>
            Play one note at a time and watch the needle.
            Center means perfect tuning, left means flat, and right means sharp.
          </p>
        </div>

        {/* 🎓 How to use the tuner */}
        <div className="tuner-guide">
          <p className="guide-title">How to use the tuner</p>

          <p>
            Play a single note near your microphone.
            The tuner automatically detects the pitch.
          </p>

          <ul>
            <li><strong>Left (−)</strong> → Note is flat (too low)</li>
            <li><strong>Center (✓)</strong> → Perfectly in tune</li>
            <li><strong>Right (+)</strong> → Note is sharp (too high)</li>
          </ul>

          <p className="hint">
            Tip: Hold the note steady for best accuracy 🎯
          </p>
        </div>

        {/* 🎸 Instrument Tips */}
        <div className="tuner-tips">
          <h3>Instrument Tips</h3>

          <div className="tip">
            <strong>🎸 Guitar</strong>
            <p>
              Tune one string at a time. Pluck clearly and let it ring.
              Standard tuning: E A D G B E.
            </p>
          </div>

          <div className="tip">
            <strong>🎻 Violin</strong>
            <p>
              Use long, steady bow strokes.
              Tune strings in order: G D A E.
              Slight sharpness is safer than flat.
            </p>
          </div>

          <div className="tip">
            <strong>🪕 Ukulele</strong>
            <p>
              Pluck gently to avoid pitch wobble.
              Standard tuning: G C E A.
            </p>
          </div>
        </div>

      </div>


      <button className="back2-btn" onClick={onClose}>
        Back
      </button>
    </div>
  );
}

/* ---------- Pitch helpers ---------- */

function autoCorrelate(buffer, sampleRate) {
  let SIZE = buffer.length;
  let rms = 0;

  for (let i = 0; i < SIZE; i++) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return -1;

  let r1 = 0, r2 = SIZE - 1;
  for (let i = 0; i < SIZE / 2; i++)
    if (Math.abs(buffer[i]) < 0.2) { r1 = i; break; }

  for (let i = 1; i < SIZE / 2; i++)
    if (Math.abs(buffer[SIZE - i]) < 0.2) { r2 = SIZE - i; break; }

  buffer = buffer.slice(r1, r2);
  SIZE = buffer.length;

  let c = new Array(SIZE).fill(0);
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < SIZE - i; j++)
      c[i] += buffer[j] * buffer[j + i];

  let d = 0;
  while (c[d] > c[d + 1]) d++;

  let maxval = -1, maxpos = -1;
  for (let i = d; i < SIZE; i++)
    if (c[i] > maxval) { maxval = c[i]; maxpos = i; }

  return sampleRate / maxpos;
}

function noteFromFrequency(freq) {
  return Math.round(12 * Math.log2(freq / 440) + 69);
}

function frequencyFromNoteNumber(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}
