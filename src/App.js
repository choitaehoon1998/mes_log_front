import "./App.css";
import "./reset.css";
import Router from "./routes";
import React from "react";
import Context from "./Context";

export default function App() {
  return (
    <>
      <Context>
        <Router />
      </Context>
    </>
  );
}
