import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaHeadphones } from "react-icons/fa";
import axios from "axios";
import "./AudioQuiz.css";
import { API_BASE } from "../utils/api";

const AUDIO_QUESTIONS = [
  { audio: "C4.mp3", options: ["C4", "D4", "F4", "A4"], correct: "C4" },
  { audio: "D4.mp3", options: ["C4", "D4", "E4", "G4"], correct: "D4" },
  { audio: "E4.mp3", options: ["E4", "F4", "A4", "C4"], correct: "E4" },
  { audio: "F4.mp3", options: ["D4", "F4", "G4", "A4"], correct: "F4" },
  { audio: "G4.mp3", options: ["E4", "F4", "G4", "B4"], correct: "G4" },
  { audio: "A4.mp3", options: ["A4", "C4", "D4", "F4"], correct: "A4" },
  { audio: "B4.mp3", options: ["A4", "B4", "C4", "D4"], correct: "B4" },
  { audio: "C3.mp3", options: ["C3", "D3", "E3", "G3"], correct: "C3" },
  { audio: "D3.mp3", options: ["C3", "D3", "F3", "A3"], correct: "D3" },
  { audio: "E3.mp3", options: ["E3", "G3", "A3", "C3"], correct: "E3" },
];

export default function AudioQuiz({ onBack }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [flipped, setFlipped] = useState(null);
  const [locked, setLocked] = useState(false);
  const [done, setDone] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const current = AUDIO_QUESTIONS[index];

  /* 🔥 PLAY / PAUSE */
  const toggleSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`/Piano/${current.audio}`);
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current = new Audio(`/Piano/${current.audio}`);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  /* 🔥 STOP WHEN AUDIO ENDS */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false);
    }
  }, [isPlaying]);

  /* 🔥 STOP WHEN QUESTION CHANGES */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [index]);

  const handleFlip = (opt) => {
    if (locked) return;

    setFlipped(opt);
    setLocked(true);

    if (opt === current.correct) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (index + 1 < AUDIO_QUESTIONS.length) {
        setIndex((i) => i + 1);
        setFlipped(null);
        setLocked(false);
      } else {
        setDone(true);
      }
    }, 900);
  };

  /* 🔥 SAVE AUDIO RESULT */
  useEffect(() => {
    if (done) {
      const token = localStorage.getItem("token");

      axios.post(
        `${API_BASE}/api/quiz/save-audio`,
        { audioScore: score },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    }
  }, [done, score]);

  /* ===== RESULT ===== */
  if (done) {
    return (
      <div className="audio-page center">
        <div className="result-card">
          <h2>🎧 Audio Quiz Completed</h2>
          <p>
            Score: {score} / {AUDIO_QUESTIONS.length}
          </p>

          {score >= 7 ? (
            <h1 className="gold-text">🎶 Great Ears!</h1>
          ) : (
            <h1 className="title-unlock">
              You got less marks 😔
              <br />
              Practice and try again 💪
            </h1>
          )}

          <button
            className="back-btn"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
              }
              onBack();
            }}
          >
            ← Back to Quiz
          </button>
        </div>
      </div>
    );
  }

  /* ===== QUIZ ===== */
  return (
    <div className="audio-page">
      <div className="audio-card">
        <h1 className="audio-title">
          <FaHeadphones /> Listen & Guess
        </h1>

        <p>
          Question {index + 1} of {AUDIO_QUESTIONS.length}
        </p>

        <button className="play-btn" onClick={toggleSound}>
          {isPlaying ? <FaPause /> : <FaPlay />}
          {isPlaying ? " Pause Sound" : " Play Sound"}
        </button>

        <div className="card-grid">
          {current.options.map((opt, i) => {
            let cls = "flip-card";
            if (flipped) {
              if (opt === current.correct) cls += " correct";
              else if (opt === flipped) cls += " wrong";
            }

            return (
              <div
                key={i}
                className={cls}
                onClick={() => handleFlip(opt)}
                style={{ pointerEvents: locked ? "none" : "auto" }}
              >
                <div className="card-inner">
                  <div className="card-front">{opt}</div>
                  <div className="card-back">
                    {opt === current.correct ? "✔" : "✖"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ BACK BUTTON INSIDE CARD */}
        <button
          className="back-btn"
          style={{ marginTop: "20px" }}
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
            onBack();
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
