import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../utils/api";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setMsg("");

    try {
      await axios.post(`${API_BASE}/api/auth/forgot-password`, {
        email,
      });
      setMsg("OTP sent to your email");
      setStep(2);
    } catch {
      setError("Email not registered");
    }
  };

  const verifyOtpOnly = (e) => {
    e.preventDefault();
    setError("");
    setStep(3);
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(`${API_BASE}/api/auth/reset-password`, {
        email,
        otp,
        password,
      });

      alert("Password updated successfully");
      navigate("/login");
    } catch {
      setError("Invalid OTP or OTP expired");
    }
  };

  return (
    <div className="login-wrapper">
      <form
        className="login-card"
        onSubmit={
          step === 1 ? sendOtp : step === 2 ? verifyOtpOnly : updatePassword
        }
      >
        <h2>
          {step === 1 && "Forgot Password"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Set New Password"}
        </h2>

        {msg && <p className="success-text">{msg}</p>}
        {error && <p className="error-text">{error}</p>}

        {step === 1 && (
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}

        {step === 2 && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        )}

        {step === 3 && (
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        )}

        <button>
          {step === 1 && "Send OTP"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Update Password"}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
