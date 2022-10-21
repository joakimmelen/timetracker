import React from "react";
import { Form } from "react-router-dom";

function NewTaskForm() {
  return (
    <div>
      <Form method="post" action="http://localhost:3000/projects">
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
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
export default NewTaskForm;
