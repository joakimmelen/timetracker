import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import RootStyles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <NavBar />
    </div>
  );
}

export default RootLayout;
