import React from "react";
import "./Piano.css";

const WHITE_NOTES = [
  "C3","D3","E3","F3","G3","A3","B3",
  "C4","D4","E4","F4","G4","A4","B4"
];

const BLACK_AFTER = {
  0: "Cs3",
  1: "Ds3",
  3: "Fs3",
  4: "Gs3",
  5: "As3",
  7: "Cs4",
  8: "Ds4",
  10: "Fs4",
  11: "Gs4",
  12: "As4"
};

export default function Piano({ playNote }) {  // ✔ receives playNote correctly

  return (
    <div className="piano-wrapper">
      <ul className="piano" role="list">

        {WHITE_NOTES.map((whiteNote, index) => (
          <li className="key" key={whiteNote}>

            {/* WHITE KEY */}
            <button
              className="white"
              onClick={() => playNote(whiteNote)}   // ✔ plays sound from parent
            >
              <i>{whiteNote.replace(/\d/, "")}</i>
            </button>

            {/* BLACK KEY */}
            {BLACK_AFTER[index] && (
              <button
                className="black"
                onClick={() => playNote(BLACK_AFTER[index])}  // ✔ correct black key audio
              />
            )}

          </li>
        ))}

      </ul>
    </div>
  );
}
