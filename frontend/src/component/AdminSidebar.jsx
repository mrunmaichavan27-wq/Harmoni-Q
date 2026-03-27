import React from "react";
import "./AdminSidebar.css";

export default function AdminSidebar({ active, setActive }) {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="admin-sidebar">
      <h2 className="admin-logo">🎧 Admin</h2>

      <button
        className={active === "dashboard" ? "active" : ""}
        onClick={() => setActive("dashboard")}
      >
        📊 Dashboard
      </button>

      <button
        className={active === "users" ? "active" : ""}
        onClick={() => setActive("users")}
      >
        👥 Users
      </button>

      {/* ✅ EXISTING */}
      <button
        className={active === "blocked" ? "active" : ""}
        onClick={() => setActive("blocked")}
      >
        🚫 Blocked Members
      </button>

      {/* ✅ EXISTING */}
      <button
        className={active === "deleted" ? "active" : ""}
        onClick={() => setActive("deleted")}
      >
        🗑️ Deleted Members
      </button>

      {/* ✅ EXISTING */}
      <button
        className={active === "quizzes" ? "active" : ""}
        onClick={() => setActive("quizzes")}
      >
        🧠 Quizzes
      </button>

      {/* ✅ NEW CONTACT MESSAGES TAB */}
      <button
        className={active === "contacts" ? "active" : ""}
        onClick={() => setActive("contacts")}
      >
        📩 Contact Messages
      </button>

      <button className="logout-btn" onClick={logout}>
        🚪 Logout
      </button>
    </div>
  );
}
