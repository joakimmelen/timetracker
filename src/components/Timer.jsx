import { useState, useRef } from "react";
import { useTimeTrackContext } from "../context/TimeTrackerContext";
import dayjs from "dayjs";

function Timer() {
  const [project, setProject] = useState();
  const [task, setTask] = useState();
  const [projectTasks, setProjectTasks] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const { projects, tasks, times, addTime } = useTimeTrackContext();

  const renders = useRef(0);
  const timerId = useRef();

  // const handleChange = (e) => {
  //   setRandomInput(e.target.value);
  //   renders.current++;
  // };

  const startTimer = () => {
    setStartDate(dayjs().format("MMM-DD-YYYY"));
    setStartTime(dayjs().format("HH:mm:ss"));
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setEndDate(dayjs().format("MMM-DD-YYYY"));
    setEndTime(dayjs().format("HH:mm:ss"));
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const saveTime = () => {
    stopTimer();
    if (seconds) {
      addTime(project, task, startDate, startTime, endDate, endTime, seconds);

      setSeconds(0);
    }
  };

  const resetTime = () => {
    stopTimer();
    setSeconds(0);
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value);
    setProjectTasks(tasks.filter((task) => task.projectID == e.target.value));
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <p>Project</p>
      <select onChange={handleProjectChange} id="project">
        <option value="">--Please choose a project</option>
        {projects.map((project) => (
          <option value={project.id} key={project.id}>
            {project.title}
          </option>
        ))}
      </select>
      {!project ? (
        <p>Please choose a project..</p>
      ) : (
        <div>
          {" "}
          <p>Task</p>
          <select onChange={handleTaskChange} id="task">
            <option value="">--Please choose a task</option>
            {projectTasks.map((task) => (
              <option value={task.title} key={task.id}>
                {task.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={saveTime}>Save</button>
        <button onClick={resetTime}>Reset</button>
      </section>
      <p>Elapsed time: {seconds}s </p>

      <div>
        <ul>
          {times
            .filter((time) => time.projectID == project)
            .map((time) => (
              <li key={time.id}>
                {time.taskTitle} for {time.totalTimeInSeconds}s
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Timer;
