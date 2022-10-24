import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./components/Calendar";
import Overview from "./components/Overview";
import Timer from "./components/Timer";
import NewProjectForm from "./components/NewProjectForm";
import NewTaskForm from "./components/NewTaskForm";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import { TimeTrackerProvider } from "./context/TimeTrackerContext";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "overview/*",
        element: <Overview />,
        children: [
          {
            path: "",
            element: <Projects />,
          },
          {
            path: "",
            element: <Tasks />,
          },
        ],
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "timer",
        element: <Timer />,
      },
      {
        path: "newproject",
        element: <NewProjectForm />,
      },
      {
        path: "newtask",
        element: <NewTaskForm />,
      },
      {
        path: "overview/projects",
        element: <Projects />,
      },
      {
        path: "overview/tasks",
        element: <Tasks />,
      },
    ],
  },
]);

function App() {
  return (
    <TimeTrackerProvider>
      <RouterProvider router={router} />
    </TimeTrackerProvider>
  );
}

export default App;
