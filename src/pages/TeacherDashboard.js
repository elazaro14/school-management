```jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar role="Teacher" />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Teacher Workstation</h2>
        <div className="dashboard">
          <DashboardCard icon="📋" title="Mark Attendance" description="Track daily student attendance." onClick={() => {}} />
          <DashboardCard icon="📚" title="Upload Lesson Plans" description="Submit and manage lesson plan structures." onClick={() => {}} />
          <DashboardCard icon="🖋️" title="Enter Grades (T1-T4)" description="Input student assessment scores directly." onClick={() => navigate("/teacher/grading")} />
          <DashboardCard icon="📊" title="View Class Reports" description="Analyze global student performance charts." onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
