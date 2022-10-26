import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function NewProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [projectAdded, setProjectAdded] = useState();
  const projectColorRef = useRef();
  const { addProject } = useTimeTrackContext();

  function handleSubmit(e) {
    e.preventDefault();
    addProject(projectName, projectColorRef.current.value);
    setProjectName("");
  }

  return (
    <div>
      <div>
        <h2>Create Project</h2>
        <Link to={`/overview`}>
          <button>Back</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          onChange={(e) => setProjectName(e.target.value)}
          value={projectName}
          name="projectName"
          id="projectName"
        />
        <br />
        <label htmlFor="projectColor">Project Color</label>
        <input
          type="color"
          ref={projectColorRef}
          name="projectColor"
          id="projectColor"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default NewProjectForm;
