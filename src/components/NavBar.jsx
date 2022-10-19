import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = {
    TextDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="calendar"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="timer"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Timer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="overview"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Overview
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
