import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Profile.css";
import { playGrooveSound } from "../utils/grooveSoundEngine";
import { API_BASE } from "../utils/api";

const getStars = (score = 0) => {
  if (score >= 9) return 3;
  if (score >= 7) return 2;
  if (score >= 5) return 1;
  return 0;
};

export default function Profile() {
  const [data, setData] = useState(null);
  const [beats, setBeats] = useState([]);
  const [pianoRecordings, setPianoRecordings] = useState([]);

  const name = localStorage.getItem("userName") || "Musician";

  const audioCtx = useRef(null);
  const loopTimers = useRef([]);

  const ctx = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (
        window.AudioContext || window.webkitAudioContext
      )();
    }
    return audioCtx.current;
  };

  /* 🔓 AUDIO UNLOCK */
  useEffect(() => {
    const unlock = async () => {
      const c = ctx();
      if (c.state === "suspended") await c.resume();
      document.removeEventListener("click", unlock);
    };
    document.addEventListener("click", unlock);
    return () => document.removeEventListener("click", unlock);
  }, []);

  /* ================= GROOVEPAD ================= */

  const stopBeat = () => {
    loopTimers.current.forEach(clearTimeout);
    loopTimers.current = [];
  };

  const playBeat = async (notes) => {
    stopBeat();
    if (!notes?.length) return;

    const c = ctx();
    if (c.state === "suspended") await c.resume();

    notes.forEach((n) => {
      const t = setTimeout(() => {
        playGrooveSound(c, n.index);
      }, n.time);
      loopTimers.current.push(t);
    });
  };

  const deleteBeat = async (id) => {
    if (!window.confirm("Delete this beat?")) return;

    try {
      await axios.delete(`${API_BASE}/api/beats/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBeats((prev) => prev.filter((b) => b._id !== id));
    } catch {
      alert("Failed to delete beat");
    }
  };

  /* ================= PIANO ================= */

  const playPianoNote = (note, octave) => {
    const c = ctx();

    const noteMap = {
      C: 0,
      "C#": 1,
      D: 2,
      "D#": 3,
      E: 4,
      F: 5,
      "F#": 6,
      G: 7,
      "G#": 8,
      A: 9,
      "A#": 10,
      B: 11,
    };

    const n = (octave - 4) * 12 + (noteMap[note] - 9);
    const freq = 440 * Math.pow(2, n / 12);

    const osc = c.createOscillator();
    const gain = c.createGain();

    osc.frequency.value = freq;
    osc.type = "triangle";

    gain.gain.setValueAtTime(0.3, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 1);

    osc.connect(gain);
    gain.connect(c.destination);

    osc.start();
    osc.stop(c.currentTime + 1);
  };

  const playPianoRecording = async (notes) => {
    stopBeat();
    if (!notes?.length) return;

    const c = ctx();
    if (c.state === "suspended") await c.resume();

    notes.forEach((n) => {
      const t = setTimeout(() => {
        playPianoNote(n.note, n.octave);
      }, n.time);
      loopTimers.current.push(t);
    });
  };

  const deletePianoRecording = async (id) => {
    if (!window.confirm("Delete this piano recording?")) return;

    try {
      await axios.delete(`${API_BASE}/api/piano/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setPianoRecordings((prev) => prev.filter((p) => p._id !== id));
    } catch {
      alert("Failed to delete piano recording");
    }
  };
  const fetchPiano = () => {
  axios
    .get(`${API_BASE}/api/piano`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => setPianoRecordings(res.data || []))
    .catch(() => setPianoRecordings([]));
};

  /* ================= 🔥 FETCH PROFILE (FIXED) ================= */

  const fetchProfile = () => {
    axios
      .get(`${API_BASE}/api/quiz/my-profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData({
          basicScore: res.data?.basicScore || 0,
          advancedScore: res.data?.advancedScore || 0,
          audioScore: res.data?.audioScore || 0,
        });
      })
      .catch((err) => {
        console.error("PROFILE ERROR:", err);
      });
  };

  /* ✅ IMPORTANT FIX — RUN ON LOAD */
  useEffect(() => {
    fetchProfile();

    // 🔥 हर बार page focus होने पर refresh
    window.addEventListener("focus", fetchProfile);

    return () => {
      window.removeEventListener("focus", fetchProfile);
    };
  }, []);

  /* ✅ 🔥 AUTO REFRESH WHEN PAGE OPENS AGAIN */
  useEffect(() => {
    window.addEventListener("focus", fetchProfile);
    return () => window.removeEventListener("focus", fetchProfile);
  }, []);

  /* ================= OTHER DATA ================= */

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/beats`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setBeats(res.data || []))
      .catch(() => setBeats([]));

    return () => stopBeat();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${API_BASE}/api/piano`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((res) => setPianoRecordings(res.data || []))
  //     .catch(() => setPianoRecordings([]));
  // }, []);
  useEffect(() => {
  fetchPiano();
}, []);
useEffect(() => {
  window.addEventListener("focus", fetchPiano);
  return () => window.removeEventListener("focus", fetchPiano);
}, []);

  if (!data) return <p style={{ color: "white" }}>Loading...</p>;

  const basicStars = getStars(data.basicScore);
  const advancedStars = getStars(data.advancedScore);
  const musicStars = getStars(data.audioScore);

  return (
    <>
      <div className="profile-greeting">
        Hello {name} 👋
        <span>See your result</span>
      </div>

      <div className="profile-container">
        <h1>🎵 My Harmoni Profile</h1>

        <div className="skill-card">
          <h3>📘 Basic Theory</h3>
          <p>
            {"⭐".repeat(basicStars)}
            {"☆".repeat(3 - basicStars)}
          </p>
          <small>Score: {data.basicScore}/10</small>
        </div>

        <div className="skill-card">
          <h3>🚀 Advanced Theory</h3>
          <p>
            {"⭐".repeat(advancedStars)}
            {"☆".repeat(3 - advancedStars)}
          </p>
          <small>Score: {data.advancedScore}/10</small>
        </div>

        <div className="skill-card">
          <h3>🎧 Music Skill</h3>
          <p>
            {"⭐".repeat(musicStars)}
            {"☆".repeat(3 - musicStars)}
          </p>
          <small>Score: {data.audioScore}/10</small>
        </div>
         {/* 🥁 GROOVEPAD */}
        <div className="skill-card">
          <h3>🎛 Saved Beats</h3>

          {beats.length === 0 ? (
            <p>No saved beats yet</p>
          ) : (
            beats.map((b, i) => (
              <div key={i} className="beat-row">
                <span>
                  {b.name}
                  <small style={{ marginLeft: 8, opacity: 0.6 }}>
                    ({new Date(b.createdAt).toLocaleDateString()})
                  </small>
                </span>

                {/* ▶ Play */}
                <button onClick={() => playBeat(b.notes)}>
                  ▶ Play
                </button>

                {/* ⏹ Stop (NOW AFTER PLAY) */}
                <button
                  onClick={stopBeat}
                  className="stop-btn"
                  style={{ marginLeft: 8 }}
                >
                  ⏹ Stop
                </button>

                {/* 🗑 Delete */}
                <button
                  onClick={() => deleteBeat(b._id)}
                  style={{ marginLeft: 8 }}
                >
                  🗑 Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* 🎹 PIANO */}
        <div className="skill-card">
          <h3>🎹 Piano Recordings</h3>

          {pianoRecordings.length === 0 ? (
            <p>No piano recordings yet</p>
          ) : (
            pianoRecordings.map((p, i) => (
              <div key={i} className="beat-row">
                <span>
                  {p.name}
                  <small style={{ marginLeft: 8, opacity: 0.6 }}>
                    ({new Date(p.createdAt).toLocaleDateString()})
                  </small>
                </span>

                <button onClick={() => playPianoRecording(p.notes)}>
                  ▶ Play
                </button>
                <button
                  onClick={stopBeat}
                  className="stop-btn"
                  style={{ marginLeft: 8 }}
                >
                  ⏹ Stop
                </button>
                <button
                  style={{ marginLeft: 8 }}
                  onClick={() => deletePianoRecording(p._id)}
                >
                  🗑 Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
