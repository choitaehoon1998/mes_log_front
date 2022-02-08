import React from "react";
import { useRoutes } from "react-router-dom";
import ErrorLogDetail from "./page/errorLogDetail";
import ErrorLog from "./errorLogPage/errorLog";

export default function Router() {
  return useRoutes([
    { path: "/detail", element: <ErrorLogDetail /> },
    { path: "/", element: <ErrorLog /> },
  ]);
}
