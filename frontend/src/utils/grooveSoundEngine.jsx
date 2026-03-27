// src/utils/grooveSoundEngine.jsx

export const playGrooveSound = (c, index) => {

  /* ---------- KICK ---------- */
  if (index === 0 || index === 8) {
    const osc = c.createOscillator();
    const gain = c.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(150, c.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, c.currentTime + 0.15);

    gain.gain.setValueAtTime(1, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start();
    osc.stop(c.currentTime + 0.2);
    return;
  }

  /* ---------- SNARE / CLAP / HI-HAT ---------- */
  if ([1, 2, 3, 9, 10, 11].includes(index)) {
    const bufferSize = c.sampleRate;
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = c.createBufferSource();
    noise.buffer = buffer;

    const filter = c.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = index === 3 ? 7000 : 1200;

    const gain = c.createGain();
    gain.gain.setValueAtTime(0.7, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);

    noise.start();
    noise.stop(c.currentTime + 0.2);
    return;
  }

  /* ---------- BASS ---------- */
  if (index === 4 || index === 12) {
    const osc = c.createOscillator();
    const gain = c.createGain();

    osc.type = "sine";
    osc.frequency.value = 80;

    gain.gain.setValueAtTime(0.8, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start();
    osc.stop(c.currentTime + 0.5);
    return;
  }

  /* ---------- SYNTH / FX / VOCAL ---------- */
  const osc = c.createOscillator();
  const gain = c.createGain();

  osc.type = index === 7 || index === 15 ? "triangle" : "sawtooth";
  osc.frequency.value = 300 + index * 20;

  gain.gain.setValueAtTime(0.6, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.6);

  osc.connect(gain);
  gain.connect(c.destination);
  osc.start();
  osc.stop(c.currentTime + 0.6);
};