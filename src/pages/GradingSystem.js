```jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function GradingSystem() {
  const [students, setStudents] = useState([
    { id: 1, name: "Elazaro John", t1: 75, t2: 82, t3: 68, t4: 90 },
    { id: 2, name: "Alpha Mary", t1: 60, t2: 55, t3: 70, t4: 65 }
  ]);

  const calculateFinal = (t1, t2, t3, t4) => ((t1 + t2 + t3 + t4) / 4).toFixed(1);

  const getGrade = (score) => {
    if (score >= 80) return { letter: "A", color: "#16a34a" };
    if (score >= 70) return { letter: "B", color: "#2563eb" };
    if (score >= 50) return { letter: "C", color: "#d97706" };
    return { letter: "F", color: "#dc2626" };
  };

  const handleScoreChange = (id, field, val) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, [field]: Number(val) || 0 } : s));
  };

  return (
    <div>
      <Navbar role="Teacher" />
      <div className="dashboard-container">
        <h3 className="dashboard-title">Automatic Grading Manager (T1 - T4)</h3>
        <div className="grading-table-wrapper">
          <table className="grading-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>T1</th>
                <th>T2</th>
                <th>T3</th>
                <th>T4</th>
                <th>Average</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => {
                const avg = calculateFinal(s.t1, s.t2, s.t3, s.t4);
                const gradeInfo = getGrade(parseFloat(avg));
                return (
                  <tr key={s.id}>
                    <td><strong>{s.name}</strong></td>
                    {['t1', 't2', 't3', 't4'].map(term => (
                      <td key={term}>
                        <input type="number" value={s[term]} onChange={(e) => handleScoreChange(s.id, term, e.target.value)} min="0" max="100"/>
                      </td>
                    ))}
                    <td><strong>{avg}%</strong></td>
                    <td><span style={{ color: gradeInfo.color, fontWeight: 'bold' }}>{gradeInfo.letter}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GradingSystem;
