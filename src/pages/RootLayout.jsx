import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function RootLayout() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default RootLayout;
