import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";
import styles from "./NewForm.module.css";

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
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <h2>Create Task</h2>
        <Link to={`/overview`}>
          <button>Back</button>
        </Link>
      </div>
      <form className={styles.formular} onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          name="taskName"
          id="taskName"
          autoComplete="off"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default NewTaskForm;
