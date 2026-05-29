```jsx
import React from "react";
import Navbar from "../components/Navbar";

function TimetableConfig() {
  return (
    <div>
      <Navbar role="Admin" />
      <div className="dashboard-container">
        <h3 className="dashboard-title">TT-PRO Timetable Engine Settings</h3>
        <div style={{ background: '#e0f2fe', padding: '1.2rem', borderRadius: '6px', borderLeft: '5px solid #0284c7', marginBottom: '1.5rem' }}>
          <strong>Rule Matrix Priorities:</strong>
          <ul style={{ margin: '8px 0 0 20px', padding: 0, lineHeight: '1.5' }}>
            <li>Double periods of the identical subject are designated first priority and scheduled as continuous sequences.</li>
            <li>Double period combinations are locked to appear exactly once per day, leaving zero single isolated gaps.</li>
            <li>Standard breaks and administrative blocks cannot cut through consecutive class run sessions.</li>
          </ul>
        </div>
        <button style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
          Generate Class Matrix
        </button>
      </div>
    </div>
  );
}

export default TimetableConfig;
