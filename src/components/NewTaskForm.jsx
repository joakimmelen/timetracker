import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function NewTaskForm() {
  const [taskName, setTaskName] = useState("");
  const projectRef = useRef();
  const { addTask, projects } = useTimeTrackContext();

  function handleSubmit(e) {
    e.preventDefault();
    addTask(parseInt(projectRef.current.value), taskName);
    setTaskName("");
  }

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          name="taskName"
          id="taskName"
        />
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
