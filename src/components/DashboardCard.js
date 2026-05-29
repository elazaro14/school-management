```jsx
import React from "react";

function DashboardCard({ title, description, onClick, icon }) {
  return (
    <div className="card" onClick={onClick}>
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DashboardCard;
