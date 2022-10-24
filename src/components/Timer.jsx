import { useState, useRef } from "react";
import { useTimeTrackContext } from "../context/TimeTrackerContext";
import dayjs from "dayjs";

function Timer() {
  const [project, setProject] = useState();
  const [projectTasks, setProjectTasks] = useState();
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const { projects, tasks } = useTimeTrackContext();

  const renders = useRef(0);
  const timerId = useRef();

  // const handleChange = (e) => {
  //   setRandomInput(e.target.value);
  //   renders.current++;
  // };

  const startTimer = () => {
    setStart(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setEnd(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const saveTime = () => {
    stopTimer();
    if (seconds) {
      console.log(project, start, end);
    }
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value);
    const currentTasks = tasks.map((task) => if (task.projectID === project.id))
  };

  return (
    <div>
      <p>Project</p>
      <select onChange={handleProjectChange} id="project">
        <option value="">--Please choose a project</option>
        {projects.map((project) => (
          <option value={project.title} key={project.id}>
            {project.title}
          </option>
        ))}
      </select>
      <p>Task</p>
      <select onChange={(e) => setProjectTasks(e.target.value)} id="task">
        <option value="">--Please choose a task</option>
        {projectTasks.map((projectTask) => (
          <option value={projectTask.title} key={projectTask.id}>
            {projectTask.title}
          </option>
        ))}
      </select>

      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={saveTime}>Save</button>
      </section>
      <p>Seconds: {seconds} </p>
    </div>
  );
}

export default Timer;
