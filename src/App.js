import "./App.css";
import "./reset.css";
import ErrorLog from "./errorLogPage/errorLog";
import Router from "./routes";
import React from "react";
import Context from "./Context";

export default function App() {
  return (
    <>
      <Context>
        <ErrorLog />
        <Router />
      </Context>
    </>
  );
}
