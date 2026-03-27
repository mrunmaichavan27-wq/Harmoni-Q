import React, { useEffect, useRef, useState } from "react";
import "./Groovepad.css";
import { playGrooveSound } from "../utils/grooveSoundEngine";
import { API_BASE } from "../utils/api";

const PAD_KEYS = [
  ["Kick", "A"],
  ["Snare", "S"],
  ["Clap", "D"],
  ["Hi-Hat", "F"],
  ["Bass", "G"],
  ["Synth", "H"],
  ["FX", "J"],
  ["Vocal", "K"],
  ["Kick 2", "Q"],
  ["Snare 2", "W"],
  ["Clap 2", "E"],
  ["Hi-Hat 2", "R"],
  ["Bass 2", "U"],
  ["Synth 2", "I"],
  ["FX 2", "O"],
  ["Vocal 2", "P"],
];

const tutorialSteps = [
  "Click pads or use keyboard keys to play sounds.",
  "Press Record and play a rhythm.",
  "Preview your beat and save it to your profile.",
];

export default function Groovepad({ onClose }) {
  const audioCtx = useRef(null);
  const loopTimers = useRef([]);
  const recordStart = useRef(null);

  const [activePad, setActivePad] = useState(null);
  const [bpm, setBpm] = useState(120);
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState([]);
  const [name, setName] = useState("");

  const [tutorialStep, setTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(
    !localStorage.getItem("hideGrooveTutorial"),
  );

  /* ================= AUDIO CONTEXT ================= */

  const ctx = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (
        window.AudioContext || window.webkitAudioContext
      )();
    }
    return audioCtx.current;
  };

  /* ================= SOUND CALL ================= */

  const playSound = (index, record = true) => {
    const c = ctx();

    setActivePad(index);
    setTimeout(() => setActivePad(null), 150);

    if (recording && record) {
      setRecorded((r) => [
        ...r,
        { index, time: Date.now() - recordStart.current },
      ]);
    }

    // 🔥 sound handled by shared engine
    playGrooveSound(c, index);
  };

  /* ================= RECORD ================= */

  const startRecord = () => {
    setRecorded([]);
    recordStart.current = Date.now();
    setRecording(true);
  };

  const stopRecord = () => setRecording(false);

  /* ================= PLAYBACK ================= */

  const playRecordedBeat = () => {
    stopLoop();
    if (!recorded.length) return;

    const factor = 120 / bpm;
    const duration = recorded[recorded.length - 1].time;

    recorded.forEach((n) => {
      const t = setTimeout(() => playSound(n.index, false), n.time * factor);
      loopTimers.current.push(t);
    });

    const loop = setTimeout(() => playRecordedBeat(), duration * factor + 100);
    loopTimers.current.push(loop);
  };

  const stopLoop = () => {
    loopTimers.current.forEach(clearTimeout);
    loopTimers.current = [];
  };

  /* ================= SAVE TO PROFILE ================= */

  const saveToProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to save your beat");
      return;
    }

    if (!name || !recorded.length) {
      alert("Record a beat and give it a name");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/beats/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, notes: recorded }),
      });

      const data = await res.json();
      alert(data.message || "Beat saved to profile");
      setName("");
    } catch {
      alert("Failed to save beat");
    }
  };

  /* ================= KEYBOARD SUPPORT ================= */

  /* ================= KEYBOARD SUPPORT ================= */

  useEffect(() => {
    const handleKey = (e) => {
      // 🛑 STOP SOUND WHEN USER IS TYPING IN INPUT OR TEXTAREA
      const tag = e.target.tagName;

      if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) {
        return;
      }

      const i = PAD_KEYS.findIndex(
        (p) => p[1].toLowerCase() === e.key.toLowerCase(),
      );

      if (i !== -1) {
        playSound(i);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [recording]);

  /* ================= UI ================= */

  return (
    <div className="groove-wrap">
      <h1>Groovepad</h1>

      <div className="controls">
        {!recording ? (
          <button onClick={startRecord}>Record</button>
        ) : (
          <button onClick={stopRecord}>Stop</button>
        )}

        <div className="bpm">
          BPM {bpm}
          <input
            type="range"
            min="60"
            max="180"
            value={bpm}
            onChange={(e) => setBpm(+e.target.value)}
          />
        </div>
      </div>

      {recorded.length > 0 && !recording && (
        <div className="recorded-preview">
          <h3>🎶 Recorded Beat</h3>

          <input
            placeholder="Beat name (max 20 chars)"
            value={name}
            maxLength={20}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="preview-actions">
            <button onClick={playRecordedBeat}>▶ Play</button>
            <button onClick={stopLoop}>⏹ Stop</button>
            <button onClick={saveToProfile}>💾 Save to Profile</button>
          </div>
        </div>
      )}

      <div className="grid">
        {PAD_KEYS.map((p, i) => (
          <div
            key={i}
            className={`pad row-${Math.floor(i / 4)} ${
              activePad === i ? "active" : ""
            }`}
            onClick={() => playSound(i)}
          >
            <span>{p[0]}</span>
            <small>{p[1]}</small>
          </div>
        ))}
      </div>

      {/* 🎛 Groovepad Introduction */}
      {/* 🎛 Groovepad Introduction */}
      <div className="groove-description">
        <h2>Create Beats with the Groovepad</h2>

        <p>
          The Groovepad lets you create rhythms by tapping different sound pads.
          Each pad plays a unique sound that can be combined into a beat.
        </p>

        <p>
          You can record your beat, play it back, and save it to your profile.
        </p>

        {/* 🎓 How to use Groovepad */}
        <div className="groove-guide">
          <p className="guide-title">How to use the Groovepad</p>

          <p>
            Tap the pads to play sounds. Each tap is recorded with exact timing.
          </p>

          <ul>
            <li>
              <strong>Tap Pad</strong> → Plays a sound
            </li>
            <li>
              <strong>Record</strong> → Saves timing of your taps
            </li>
            <li>
              <strong>Play</strong> → Replays your beat
            </li>
          </ul>

          <p className="hint">
            Tip: Start slow and build your beat layer by layer 🥁
          </p>
        </div>

        {/* 🎧 Beat Making Tips */}
        <div className="groove-tips">
          <h3>Beat Making Tips</h3>

          <div className="tip">
            <strong>🥁 Rhythm</strong>
            <p>Keep a steady tempo. Try tapping your foot while recording.</p>
          </div>

          <div className="tip">
            <strong>🎶 Layering</strong>
            <p>Add drums first, then bass, then effects for a clean mix.</p>
          </div>

          <div className="tip">
            <strong>🎚 Timing</strong>
            <p>Leave space between sounds. Silence is part of rhythm.</p>
          </div>
        </div>
        <button className="back2-btn" onClick={onClose}>
          Back
        </button>
      </div>
      {showTutorial && (
        <div className="tutorial">
          <div className="tutorial-box">
            <h3>Tutorial</h3>
            <p>{tutorialSteps[tutorialStep]}</p>

            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  localStorage.setItem("hideGrooveTutorial", e.target.checked)
                }
              />
              Don’t show again
            </label>

            <div className="tut-btns">
              <button onClick={() => setShowTutorial(false)}>Skip</button>
              {tutorialStep < tutorialSteps.length - 1 ? (
                <button onClick={() => setTutorialStep((s) => s + 1)}>
                  Next
                </button>
              ) : (
                <button onClick={() => setShowTutorial(false)}>Finish</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
