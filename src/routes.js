import React from "react";
import { useRoutes } from "react-router-dom";
import ErrorLog from "./errorLogPage/errorLog";

export default function Router() {
  return useRoutes([{ path: "/", element: <ErrorLog /> }]);
}
