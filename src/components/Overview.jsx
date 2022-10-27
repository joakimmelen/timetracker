import React, { useState } from "react";
import Projects from "./Projects";
import Tasks from "./Tasks";
import OverviewStyles from "./Overview.module.css";

function Overview() {
  const [state, setState] = useState("projects");

  function handleClick(e) {
    setState(e.target.value);
  }

  return state === "projects" ? (
    <div>
      <div className={OverviewStyles.topoverview}>
        <button
          className={OverviewStyles.isActive}
          value="projects"
          onClick={handleClick}
        >
          Projects
        </button>
        <button value="tasks" onClick={handleClick}>
          Tasks
        </button>
      </div>
      <div className={OverviewStyles.container}>
        <Projects />
      </div>
    </div>
  ) : (
    <div>
      <div className={OverviewStyles.topoverview}>
        <button value="projects" onClick={handleClick}>
          Projects
        </button>
        <button
          className={OverviewStyles.isActive}
          value="tasks"
          onClick={handleClick}
        >
          Tasks
        </button>
      </div>
      <div className={OverviewStyles.container}>
        <Tasks />
      </div>
    </div>
  );
}

export default Overview;
