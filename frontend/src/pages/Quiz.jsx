import React, { useState } from "react";
import QuizSelect from "../component/QuizSelect";
import CardFlipQuiz from "../component/CardFlipQuiz";
import AudioQuiz from "../component/AudioQuiz";

export default function QuizPage() {
  const [mode, setMode] = useState("select");
  // select | mcq | audio

  return (
    <>
      {mode === "select" && (
        <QuizSelect
          onStartMCQ={() => setMode("mcq")}
          onStartAudio={() => setMode("audio")}
        />
      )}

      {mode === "mcq" && <CardFlipQuiz onBack={() => setMode("select")}/>}

      {mode === "audio" && (
        <AudioQuiz onBack={() => setMode("select")} />
      )}
    </>
  );
}
