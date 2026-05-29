```jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar role="Admin" />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Control Panel</h2>
        <div className="dashboard">
          <DashboardCard icon="👨‍🏫" title="Manage Teachers" description="Add, edit, and assign teachers." onClick={() => {}} />
          <DashboardCard icon="🧑‍🎓" title="Manage Students" description="Enroll students and track records." onClick={() => {}} />
          <DashboardCard icon="📅" title="TT-PRO Timetable" description="Configure schedules and manage double period sequences." onClick={() => navigate("/admin/timetable")} />
          <DashboardCard icon="📊" title="System Settings" description="Configure preferences and systems weights." onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
