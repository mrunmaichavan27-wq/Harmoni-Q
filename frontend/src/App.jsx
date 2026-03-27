import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";

import CustomNavbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Instruments from "./pages/Instruments";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import VirtualPiano from "./component/VirtualPiano";
import Groovepad from "./component/Groovepad";
import Tuner from "./component/Tuner";
import ForgotPassword from "./component/ForgotPassword";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./component/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  const location = useLocation();

  // ✅ Detect admin page
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* ❌ Hide Navbar on admin */}
      {!isAdminPage && <CustomNavbar />}

      <Routes>

        {/* 🌍 Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 🔒 User Protected */}
        <Route path="/about" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/instruments" element={<ProtectedRoute><Instruments /></ProtectedRoute>} />
        <Route path="/lesson" element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
        <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/piano" element={<ProtectedRoute><VirtualPiano /></ProtectedRoute>} />
        <Route path="/groovepad" element={<ProtectedRoute><Groovepad /></ProtectedRoute>} />
        <Route path="/tuner" element={<ProtectedRoute><Tuner /></ProtectedRoute>} />
        

        {/* 🔐 ADMIN ONLY (NO NAVBAR / NO FOOTER) */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

      </Routes>

      {/* ❌ Hide Footer on admin */}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
