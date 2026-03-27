import React, { useState } from "react";
import "./Tooltip.css";

export default function Tooltip({ word, children }) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="tooltip-container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: "relative" }}
    >
      <span className="tooltip-trigger">{word}</span>

      {show && (
        <div className="tooltip-box">
          <div className="tooltip-title">{word}</div>
          <div className="tooltip-content">{children}</div>
        </div>
      )}
    </span>
  );
}
