import React, { useEffect } from "react";
import ErrorLog from "./Page/errorLog";
import Member from "./Page/member";

import LoginPage from "./Page/login";
import { useLocation, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./modules/changer";
import { PrivateRoute } from "./service/PrivateRotuer";
export default function Router() {
  let location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.changer);
  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const refreshToken = window.localStorage.getItem("refreshToken");

    if (!(accessToken === null) && !(refreshToken === null)) {
      dispatch(login());
    }
  }, [status]);
  // <ErrorLog />
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute componenets={ErrorLog} />}></Route>
      <Route
        path="/member"
        element={<PrivateRoute componenets={Member} />}
      ></Route>
      <Route
        path="/log"
        element={<PrivateRoute componenets={ErrorLog} />}
      ></Route>
    </Routes>
  );
}
