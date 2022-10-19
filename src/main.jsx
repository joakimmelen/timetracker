import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Calendar from "./components/calendar/Calendar";
import OverviewList from "./components/OverviewList/OverviewList";
import Timer from "./components/timer/Timer";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/timer",
        element: <Timer />,
      },
      {
        path: "/calender",
        element: <Calendar />,
      },
      {
        path: "/overview",
        element: <OverviewList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
