import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./components/Calendar";
import Overview from "./components/Overview";
import Timer from "./components/Timer";
import NewProjectForm from "./components/NewProjectForm";
import NewTaskForm from "./components/NewTaskForm";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import { TimeTrackerProvider } from "./context/TimeTrackerContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
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
