import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { getProjects, getTasks, getTimes } from "../utils/api";
import axios from "axios";

export const TimeTrackContext = createContext();

export function TimeTrackerProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [times, setTimes] = useState([]);

  const updateProjects = useCallback(() => {
    getProjects().then((response) => setProjects(response.data));
  }, []);
  useEffect(updateProjects, []);

  const addProject = useCallback((title, color) => {
    axios
      .post("http://localhost:3000/projects", {
        title,
        color,
      })
      .then(() => {
        updateProjects();
      });
  }, []);

  const updateTasks = useCallback(() => {
    getTasks().then((response) => setTasks(response.data));
  }, []);
  useEffect(updateTasks, []);

  const addTask = useCallback((projectID, title) => {
    axios
      .post("http://localhost:3000/tasks", {
        projectID,
        title,
      })
      .then(() => {
        updateTasks();
      });
  }, []);

  const updateTimes = useCallback(() => {
    getTimes().then((response) => setTimes(response.data));
  }, []);
  useEffect(updateTimes, []);

  const addTime = useCallback(
    (
      projectID,
      taskTitle,
      startDate,
      startTime,
      endDate,
      endTime,
      totalTimeInSeconds
    ) => {
      axios
        .post("http://localhost:3000/timelogs", {
          projectID,
          taskTitle,
          startDate,
          startTime,
          endDate,
          endTime,
          totalTimeInSeconds,
        })
        .then(() => {
          updateTimes();
        });
    },
    []
  );

  const providerValue = useMemo(() => {
    return {
      projects,
      addProject,
      tasks,
      addTask,
      times,
      addTime,
    };
  }, [projects, addProject, tasks, addTask, times, addTime]);

  return (
    <TimeTrackContext.Provider value={providerValue}>
      {children}
    </TimeTrackContext.Provider>
  );
}

export function useTimeTrackContext() {
  const context = useContext(TimeTrackContext);

  if (!context) {
    throw new Error("UseTimeTrackContext: Outside the Provider");
  }
  return context;
}
