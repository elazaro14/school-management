```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import GradingSystem from "./pages/GradingSystem";
import TimetableConfig from "./pages/TimetableConfig";

function App() {
  return (
    <Router basename="/school-management">
      <Routes>
        <Route path="/" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>Login Page Coming Soon</h2><p>Use navbar shortcuts to switch portals.</p></div>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/admin/timetable" element={<TimetableConfig />} />
        <Route path="/teacher/grading" element={<GradingSystem />} />
        <Route path="*" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>404 — Module Not Found</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;
