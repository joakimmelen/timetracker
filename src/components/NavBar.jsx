import React from "react";
import { NavLink } from "react-router-dom";
import NavStyles from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <nav className={NavStyles.navigator}>
        <ul className={NavStyles.ulcontainer}>
          <li className={NavStyles.lifudge}>
            <NavLink
              to="calendar"
              className={({ isActive }) =>
                isActive ? NavStyles.activeStyle : NavStyles.inactiveStyle
              }
            >
              Calendar
            </NavLink>
          </li>
          <li className={NavStyles.lifudge}>
            <NavLink
              to="timer"
              className={({ isActive }) =>
                isActive ? NavStyles.activeStyle : NavStyles.inactiveStyle
              }
            >
              Timer
            </NavLink>
          </li>
          <li className={NavStyles.lifudge}>
            <NavLink
              to="overview"
              className={({ isActive }) =>
                isActive ? NavStyles.activeStyle : NavStyles.inactiveStyle
              }
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
