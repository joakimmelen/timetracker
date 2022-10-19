import { useRef } from "react";
import React from "react";

function Projects() {
  const projectNameRef = useRef();
  const projectColorRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      projectName: projectNameRef.current.value,
      projectColor: projectColorRef.current.value,
    });
  }

  return (
    <div>
      <div>
        <h1>Manage and creates Projects</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="projectName">Project Name</label>
          <input type="text" ref={projectNameRef} id="projectName" />
          <label htmlFor="projectColor">Project Color</label>
          <input type="color" ref={projectColorRef} id="projectColor" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Projects;
