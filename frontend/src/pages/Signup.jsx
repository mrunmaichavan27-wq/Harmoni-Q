import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../utils/api";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", // ✅ ADDED
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE}/api/auth/signup`, form);

      alert("Signup successful 🎉");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Account 🎶</h2>
        <p className="signup-subtitle">
          Join the music challenge and test your skills
        </p>

        {/* Name */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>

        {/* ✅ Phone Number */}
        <div className="input-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button className="signup-btn">Signup →</button>

        <p className="signup-footer">
          Already have an account?{" "}
          <span>
            <a href="/login">login</a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
