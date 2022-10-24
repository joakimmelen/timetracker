import React, { useState } from "react";
import Projects from "./Projects";
import Tasks from "./Tasks";

function Overview() {
  const [state, setState] = useState("projects");

  function handleClick(e) {
    setState(e.target.value);
  }

  return state === "projects" ? (
    <div>
      <div className="topoverview">
        <button value="projects" onClick={handleClick}>
          Projects
        </button>
        <button value="tasks" onClick={handleClick}>
          Tasks
        </button>
      </div>
      <div>
        <Projects />
      </div>
    </div>
  ) : (
    <div>
      <div className="topoverview">
        <button value="projects" onClick={handleClick}>
          Projects
        </button>
        <button value="tasks" onClick={handleClick}>
          Tasks
        </button>
      </div>
      <div>
        <Tasks />
      </div>
    </div>
  );
}

export default Overview;
