import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE } from "../utils/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back 🎧</h2>
        <p className="login-subtitle">Login to continue your music challenge</p>

        {error && <p className="error-text">{error}</p>}

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button className="login-btn">Login →</button>

        {/* ✅ FORGOT PASSWORD */}
        <p className="login-footer">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span>
            <Link to="/signup">Signup</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
