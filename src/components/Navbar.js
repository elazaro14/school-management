```jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ role }) {
  return (
    <nav className="navbar">
      <h2>🏫 ShuleSys — {role} Portal</h2>
      <div className="nav-links">
        <Link to="/admin">Admin</Link>
        <Link to="/teacher">Teacher</Link>
        <Link to="/student">Student</Link>
        <Link to="/parent">Parent</Link>
        <Link to="/" className="logout-btn">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
