import React, { useEffect, useState } from "react";
import AdminSidebar from "../component/AdminSidebar";
import "./AdminDashboard.css";
import AdminQuizzes from "./AdminQuizzes";
import { API_BASE } from "../utils/api";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalQuizzes: 0,
    topScore: 0,
  });

  const [users, setUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  const [contacts, setContacts] = useState([]);
  const [replyText, setReplyText] = useState({});
  const [loadingAction, setLoadingAction] = useState("");

  // 🔥 EDIT FEATURE (NEW)
  const [editUser, setEditUser] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  /* ================= LOADERS ================= */
  const loadUsers = async () => {
    const res = await fetch(`${API_BASE}/api/admin/users`, { headers });
    setUsers(await res.json());
  };

  const loadBlockedUsers = async () => {
    const res = await fetch(`${API_BASE}/api/admin/blocked-users`, { headers });
    setBlockedUsers(await res.json());
  };

  const loadDeletedUsers = async () => {
    const res = await fetch(`${API_BASE}/api/admin/deleted-users`, { headers });
    setDeletedUsers(await res.json());
  };

  const loadContacts = async () => {
    const res = await fetch(`${API_BASE}/api/contact/admin`, { headers });
    setContacts(await res.json());
  };

  /* ================= INIT ================= */
  useEffect(() => {
    if (role !== "admin") return;

    fetch(`${API_BASE}/api/admin/stats`, { headers })
      .then((res) => res.json())
      .then(setStats);

    loadUsers();
    loadBlockedUsers();
    loadDeletedUsers();
    loadContacts();

    fetch(`${API_BASE}/api/admin/quizzes`, { headers })
      .then((res) => res.json())
      .then(setQuizzes);
  }, []);

  /* ================= USER ACTIONS ================= */
  const blockUser = async (id) => {
    setLoadingAction(id);
    await fetch(`${API_BASE}/api/admin/block-user/${id}`, {
      method: "PUT",
      headers,
    });
    loadUsers();
    loadBlockedUsers();
    setLoadingAction("");
  };

  const unblockUser = async (id) => {
    setLoadingAction(id);
    await fetch(`${API_BASE}/api/admin/unblock-user/${id}`, {
      method: "PUT",
      headers,
    });
    loadUsers();
    loadBlockedUsers();
    setLoadingAction("");
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    setLoadingAction(id);
    await fetch(`${API_BASE}/api/admin/delete-user/${id}`, {
      method: "PUT",
      headers,
    });
    loadUsers();
    loadDeletedUsers();
    setLoadingAction("");
  };

  // 🔥 UPDATE USER
  const updateUser = async (id) => {
    try {
      await fetch(`${API_BASE}/api/admin/update-user/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(editData),
      });

      setEditUser(null);
      loadUsers();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  /* ================= CONTACT REPLY ================= */
  const sendReply = async (id) => {
    if (!replyText[id]) return alert("Reply message required");

    setLoadingAction(id);
    await fetch(`${API_BASE}/api/contact/admin/reply/${id}`, {
      method: "POST",
      headers,
      body: JSON.stringify({ reply: replyText[id] }),
    });

    setReplyText({ ...replyText, [id]: "" });
    loadContacts();
    setLoadingAction("");
  };

  return (
    <div className="admin-layout">
      <AdminSidebar active={activeTab} setActive={setActiveTab} />

      <div className="admin-content">
        {/* ================= USERS ================= */}
        {activeTab === "users" && (
          <>
            <h1>Registered Users</h1>

            {users.length === 0 ? (
              <p>No users found</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((u) => (
                    <tr key={u._id}>
                      {/* NAME */}
                      <td>
                        {editUser === u._id ? (
                          <input
                            value={editData.name}
                            onChange={(e) =>
                              setEditData({ ...editData, name: e.target.value })
                            }
                          />
                        ) : (
                          u.name
                        )}
                      </td>

                      {/* EMAIL */}
                      <td>
                        {editUser === u._id ? (
                          <input
                            value={editData.email}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                email: e.target.value,
                              })
                            }
                          />
                        ) : (
                          u.email
                        )}
                      </td>

                      <td>{u.role}</td>

                      <td>
                        <span className={`status ${u.status}`}>{u.status}</span>
                      </td>

                      <td>
                        {/* EDIT */}
                        {editUser === u._id ? (
                          <button
                            className="btn-save"
                            onClick={() => updateUser(u._id)}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="btn-edit"
                            onClick={() => {
                              setEditUser(u._id);
                              setEditData({
                                name: u.name,
                                email: u.email,
                                phone: u.phone || "",
                              });
                            }}
                          >
                            Edit
                          </button>
                        )}

                        {/* BLOCK / UNBLOCK */}
                        {u.status === "blocked" ? (
                          <button
                            className="btn-unblock"
                            onClick={() => unblockUser(u._id)}
                          >
                            Unblock
                          </button>
                        ) : (
                          <button
                            className="btn-unblock"
                            onClick={() => blockUser(u._id)}
                          >
                            Block
                          </button>
                        )}

                        {/* DELETE */}
                        <button
                          className="btn-block"
                          onClick={() => deleteUser(u._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
        {/* ================= DASHBOARD ================= */}
        {activeTab === "dashboard" && (
          <>
            <h1>Admin Dashboard</h1>

            <div className="admin-cards">
              <div className="admin-card">
                👥 Users <span>{stats.totalUsers}</span>
              </div>

              <div className="admin-card">
                🧠 Quizzes <span>{stats.totalQuizzes}</span>
              </div>

              <div className="admin-card">
                🏆 Top Score <span>{stats.topScore}</span>
              </div>
            </div>
          </>
        )}
        {/* ================= BLOCKED MEMBERS ================= */}
        {activeTab === "blocked" && (
          <>
            <h1>Blocked Members</h1>

            {blockedUsers.length === 0 ? (
              <p>No blocked users</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {blockedUsers.map((u) => (
                    <tr key={u._id}>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
        {/* ================= DELETED MEMBERS ================= */}
        {activeTab === "deleted" && (
          <>
            <h1>Deleted Members</h1>

            {deletedUsers.length === 0 ? (
              <p>No deleted users</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {deletedUsers.map((u) => (
                    <tr key={u._id}>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
        {/* ================= CONTACT ================= */}
        {activeTab === "contacts" && (
          <>
            <h1>Contact Messages</h1>

            {contacts.length === 0 ? (
              <p>No messages</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Reply</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c) => (
                    <tr key={c._id}>
                      <td>{c.name}</td>
                      <td>{c.email}</td>
                      <td>{c.message}</td>
                      <td>
                        <textarea
                          value={replyText[c._id] || ""}
                          onChange={(e) =>
                            setReplyText({
                              ...replyText,
                              [c._id]: e.target.value,
                            })
                          }
                        />
                        <button onClick={() => sendReply(c._id)}>Send</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
        {activeTab === "quizzes" && <AdminQuizzes />}
      </div>
    </div>
  );
}
