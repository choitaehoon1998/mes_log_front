import React from "react";
import { useRoutes } from "react-router-dom";
import ErrorLog from "./Page/errorLog";
import LoginPage from "./Page/login";

export default function Router() {

  window.localStorage.getItem("token")

  return useRoutes([
    { path: "/", element: <ErrorLog /> },
    { path: "/login", element: <LoginPage /> }
  ]);
}
