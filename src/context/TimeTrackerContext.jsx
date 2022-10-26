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

  const removeProject = useCallback((id) => {
    axios.delete(`http://localhost:3000/projects/${id}`).then(() => {
      updateProjects();
    });
  }, []);

  const updateTasks = useCallback(() => {
    getTasks().then((response) => setTasks(response.data));
  }, []);
  useEffect(updateTasks, []);

  const addTask = useCallback((projectId, title) => {
    axios
      .post("http://localhost:3000/tasks", {
        projectId,
        title,
      })
      .then(() => {
        updateTasks();
      });
  }, []);

  const removeTask = useCallback((id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
      updateTasks();
    });
  }, []);

  const updateTimes = useCallback(() => {
    getTimes().then((response) => setTimes(response.data));
  }, []);
  useEffect(updateTimes, []);

  const addTime = useCallback(
    (
      projectId,
      taskTitle,
      startDate,
      startTime,
      endDate,
      endTime,
      totalTimeInSeconds
    ) => {
      axios
        .post("http://localhost:3000/timelogs", {
          projectId,
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

  const removeTime = useCallback((id) => {
    axios.delete(`http://localhost:3000/timelogs/${id}`).then(() => {
      updateTimes();
    });
  }, []);

  const providerValue = useMemo(() => {
    return {
      projects,
      addProject,
      removeProject,
      tasks,
      addTask,
      removeTask,
      times,
      addTime,
      removeTime,
    };
  }, [
    projects,
    addProject,
    removeProject,
    tasks,
    addTask,
    removeTask,
    times,
    addTime,
    removeTime,
  ]);

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
