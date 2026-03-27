import React, { useState } from "react";
import axios from "axios";
import "./CardFlipQuiz.css";
import { API_BASE } from "../utils/api";

/* ================= SET 1 ================= */
const BASIC_SET = [
  {
    question: "How many natural notes are there?",
    options: ["5", "7", "8", "12"],
    correct: "7",
  },
  {
    question: "Which note is Middle C?",
    options: ["C3", "C4", "C5", "C6"],
    correct: "C4",
  },
  {
    question: "How many keys on a piano?",
    options: ["61", "76", "88", "100"],
    correct: "88",
  },
  {
    question: "How many semitones in an octave?",
    options: ["8", "10", "12", "14"],
    correct: "12",
  },
  {
    question: "Which clef is used for piano right hand?",
    options: ["Bass", "Tenor", "Treble", "Alto"],
    correct: "Treble",
  },
  {
    question: "Which scale sounds happy?",
    options: ["Minor", "Major", "Chromatic", "Blues"],
    correct: "Major",
  },
  {
    question: "How many notes in a major scale?",
    options: ["5", "6", "7", "8"],
    correct: "7",
  },
  {
    question: "Which chord has 3 notes?",
    options: ["Triad", "Seventh", "Ninth", "Power"],
    correct: "Triad",
  },
  {
    question: "Which is a percussion instrument?",
    options: ["Flute", "Guitar", "Drums", "Violin"],
    correct: "Drums",
  },
  {
    question: "Tempo means?",
    options: ["Pitch", "Speed", "Volume", "Key"],
    correct: "Speed",
  },
];

/* ================= SET 2 ================= */
const ADVANCED_SET = [
  {
    question: "Relative minor of C major?",
    options: ["A minor", "D minor", "E minor", "G minor"],
    correct: "A minor",
  },
  {
    question: "How many beats in 4/4 time?",
    options: ["2", "3", "4", "6"],
    correct: "4",
  },
  {
    question: "Which chord is V in C major?",
    options: ["C", "Dm", "G", "Am"],
    correct: "G",
  },
  {
    question: "Which scale sounds sad?",
    options: ["Major", "Minor", "Pentatonic", "Chromatic"],
    correct: "Minor",
  },
  {
    question: "What does forte mean?",
    options: ["Soft", "Fast", "Loud", "Slow"],
    correct: "Loud",
  },
  {
    question: "Which clef is for left hand piano?",
    options: ["Treble", "Bass", "Tenor", "Alto"],
    correct: "Bass",
  },
  {
    question: "Which symbol raises a note?",
    options: ["Flat", "Natural", "Sharp", "Rest"],
    correct: "Sharp",
  },
  {
    question: "How many notes in a triad?",
    options: ["2", "3", "4", "5"],
    correct: "3",
  },
  {
    question: "Time signature shows?",
    options: ["Speed", "Pitch", "Beats", "Key"],
    correct: "Beats",
  },
  {
    question: "Which note comes after G?",
    options: ["A", "F", "E", "C"],
    correct: "A",
  },
];

export default function CardFlipQuiz({ onBack }) {
  const [set, setSet] = useState(1);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [basicScore, setBasicScore] = useState(null);
  const [advancedScore, setAdvancedScore] = useState(null);
  const [flipped, setFlipped] = useState(null);
  const [locked, setLocked] = useState(false);
  const [phase, setPhase] = useState("quiz");

  const QUESTIONS = set === 1 ? BASIC_SET : ADVANCED_SET;
  const current = QUESTIONS[index];

  const handleFlip = (option) => {
    if (locked) return;

    setFlipped(option);
    setLocked(true);

    if (option === current.correct) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (index + 1 < QUESTIONS.length) {
        setIndex((i) => i + 1);
        setFlipped(null);
        setLocked(false);
      } else {
        if (set === 1) {
          const finalScore = option === current.correct ? score + 1 : score;
          setBasicScore(finalScore);
          setPhase("set1Result");
        } else {
          const finalScore = option === current.correct ? score + 1 : score;

          setAdvancedScore(finalScore);

          // ✅ 🔥 DIRECT SAVE (FIXED BUG)
          axios
            .post(
              `${API_BASE}/api/quiz/submit`,
              {
                basicScore: basicScore || 0,
                advancedScore: finalScore,
                audioScore: 0,
              },
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              },
            )
            .then(() => console.log("✅ Saved"))
            .catch((err) => console.error(err));

          setPhase("finalResult");
        }
      }
    }, 900);
  };

  /* ================= SET 1 RESULT ================= */
  if (phase === "set1Result") {
    const passed = score >= 6;

    return (
      <div className="flip-quiz-page center">
        <div className="level-card">
          <h2>🏁 Set 1 Completed</h2>
          <p>Score: {basicScore} / 10</p>

          {passed ? (
            <>
              <h1 className="gold-text">Advanced Level Unlocked 🔓</h1>
              <button
                className="start-btn"
                onClick={() => {
                  setSet(2);
                  setIndex(0);
                  setScore(0);
                  setFlipped(null);
                  setLocked(false);
                  setPhase("quiz");
                }}
              >
                Start Advanced →
              </button>
            </>
          ) : (
            <>
              <h1 className="title-unlock">Need More Practice 💪</h1>
              <button
                className="start-btn"
                onClick={() => {
                  setIndex(0);
                  setScore(0);
                  setFlipped(null);
                  setLocked(false);
                  setPhase("quiz");
                }}
              >
                Retry →
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  /* ================= FINAL RESULT ================= */
  if (phase === "finalResult") {
    return (
      <div className="flip-quiz-page center">
        <div className="result-card">
          <h2>🎯 MCQ Result Saved</h2>
          <p>📘 Basic: {basicScore}/10</p>
          <p>🚀 Advanced: {advancedScore}/10</p>

          <button
            className="back-btn"
            onClick={() => {
              window.location.href = "/profile"; // force reload
            }}
          >
            Go to Profile →
          </button>
        </div>
      </div>
    );
  }

  /* ================= MAIN QUIZ ================= */
  return (
    <div className="flip-quiz-page">
      <div className="quiz-wrapper">
        <div className="quiz-headline">
          <h1>🧠 Flip • Think • Win</h1>
          <p>
            Set {set} • Question {index + 1} of 10
          </p>
        </div>

        <div className="quiz-box">
          <h3>{current.question}</h3>

          <div className="card-grid">
            {current.options.map((opt, i) => {
              let cls = "flip-card";
              if (flipped) {
                if (opt === current.correct) cls += " correct";
                else if (opt === flipped) cls += " wrong";
              }

              return (
                <div key={i} className={cls} onClick={() => handleFlip(opt)}>
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
        </div>

        <div className="quiz-back-btn-wrap">
          <button className="back-btn" onClick={onBack}>
            ← Back to Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
