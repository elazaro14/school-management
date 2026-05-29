```jsx
import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

function ParentDashboard() {
  return (
    <div>
      <Navbar role="Parent" />
      <div className="dashboard-container">
        <h2 className="dashboard-title">Parent Portal</h2>
        <div className="dashboard">
          <DashboardCard icon="📊" title="Track Performance" description="Monitor terms T1-T4 performance logs." onClick={() => {}} />
          <DashboardCard icon="✅" title="View Attendance" description="Review automated daily presence validation sheets." onClick={() => {}} />
          <DashboardCard icon="💳" title="Check Fee Status" description="Review outstanding balances and paid items." onClick={() => {}} />
          <DashboardCard icon="🔔" title="School Alerts" description="Stay up to date with core announcements." onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;
