import React, { useState } from "react";
import Instmain from "../component/Instmain";
import VirtualPiano from "../component/VirtualPiano";
import GroovePad from "../component/Groovepad";
import Tuner from "../component/Tuner";

function Instruments() {
  const [activeInstrument, setActiveInstrument] = useState(null);

  return (
    <div>
      {/* Instrument selection */}
      {!activeInstrument && (
        <Instmain
          onPlayPiano={() => setActiveInstrument("piano")}
          onPlayGroove={() => setActiveInstrument("groove")}
          onPlayTuner={() => setActiveInstrument("tuner")}
        />
      )}

      {activeInstrument === "piano" && (
        <VirtualPiano onClose={() => setActiveInstrument(null)} />
      )}

      {activeInstrument === "groove" && (
        <GroovePad onClose={() => setActiveInstrument(null)} />
      )}

      {activeInstrument === "tuner" && (
        <Tuner onClose={() => setActiveInstrument(null)} />
      )}
    </div>
  );
}

export default Instruments;
