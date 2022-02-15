import "./App.css";
import "./reset.css"; //리셋스타일
import Router from "./routes";
import React from "react";
import Context from "./Context";

export default function App() {
  
  return (
    <>
      <Context>
        <Router>
        </Router>
      </Context>
    </>
  );
}
