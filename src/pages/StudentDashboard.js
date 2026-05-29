```jsx
import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

function StudentDashboard() {
  return (
    <div>
      <Navbar role="Student" />
      <div className="dashboard-container">
        <h2 className="dashboard-title">My Student Desk</h2>
        <div className="dashboard">
          <DashboardCard icon="📅" title="View Timetable" description="Check your weekly class schedule blocks." onClick={() => {}} />
          <DashboardCard icon="📈" title="Check Grades" description="See your continuous assessments and final outputs." onClick={() => {}} />
          <DashboardCard icon="📝" title="Submit Assignments" description="Upload active homework items and assets." onClick={() => {}} />
          <DashboardCard icon="📚" title="Access Resources" description="Download learning notes and structural text files." onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
