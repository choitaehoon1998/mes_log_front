import React, { useEffect } from "react";
import ErrorLog from "./Page/errorLog";
import LoginPage from "./Page/login";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./modules/changer";

export default function Router() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.changer);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    const refreshToken = window.localStorage.getItem("refreshToken");

    if (!(accessToken === null) && !(refreshToken === null)) {
      dispatch(login());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={status ? <ErrorLog /> : <LoginPage />}></Route>
    </Routes>
  );
}
