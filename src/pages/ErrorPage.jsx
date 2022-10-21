import React from "react";
import { useRouteError } from "react-router";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h2>404 NOT FOUND</h2>
      <h3>{error.message}</h3>
      <NavBar />
    </div>
  );
}

export default ErrorPage;
