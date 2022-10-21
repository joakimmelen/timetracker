import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function NewProjectForm() {
  const projectNameRef = useRef();
  const projectColorRef = useRef();
  const { addProject } = useTimeTrackContext();

  function handleSubmit(e) {
    e.preventDefault();
    addProject(projectNameRef.current.value, projectColorRef.current.value);
  }

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          ref={projectNameRef}
          name="projectName"
          id="projectName"
        />
        <label htmlFor="projectColor">Project Color</label>
        <input
          type="color"
          ref={projectColorRef}
          name="projectColor"
          id="projectColor"
        />
        <Link to={`/overview`}>
          <button>Cancel</button>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default NewProjectForm;
