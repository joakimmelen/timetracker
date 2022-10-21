import React, { useRef } from "react";
import { Form, Link } from "react-router-dom";

function NewProjectForm() {
  const projectNameRef = useRef();
  const projectColorRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault;

    await fetch("http://localhost:3000/projects", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(jsonData),
    });
  }

  return (
    <div>
      <h2>Hej</h2>
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
