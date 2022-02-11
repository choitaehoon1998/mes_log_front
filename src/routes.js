import React from "react";
import { useRoutes } from "react-router-dom";
// import ErrorLog from "./Page/errorLog";
import MemberCheck from "./Page/membercheck";

export default function Router() {
  return useRoutes(
    // [{ path: "/", element: <ErrorLog /> }],
    [{ path: "/", element: <MemberCheck /> }]
  );
}
