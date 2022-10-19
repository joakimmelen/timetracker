import React from "react";
import Projects from "./Projects";
import Tasks from "./Tasks";

function Overview() {
  return (
    <div>
      <div>
        <h2>projects</h2>
        <Projects />
      </div>
      <div>
        <h2>tasks</h2>
        <Tasks />
      </div>
    </div>
  );
}

export default Overview;
