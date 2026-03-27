import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./AdminDashboard.css";
import { API_BASE } from "../utils/api";

export default function AdminQuizzes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/admin/quiz-analytics`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <h2>Loading quiz analytics...</h2>;

  return (
    <div className="admin-content">
      <h1>Quiz Analytics</h1>

      {/* ===== TABLE ===== */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Basic</th>
            <th>Advanced</th>
            <th>Audio</th>
            <th>Total</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((r) => (
            <tr key={r._id}>
              <td>{r.userId?.name}</td>
              <td>{r.userId?.email}</td>
              <td>{r.basicScore}</td>
              <td>{r.advancedScore}</td>
              <td>{r.audioScore}</td>
              <td>
                <b>{r.totalScore}</b>
              </td>
              <td className={r.passed ? "pass" : "fail"}>
                {r.passed ? "Pass" : "Fail"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===== HIGHEST SCORERS ===== */}
      <h2>Top Scorers</h2>

      <table className="admin-table top-score-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🎯 Basic MCQ</td>
            <td>{data.highest.basic?.userId?.name}</td>
            <td>{data.highest.basic?.userId?.email}</td>
            <td>{data.highest.basic?.basicScore}</td>
          </tr>

          <tr>
            <td>🚀 Advanced MCQ</td>
            <td>{data.highest.advanced?.userId?.name}</td>
            <td>{data.highest.advanced?.userId?.email}</td>
            <td>{data.highest.advanced?.advancedScore}</td>
          </tr>

          <tr>
            <td>🎧 Audio Quiz</td>
            <td>{data.highest.audio?.userId?.name}</td>
            <td>{data.highest.audio?.userId?.email}</td>
            <td>{data.highest.audio?.audioScore}</td>
          </tr>
        </tbody>
      </table>

      {/* ===== BAR CHART ===== */}
      <h2>Top Scores Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.results.slice(0, 5)}>
          <XAxis dataKey="userId.name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalScore" fill="#9b5cff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
