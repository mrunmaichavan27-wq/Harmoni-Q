import React from "react";
import { CgPiano } from "react-icons/cg";
import { BiGridAlt } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import "./Instmain.css";

const InstrumentSection = ({ onPlayPiano, onPlayGroove, onPlayTuner }) => {

  return (
    <div className="instrument-wrapper">
      <h1 className="main-title">
        Choose Your <span>Instrument</span>
      </h1>

      <p className="subtitle">
        Select an instrument to begin your musical journey
      </p>

      <div className="container instrument-container">
        <div className="row justify-content-center">

          {/* Piano */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="instrument-onecard">
              <div className="icon">
                <CgPiano size={50} />
              </div>
              <h2>Piano</h2>
              <p>Learn notes, chords, etc.</p>
              <button className="btn glow-btn" onClick={onPlayPiano}>
                Play Now
              </button>
            </div>
          </div>

          {/* Groovepad */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="instrument-onecard">
              <div className="icon">
                <BiGridAlt size={50} />
              </div>
              <h2>Groovepad</h2>
              <p>Create beats and loops</p>
              <button className="btn glow-btn" onClick={onPlayGroove}>
               Play Now
              </button>
            </div>
          </div>

          {/* Tuner (later) */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="instrument-onecard">
              <div className="icon">
                <FiActivity size={55} />
              </div>
              <h2>Tuner</h2>
              <p>Auto pitch detection</p>
              <button className="btn glow-btn" onClick={onPlayTuner}>
                Play Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstrumentSection;
