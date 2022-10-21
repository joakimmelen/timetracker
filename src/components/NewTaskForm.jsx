import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";
import { getTasks } from "../utils/api";

function NewTaskForm() {
  const taskNameRef = useRef();
  const projectRef = useRef();
  const { addTask, projects } = useTimeTrackContext();

  // const projectsId = projects.map((project) => project.id);
  // const projectId = projects.filter((project) => project.id == projectsId);

  function handleSubmit(e) {
    e.preventDefault();

    const selectedProject = projects.find(
      (project) => project.name == projectRef.current.value
    );
    console.log(selectedProject.id);
    addTask(taskNameRef.current.value, projectRef.current.value);
  }

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" ref={taskNameRef} name="taskName" id="taskName" />
        <label htmlFor="project">Project:</label>
        <select id="project" ref={projectRef}>
          <option value="" disabled>
            --Please choose an project
          </option>
          {projects.map((project) => (
            <option value={project.name} key={project.id}>
              {project.name}
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
