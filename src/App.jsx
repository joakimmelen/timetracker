import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./components/Calendar";
import Overview from "./components/Overview";
import Timer from "./components/Timer";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
