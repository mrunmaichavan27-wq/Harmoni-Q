import React, { useEffect, useRef } from "react";
import "./NaturalPiano.css";

const NOTES = [
  { note: "C", freq: 261.63 },
  { note: "D", freq: 293.66 },
  { note: "E", freq: 329.63 },
  { note: "F", freq: 349.23 },
  { note: "G", freq: 392.0 },
  { note: "A", freq: 440.0 },
  { note: "B", freq: 493.88 }
];

export default function NaturalPiano() {
  const audioCtxRef = useRef(null);

  useEffect(() => {
    audioCtxRef.current =
      new (window.AudioContext || window.webkitAudioContext)();

    return () => audioCtxRef.current?.close();
  }, []);

  const playNote = async (freq) => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    // ✅ FIX: browser audio unlock
    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = freq;

    osc.connect(gain);
    gain.connect(ctx.destination);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);

    osc.start();
    osc.stop(ctx.currentTime + 1);
  };

  return (
    <div className="natural-piano-wrapper">
      <h2>Natural Notes</h2>
      <p>Click on the piano keys to hear the notes</p>

      <div className="piano">
        {NOTES.map((n) => (
          <div
            key={n.note}
            className="white-key"
            onClick={() => playNote(n.freq)}
          >
            <span className="label">{n.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
