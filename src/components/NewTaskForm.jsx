import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function NewTaskForm() {
  const taskNameRef = useRef();
  const projectRef = useRef();
  const { addTask, projects } = useTimeTrackContext();

  function handleSubmit(e) {
    e.preventDefault();
    addTask(projectRef.current.value, taskNameRef.current.value);
  }

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" ref={taskNameRef} name="taskName" id="taskName" />
        <label htmlFor="project">Project:</label>
        <select id="project" ref={projectRef}>
          <option value="">--Please choose a project</option>
          {projects.map((project) => (
            <option value={project.id} key={project.id}>
              {project.title}
            </option>
          ))}
        </select>
        <Link to={`/overview`}>
          <button>Cancel</button>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default NewTaskForm;
