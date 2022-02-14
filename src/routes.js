import React from "react";
import { useRoutes } from "react-router-dom";
import ErrorLog from "./Page/errorLog";
import Member from "./Page/member";

export default function Router() {
  return useRoutes([
    { path: "/", element: <ErrorLog /> },
    { path: "/member", element: <Member /> },
  ]);
}
