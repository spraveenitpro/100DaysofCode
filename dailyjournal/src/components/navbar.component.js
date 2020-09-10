import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        Daily Journal
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Daily Thoughts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create Daily Log
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
